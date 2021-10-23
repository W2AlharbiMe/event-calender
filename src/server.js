'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const plugins = require('./plugins');

/**
 * @param {import("./config")} config
 * @returns {Hapi.Server}
 */
const app = async (config) => {
  const { server: serverConfig } = config;

  const server = Hapi.server({ ...serverConfig });

  server.app.config = config;

  // register modules/plugins
  await routes.register(server);
  await plugins.register(server);

  return server;
};

module.exports = app;
