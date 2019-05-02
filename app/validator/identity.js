'use strict';

module.exports = app => {
  const Joi = app.Joi;
  return {
    body: Joi.object().keys({
      type: Joi.valid('fabric-ca', 'cfca').required(),
    }),
  };
};
