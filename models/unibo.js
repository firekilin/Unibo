const db = require('./uniboDb');
const query = db.query;

//圖片庫
exports.getImgBox= async (req, res) => {

  let imgBox =  await query(`SELECT idunibo,unibo_img,unibo_name FROM unibo;`);
  let imgBoxList=[];
  for(let i=0;i<imgBox.length;i++){
    let id=imgBox[i].idunibo;
    let boxImg=imgBox[i].unibo_img;
    let Name=imgBox[i].unibo_name;
    if(boxImg==null){
    }else{
      boxImg = "data:image/gif;base64,"+Buffer.from(boxImg).toString('base64');
    }

    imgBoxList.push({id,boxImg,Name});
  }
  return {rows:imgBoxList};
}
//圖片庫新增修改刪除
exports.uploadImgBox= async (req, res) => {
  let imgBoxName = "";
  let imgBoxOper = req.body.oper;
  let imgBoxId = "";
  try{
    if (imgBoxOper=="add"){
      imgBoxName = req.body.Name;
      let imgBoxMessage= await query(`INSERT INTO unibo (unibo_name) VALUES ('`+imgBoxName+`');`);
      imgBoxId=imgBoxMessage.insertId;
    }else if(imgBoxOper=="edit"){
      imgBoxName = req.body.Name;
      imgBoxId = req.body.id;
      await query(`UPDATE unibo SET unibo_name = '`+imgBoxName+`' WHERE (idunibo = '`+imgBoxId+`');`);
      

    }else{
      imgBoxId = req.body.id;
      await query(`DELETE FROM unibo WHERE (idunibo = '`+ imgBoxId +`');`);
    }
    res.send({mes:"OK",imgBoxId});
  }catch(e){
    res.send({mes:"error",imgBoxId});
  }
}
//圖片庫
exports.uploadImgBoxs= async (req, res) => {
  //console.log('file => ', req.file);  // 取得檔案
  //console.log('id => ', req.body.id);  // 取得檔案
 try {
   await query(`update unibo set unibo_img = ? where idunibo='`+req.body.id+`'`, req.file.buffer);
 } catch (err) {
   //console.log(err.sqlMessage)
 }
 
res.send({mes:"123"});

}
//取得情緒
exports.getface= async (req, res) => {
 let imgBoxList=[];
 try {
   let imgBox= await query(`SELECT idunibo,unibo_name FROM unibo;`);
   for(let i=0;i<imgBox.length;i++){
    let id=imgBox[i].idunibo;
    let Name=imgBox[i].unibo_name;
    imgBoxList.push({id,Name});
  }

 } catch (err) {
 }  
 return imgBoxList;
}
 
module.exports=exports;