import * as React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { atsTheme } from "./../theme";
import { AtsScreen } from "../screens/Ats/AtsScreen";

// const isBrowser = typeof window !== "undefined";

let history;

export default class RootApp extends React.Component {
  state = {
    isClient: false,
  };

  componentDidMount() {
    this.setState({ isClient: true });
    history = createBrowserHistory();
  }

  render() {
    const { isClient } = this.state;

    if (isClient) {
      return (
        <Router history={history}>
          <ThemeProvider theme={atsTheme}>
            <React.Fragment>
              <Route exact={true} path="/" component={AtsScreen} />
            </React.Fragment>
          </ThemeProvider>
        </Router>
      );
    }

    return <div>Loading app</div>;
  }
}
