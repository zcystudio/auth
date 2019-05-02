'use strict';

module.exports = app => {
  const Joi = app.Joi;
  return {
    register: Joi.object().keys({
      userName: Joi.string().required(),
      passWord: Joi.string().required(),
      email: Joi.string().email().optional(),
      cellPhone: Joi.string().required(),
      roles: Joi.valid('user', 'admin').default('user'),
      applyForCertificate: Joi.valid('init', 'applying', 'done').default('init'),
    }),
    login: Joi.object().keys({
      userName: Joi.string().required(),
      passWord: Joi.string().required(),
    }),
  };
};
