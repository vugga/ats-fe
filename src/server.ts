import * as compression from "compression";
import * as express from "express";
import * as next from "next";
import { join } from "path";
import { format, parse } from "url";

import { env } from "./config";

const app = next({
  dir: __dirname,
  conf:
    env.NODE_ENV === "production"
      ? { distDir: "../.next", poweredByHeader: false }
      : undefined,
  dev: env.NODE_ENV !== "production",
});

const handle = app.getRequestHandler();

const rootStaticFiles = [
  "/browserconfig.xml",
  "/favicon.ico",
  "/manifest.json",
  "/robots.txt",
];
(async () => {
  await app.prepare();
  const server = express();

  server.use(compression());

  // handle any other requests
  server.get("*", (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if (rootStaticFiles.indexOf(pathname) > -1) {
      const path = join(__dirname, "static", pathname);
      return app.serveStatic(req, res, path);
    }

    if (
      pathname.length > 1 &&
      pathname.slice(-1) === "/" &&
      pathname.indexOf("/_next/") !== 0
    ) {
      return res.redirect(
        format({
          pathname: pathname.slice(0, -1),
          query,
        }),
      );
    }

    (req as any).graphqlUri = env.SERVER_URI + env.GRAPHQL_PATH;
    (req as any).nodeEnv = env.NODE_ENV;
    (req as any).serverUri = env.SERVER_URI;
    return handle(req, res);
  });

  server.listen(env.PORT, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on port ${env.PORT}`);
  });
})();
