/** @Author : YuXueWen
 * @File : request.js
 * @Email : 8586826@qq.com
 **/

'use strict';

const assert = require('assert');
const Core = require('@alicloud/pop-core');

function checkBucketConfig(config) {
  assert(config.accessKeyId && config.accessKeySecret && config.endpoint,
    '[egg-aliCloud-pop-core] Must set `accessKeyId` and `accessKeySecret` and `endpoint` in aliCloudPopCore\'s config');
}

module.exports = app => {
  app.addSingleton('aliyunPopCore', config => {
    checkBucketConfig(config);

    return new Core(config);
  });


};
