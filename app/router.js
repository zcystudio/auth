'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login);
  router.post('/api/v1/register', controller.user.register);
  router.resources('identityRequest', '/api/vi/identityRequest', app.jwt, controller.identity);
};
