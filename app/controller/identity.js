'use strict';
const Controller = require('egg').Controller;

class IdentityController extends Controller {
  // post
  async create() {
    const { ctx, app } = this;
    try {
      ctx.validate(app.validator.identity.body, ctx.request.body);
      ctx.body = {
        success: true,
        message: 'post成功',
        payload: '',
      };
      ctx.status = 201;
    } catch (err) {
      ctx.logger.error(err);
      ctx.status = 500;
      ctx.body = err.message;
    }
  }
  // get
  async index() {
    const { ctx } = this;
    try {
      ctx.body = {
        success: true,
        message: 'get成功',
        payload: '',
      };
      ctx.status = 200;
    } catch (err) {
      ctx.logger.error(err);
      ctx.status = 500;
      ctx.body = err.message;
    }
  }
  // get :id
  async show() {
    const { ctx } = this;
    try {
      ctx.body = {
        success: true,
        message: 'show成功',
        payload: '',
      };
      ctx.status = 200;
    } catch (err) {
      ctx.logger.error(err);
      ctx.status = 500;
      ctx.body = err.message;
    }
  }
  // delete :id
  async destroy() {
    const { ctx, app } = this;
    try {
      ctx.validate(app.validator.identity.body, ctx.request.body);
      ctx.body = {
        success: true,
        message: 'delete成功',
        payload: '',
      };
      ctx.status = 200;
    } catch (err) {
      ctx.logger.error(err);
      ctx.status = 500;
      ctx.body = err.message;
    }
  }
}

module.exports = IdentityController;
