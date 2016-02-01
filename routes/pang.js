var express = require('express');
var router = express.Router();

/**
 * 定义路由：返回ping
 */

router.get('/', function(req, res, next) {
    res.send("ping");
});

module.exports = router;
