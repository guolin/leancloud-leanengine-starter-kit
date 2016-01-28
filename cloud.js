var AV = require('leanengine');
/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('ping', function(req, res) {
  res.success('pang');
});

module.exports = AV.Cloud