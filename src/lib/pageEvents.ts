import * as _ from "lodash";
import Router from "next/router";
import NProgress from "nprogress";

// import { logPageView } from "./gtag";

if (typeof window !== "undefined") {
  // const debouncedLogPageView = _.debounce(logPageView, 500);

  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
    // debouncedLogPageView();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}
