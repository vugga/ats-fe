import "../lib/pageEvents";

import ApolloClient from "apollo-client";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
// import { Provider } from 'react-redux';
// import { Store } from "redux";
import withData from "../lib/withData";

class MyApp extends App<{ apolloClient: ApolloClient<{}>, reduxStore: Store }> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, apolloClient, /**reduxStore */ } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          {/* <Provider store={reduxStore}> */}
            <Component {...pageProps} />
          {/* </Provider> */}
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
