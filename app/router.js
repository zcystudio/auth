'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/v1/login', controller.user.login);
  router.post('/api/v1/register', controller.user.register);
  router.resources('identityRequest', '/api/v1/identityRequest', app.jwt, controller.identity);
  router.get('/api/v1/docs', controller.swagger.index);
};
