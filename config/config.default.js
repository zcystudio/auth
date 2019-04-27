'use strict';
exports.keys = '1qaz#EDC';
exports.pwd_salt = 'egg-api-salt';
// jsonwebtoken
exports.jwt = {
  secret: 'egg-api-jwt',
};
exports.cors = {
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
};
// mongodb
exports.mongo = {
  client: {
    host: 'dev.zhaochy.com',
    port: '27017',
    name: 'auth',
    user: 'admin',
    password: 'adminpw',
    options: { authSource: 'admin' },
  },
};
exports.security = {
  csrf: {
    ignoreJSON: true,
  },
};
exports.joi = {
  options: {},
  locale: {
    'zh-cn': {},
  },
  throw: true,
  throwHandle: error => { return error; },
  errorHandle: error => { return error; },
  resultHandle: result => { return result; },
};
exports.mongodb = {
  collection: 'users',
};

