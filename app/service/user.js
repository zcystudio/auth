'use strict';
const Service = require('egg').Service;

// for test
const users = [
  'user1dc2e64eeb1fb3a0e702e42ec5ec3fb6ec6e391d',
  'admin7bf0e784e573f5a8642877d0f802812063f3b9d1',
];

class UserService extends Service {

  // login
  async login(loginMsg) {
    const res = {};
    if (loginMsg.userName !== 'user' && loginMsg.userName !== 'admin') {
      res.code = 404;
      res.msg = 'user not found';
      res.data = {};
    } else {
      // just for test,it will select from database?
      const logininfo = loginMsg.userName + loginMsg.passWord;
      if (logininfo !== users[0] && logininfo !== users[1]) {
        res.code = 401;
        res.msg = '用户密码不符';
        res.data = {};
      } else {
        const token = this.app.jwt.sign({
          userName: loginMsg.userName,
        }, this.app.config.jwt.secret, { expiresIn: '600s' });
        res.data = {};
        res.code = 200;
        res.msg = '登录成功';
        res.token = token;
      }
    }
    return res;
  }
}

module.exports = UserService;
