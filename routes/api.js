const router = require('express').Router();

const querymessage = require('../models/message');
const queryfeedback = require('../models/feedback');
const uniboimg=require('../models/unibo');
const upload = require('../models/uploadMulter');
const bodyParser = require('body-parser'); //設定取得req.body
router.use( bodyParser.json() ); //req.body支援json格式
router.use( bodyParser.urlencoded( { extended : true} ) ); //解析內容 

router.post('/getMessage', async (req, res) => {
  querymessage.getMessage(req, res);
});
//問題以及回答
router.post('/getQA', async(req, res) => {
  res.send(await querymessage.getQA(req,res));
}); 
router.post('/addQa', async(req, res) => {
  res.send(await querymessage.addQA(req,res));
}); 
//關鍵詞
router.post('/getQAList', async(req, res) => {
  res.send(await querymessage.getQAList(req,res));
}); 
router.post('/addQAList/:id', async(req, res) => {
  res.send(await querymessage.addQAList(req,res));
}); 
//回饋
router.post('/sendfeedback', async(req, res) => {
  res.send(await queryfeedback.sendfeedback(req,res));
}); 
router.post('/getfeedback', async(req, res) => {
  res.send(await queryfeedback.getfeedback(req,res));
}); 
//取得圖片
router.post('/getImgBox', async(req, res) => {
  res.send( await uniboimg.getImgBox(req,res));
});
router.post('/addImgBox', async(req, res) => {
  uniboimg.uploadImgBox(req,res);
});
router.post('/uploadImgBox',upload.single('image'),async (req, res) => {
  res.send(await uniboimg.uploadImgBoxs(req,res)) ;
});
//取得情緒
router.get('/getface',async(req, res) => {
  res.send( await uniboimg.getface(req,res));
});
module.exports = router;