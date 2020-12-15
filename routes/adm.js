const router = require('express').Router();

router.get('/index', function(req, res) {
  res.render('QAList');
});
router.get('/feedback',function(req,res){
  res.render('Feedback');
});


module.exports = router;