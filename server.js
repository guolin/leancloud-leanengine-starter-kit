"use strict"
var AV = require('leanengine');
require('babel-register');
const APP_ID = process.env.LC_APP_ID;
const APP_KEY = process.env.LC_APP_KEY;
const MASTER_KEY = process.env.LC_APP_MASTER_KEY;

AV.initialize(APP_ID, APP_KEY, MASTER_KEY);

let app = require('./app');

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LC_APP_PORT || 3000);

//require("babel-core").transform(app);

var server = app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);
});
