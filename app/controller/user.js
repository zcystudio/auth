'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  // login
  async login() {
    const { ctx } = this;
    const rule = {
      userName: { type: 'string', required: true, message: '必填项' },
      passWord: { type: 'string', required: true, message: '必填项' },
    };
    const loginMsg = ctx.request.body;
    await ctx.validate(rule, loginMsg);
    loginMsg.passWord = ctx.helper.encrypt(loginMsg.passWord);
    const result = await ctx.service.user.login(loginMsg);
    ctx.body = result;
    if (result.code !== 200) {
      ctx.status = result.code;
    }
  }
}

module.exports = UserController;
