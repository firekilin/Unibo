const router = require('express').Router();

router.get('/index', (req, res)=> {
  res.render('index');
});
router.get('/product', (req, res)=> {
  res.render('product');
});
router.get('/service', (req, res)=> {
  res.render('service');
});
module.exports = router;