import Head from "next/head";
import React from "react";
import { getDataFromTree } from "react-apollo";

import initApollo from "./initApollo";
// import initRedux from "./initRedux";
// import { Store } from "redux";

const isBrowser = typeof window !== "undefined";

export default (App) => {
  return class Apollo extends React.Component<{
    graphqlUrl: string;
    apolloState: any;
    // reduxState: any;
  }> {
    public static displayName = "withApollo(App)";
    public static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const { graphqlUri, serverUri } =
        ctx.ctx.req || (window as any).__NEXT_DATA__.props; // coming from the env

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo({ uri: graphqlUri });
      // let reduxState: Store = initRedux();
      if (!isBrowser) {
        // reduxState = initRedux();
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
              // reduxStore={reduxState}
            />,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();
      // const serverState = reduxState.getState();

      return {
        ...appProps,
        apolloState,
        // reduxState: serverState,
        graphqlUri,
        serverUri,
      };
    }
    private apolloClient;
    private reduxStore;

    public constructor(props) {
      super(props);
      this.apolloClient = initApollo({
        initialState: props.apolloState,
        uri: props.graphqlUri,
      });

      // this.reduxStore = initRedux(props.reduxState);
    }

    public render() {
      return (
        <App
          {...this.props}
          apolloClient={this.apolloClient}
          // reduxStore={this.reduxStore}
        />
      );
    }
  };
};
