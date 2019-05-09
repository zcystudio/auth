'use strict';
const Controller = require('egg').Controller;


class SwaggerController extends Controller {
  async index() {
    await this.ctx.render('swagger');
  }

}

module.exports = SwaggerController;
