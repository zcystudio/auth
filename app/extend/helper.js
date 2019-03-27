'use strict';
const Crypto = require('crypto');

module.exports = {
  encrypt(data) {
    // sha1加密
    const hmac = Crypto.createHmac('sha1', this.config.pwd_salt);
    hmac.update(data);
    const result = hmac.digest('hex');
    return result;
  },
};
