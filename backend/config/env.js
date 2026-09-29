require("dotenv").config();

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3001;

module.exports = {
  env,
  port,
  NODE_ENV: env,
  PORT: port,
};
