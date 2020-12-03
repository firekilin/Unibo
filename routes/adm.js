const router = require('express').Router();

router.get('/index', function(req, res) {
  res.render('QAList');
});


module.exports = router;