var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/city-search', function(req, res, next) {
    res.render('city-search');
});

router.get('/array-work', function(req, res, next) {
    res.render('array-work');
});
router.get('/css-variables', function(req, res, next) {
    res.render('css-variables');
});
router.get('/flex-panels', function(req, res, next) {
    res.render('flex-panels');
});
router.get('/drum-kit', function(req, res, next) {
    res.render('drum-kit');
});
router.get('/js-clock', function(req, res, next) {
    res.render('js-clock');
});

module.exports = router;