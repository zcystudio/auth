'use strict';
const { app } = require('egg-mock/bootstrap');
describe('test/controller/user.test.js', () => {
  it('userController', async () => {
    const user = { userName: 'admin', passWord: 'admin' };
    app.mockCsrf();
    await app.httpRequest()
      .post('/login')
      .type('form')
      .send(user)
      .expect(function(res) {
        res.body.token.length > 0;
        res.body.msg = '登录成功';
      })
      .expect(200);
  });
  it('userController1', async () => {
    const user = { userName: 'user', passWord: 'user' };
    app.mockCsrf();
    await app.httpRequest()
      .post('/login')
      .type('form')
      .send(user)
      .expect(function(res) {
        res.body.token.length > 0;
        res.body.msg = '登录成功';
      })
      .expect(200);
  });
  it('userController2', async () => {
    const user = { userName: 'admin', passWord: 'user' };
    app.mockCsrf();
    await app.httpRequest()
      .post('/login')
      .type('form')
      .send(user)
      .expect(function(res) {
        res.body.msg = '用户密码不符';
      })
      .expect(401);
  });
  it('userController3', async () => {
    const user = { userName: 'adfa', passWord: 'user' };
    app.mockCsrf();
    await app.httpRequest()
      .post('/login')
      .type('form')
      .send(user)
      .expect(function(res) {
        res.body.msg = 'user not found';
      })
      .expect(404);
  });

});
