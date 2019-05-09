'use strict';
const { app } = require('egg-mock/bootstrap');
describe('test/controller/identity.test.js', () => {
  it('should identity successfully use jwt and return code correctly', async () => {
    const fabric = { type: 'fabric-ca' };
    const cfca = { type: 'cfca' };
    app.mockCsrf();
    const token = app.jwt.sign({
      userName: 'user',
    }, app.config.jwt.secret, { expiresIn: '600s' });
    await app.httpRequest()
      .post('/api/v1/identityRequest')
      .set('Authorization', 'Bearer ' + token)
      .type('form')
      .send(fabric)
      .expect(function(res) {
        res.body.message = 'post成功';
      })
      .expect(201);
    await app.httpRequest()
      .get('/api/v1/identityRequest')
      .set('Authorization', 'Bearer ' + token)
      .type('form')
      .send()
      .expect(function(res) {
        res.body.message = 'get成功';
      })
      .expect(200);
    await app.httpRequest()
      .get('/api/v1/identityRequest/:123')
      .set('Authorization', 'Bearer ' + token)
      .type('form')
      .send()
      .expect(function(res) {
        res.body.message = 'show成功';
      })
      .expect(200);
    await app.httpRequest()
      .delete('/api/v1/identityRequest/:123')
      .set('Authorization', 'Bearer ' + token)
      .type('form')
      .send(fabric)
      .expect(function(res) {
        res.body.message = 'delete成功';
      })
      .expect(200);
    await app.httpRequest()
      .post('/api/v1/identityRequest')
      .set('Authorization', 'Bearer ' + token)
      .type('form')
      .send(cfca)
      .expect(function(res) {
        res.body.message = 'post成功';
      })
      .expect(201);
  });

  it('should fail without jwt and return code 401', async () => {
    const cfca = { type: 'cfca' };
    app.mockCsrf();
    await app.httpRequest()
      .post('/api/v1/identityRequest')
      .type('form')
      .send(cfca)
      .expect(function(res) {
        res.body.message = 'No authorization token was found';
      })
      .expect(401);
  });

  it('should fail with incorrect type and return code 401', async () => {
    const cfca = { type: 'xxxx' };
    app.mockCsrf();
    const token = app.jwt.sign({
      userName: 'user',
    }, app.config.jwt.secret, { expiresIn: '600s' });
    await app.httpRequest()
      .post('/api/v1/identityRequest')
      .set('Authorization', 'Bearer ' + token)
      .type('form')
      .send(cfca)
      .expect(500);
  });
});
