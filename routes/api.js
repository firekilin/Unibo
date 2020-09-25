const router = require('express').Router();

const querymessage = require('../models/message');
const bodyParser = require('body-parser'); //設定取得req.body
router.use( bodyParser.json() ); //req.body支援json格式
router.use( bodyParser.urlencoded( { extended : true} ) ); //解析內容 

router.post('/getMessage', async (req, res) => {
  querymessage.getMessage(req, res);
});

module.exports = router;