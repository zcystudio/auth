'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  // register
  async register() {
    const { ctx, app } = this;
    const regMsg = ctx.request.body;
    try {
      ctx.validate(app.validator.user.register, regMsg);
      regMsg.passWord = ctx.helper.encrypt(regMsg.passWord);
      const result = await ctx.service.user.register(regMsg);
      ctx.body = result;
      ctx.status = result.code;
    } catch (err) {
      ctx.logger.error(err);
      ctx.status = 500;
      ctx.body = {};
    }
  }
  // login
  async login() {
    const { ctx, app } = this;
    const loginMsg = ctx.request.body;
    try {
      ctx.validate(app.validator.user.login, loginMsg);
      loginMsg.passWord = ctx.helper.encrypt(loginMsg.passWord);
      const result = await ctx.service.user.login(loginMsg);
      ctx.body = result;
      if (result.code !== 200) {
        ctx.status = result.code;
      }
    } catch (err) {
      ctx.logger.error(err);
      ctx.status = 500;
      ctx.body = {};
    }
  }
}

module.exports = UserController;
