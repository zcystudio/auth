'use strict';
module.exports = () => {
  const config = exports = {};
  config.keys = '1qaz#EDC';
  config.pwd_salt = 'egg-api-salt';
  // jsonwebtoken
  config.jwt = {
    secret: 'egg-api-jwt',
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  return config;
};
