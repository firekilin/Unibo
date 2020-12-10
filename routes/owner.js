const router = require('express').Router();

router.get('/index', function(req, res) {
  res.render('index');
});
router.get('/product', function(req, res) {
  res.render('product');
});

module.exports = router;