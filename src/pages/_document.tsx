import { readFileSync } from "fs";
import * as _ from "lodash";
import Document, { Head, Main, NextScript } from "next/document";
import { resolve } from "path";
import React from "react";
import { ServerStyleSheet } from "styled-components";

const nextDir = resolve(process.cwd(), ".next");
const doGetContent = (file) => readFileSync(resolve(nextDir, file), "utf8");
const getContent =
  process.env.NODE_ENV === "production"
    ? _.memoize(doGetContent)
    : doGetContent;
class InlineStylesHead extends Head {
  public getCssLinks() {
    return this.__getInlineStyles();
  }

  public __getInlineStyles() {
    const { assetPrefix, files } = (this as any).context._documentProps;
    if (!files || files.length === 0) {
      return null;
    }

    return files
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: getContent(file),
          }}
        />
      ));
  }
}

export default class MyDocument extends Document<{
  styleTags;
  gaTrackingId;
  locale;
}> {
  public static getInitialProps({ renderPage, req }: { renderPage; req? }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      locale: req.locale,
      styleTags,
      // gaTrackingId: req.gaTrackingId,
      // hostByLocale: req.hostByLocale,
    };
  }

  public render() {
    return (
      <html lang={this.props.locale}>
        <InlineStylesHead>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=500" />
          {/* <link rel="preconnect" href="https://www.google-analytics.com" /> */}
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          {this.props.styleTags}
          {/* {this.props.gaTrackingId ? (
            [
              <script
                key="ga1"
                async={true}
                src={`https://www.googletagmanager.com/gtag/js?id=${
                  this.props.gaTrackingId
                }`}
              />,
              <script
                key="ga2"
                dangerouslySetInnerHTML={{
                  __html: removeCommentsAndSpacing(`
                      window.dataLayer = window.dataLayer || [];
                      window.gaTrackingId = '${this.props.gaTrackingId}';
                      function gtag(){
                        dataLayer.push(arguments)
                      }
                      gtag('js', new Date());
                      gtag('config', window.gaTrackingId);
                  `),
                }}
              />,
            ]
          ) : (
            <script
              dangerouslySetInnerHTML={{
                __html: removeCommentsAndSpacing(`
                function gtag(){
                  console.log('dummy gtag call', arguments)
                }`),
              }}
            />
          )} */}
        </InlineStylesHead>
        <body>
          <div className="next-main">
            <Main />
          </div>
          <NextScript />
          {/* <script src="/static/js/modernizr.min.js"/> */}
        </body>
      </html>
    );
  }
}
