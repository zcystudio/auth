'use strict';
const { app } = require('egg-mock/bootstrap');
describe('test/controller/user.test.js', () => {
  it('should login successfully with return code 200', async () => {
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
  it('should login successfully with username is user and return code 200', async () => {
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
  it('should login failed by wrong password and return code 401', async () => {
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
  it('should failed by user not found with return code 404', async () => {
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

  it('should register successfully with return code 200', async () => {
    const user = {
      userName: new Date(),
      passWord: 'user',
      cellPhone: '13700000371',
    };
    app.mockCsrf();
    await app.httpRequest()
      .post('/api/v1/register')
      .type('form')
      .send(user)
      .expect(function(res) {
        res.body.data.success = true;
        res.body.data.message = '注册成功';
      })
      .expect(200);
  });

  it('should faild by user is exist and return code 400', async () => {
    const user = {
      userName: 'user',
      passWord: 'user',
      cellPhone: '13700000371',
    };
    app.mockCsrf();
    await app.httpRequest()
      .post('/api/v1/register')
      .type('form')
      .send(user)
      .expect(function(res) {
        res.body.data.success = false;
        res.body.data.message = '用户已存在';
      })
      .expect(400);
  });
});
