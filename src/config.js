'use strict';

require('dotenv').config(); // load .env file
const assert = require('assert');

// make sure that all keys are exists.
(() => {
  const keys = Object.keys(process.env);

  keys.forEach((key) => {
    assert(key, `${key}, is required.`);
  });
})();

// extract .env values
const {
  NODE_ENV,
  APP_SERVER_HOST,
  APP_SERVER_PORT,
  APP_SERVER_HOST_URL,

  APP_SESSION_NAME,
  APP_SESSION_SECRET,

  APP_DATABASE_HOST,
  APP_DATABASE_NAME,
  APP_DATABASE_USERNAME,
  APP_DATABASE_PASSWORD,

  APP_OKTA_URL,
  APP_OKTA_CLIENT_ID,
  APP_OKTA_SECRET,
} = process.env;

module.exports = {
  env: NODE_ENV,

  // server module config
  server: {
    host: APP_SERVER_HOST,
    url: APP_SERVER_HOST_URL,
    port: APP_SERVER_PORT,
  },

  // session module config
  session: {
    name: APP_SESSION_NAME,
    secret: APP_SESSION_SECRET,
  },

  // database plugin config
  database: {
    host: APP_DATABASE_HOST,
    database: APP_DATABASE_NAME,
    username: APP_DATABASE_USERNAME,
    password: APP_DATABASE_PASSWORD,
    // encrypt: Boolean(!(NODE_ENV.toLowerCase() === 'development')),
  },

  // 3rd party authentication
  okta: {
    url: APP_OKTA_URL,
    clientId: APP_OKTA_CLIENT_ID,
    secret: APP_OKTA_SECRET,
  },
};
