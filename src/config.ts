import * as envalid from "envalid";

export const env = envalid.cleanEnv(process.env, {
  SERVER_URI: envalid.str({ default: "http://localhost:3010" }),
  // GRAPHQL_PATH: envalid.str(),
  NODE_ENV: envalid.str({ default: "development" }),
  PORT: envalid.port({ default: 3000 }),
  ENFORCED_LOCALE: envalid.str({ default: "" }),
});
