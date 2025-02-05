var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('=== /hello route has been called ===');
    res.render('hello', { title: 'Hello Express' });
});

module.exports = router;
