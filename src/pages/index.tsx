import * as React from "react";
import { NextFunctionComponent } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { vugaTheme } from "../theme";

const Home: NextFunctionComponent = () => {
  return (
    <ThemeProvider theme={vugaTheme}>
      <React.Fragment>
        <Head>
          <title>Vuga ATS</title>
        </Head>
        <div>Some component</div>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Home;
