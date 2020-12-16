const router = require('express').Router();

router.get('/index',(req, res)=>{
  res.render('QAList');
});
router.get('/feedback',(req,res)=>{
  res.render('Feedback');
});
router.get('/unibo',(req,res)=>{
  res.render('unibo');
});

module.exports = router;