/* eslint-disable @typescript-eslint/no-var-requires */

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
// const withCss = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    withTypescript,
    // withCss,
    [
      withBundleAnalyzer,
      {
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
          process.env.BUNDLE_ANALYZE,
        ),
      },
    ],
  ],
  {
    distDir: "../.next",
    // exportPathMap: function() {
    //   return {
    //     '/': { page: '/' }
    //   }
    // },
    webpack: (config, { isServer }) => {
      config.plugins.push(new LodashModuleReplacementPlugin({ paths: true }));
      if (!isServer) {
        config.externals = {
          "./config": "{}",
        };
      }
      return config;
    },
  },
);
