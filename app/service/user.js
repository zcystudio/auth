'use strict';
const Service = require('egg').Service;
const uuid = require('uuid/v4');
const { ObjectId } = require('mongodb');

class UserService extends Service {
  // register
  async register(regMsg) {
    const { ctx } = this;
    const res = {};
    const collection = ctx.app.config.mongodb.collection;

    const queryResult = await ctx.app.mongo.findOne(collection, { query: { userName: regMsg.userName } });
    if (queryResult) {
      res.code = 400;
      res.data = {
        success: false,
        message: '用户已存在',
        payload: '',
      };
    } else {
      const myUUID = uuid().replace(/\-/g, '').substr(1, 24);
      const userInfo = {
        _id: new ObjectId(myUUID),
        userName: regMsg.userName,
        passWord: regMsg.passWord,
        email: regMsg.email,
        cellPhone: regMsg.cellPhone,
        roles: regMsg.roles,
        applyForCertificate: regMsg.applyForCertificate,
      };

      const result = await ctx.app.mongo.insertOne(collection, { doc: userInfo });
      if (result.result.ok > 0) {
        res.data = {
          success: true,
          message: '注册成功',
          payload: '',
        };
        res.code = 200;
      } else {
        res.data = {
          success: false,
          message: '注册失败',
          payload: '',
        };
        res.code = 500;
      }
    }
    return res;
  }
  // login
  async login(loginMsg) {
    const res = {};
    const { ctx } = this;
    const collection = ctx.app.config.mongodb.collection;

    const queryResult = await ctx.app.mongo.findOne(collection, { query: { userName: loginMsg.userName } });
    if (queryResult == null) {
      res.code = 404;
      res.msg = 'user not found';
    } else {
      if (loginMsg.passWord !== queryResult.passWord) {
        res.code = 401;
        res.msg = '用户密码不符';
      } else {
        const token = this.app.jwt.sign({
          userName: loginMsg.userName,
        }, this.app.config.jwt.secret, { expiresIn: '600s' });
        res.code = 200;
        res.msg = '登录成功';
        res.token = token;
      }
    }
    return res;
  }
}

module.exports = UserService;
