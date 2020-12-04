const router = require('express').Router();
var VSR = require('voice-speech-recognition');
router.get('/index', function(req, res) {
  res.render('index',{VSR:VSR});
});


module.exports = router;