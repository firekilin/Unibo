'use strict';
const dbget = require('./uniboDb');
const query = dbget.query;
const Jieba = require('nodejieba');
Jieba.load({dict: './models/dict.txt'});

//取得問題並搜尋
exports.getMessage =async (req, res) => {

  let cutList=[];
  let cutTogether="";
  let message = req.body.mess;

  cutList=await Jieba.cutAll(message)
  for(let i=0;i<cutList.length;i++){
    cutTogether+=i==0?"('"+cutList[i]+"'":",'"+cutList[i]+"'";
  }
  cutTogether+=")";
  let anser = [];
  let qustion = [];
  try{
    let data = await query(`SELECT count(complent)as keyword,complent,message,output_message 
    FROM select_message,complent_message  
    where idcomplent_message=complent and item in `+cutTogether+` 
    group by complent 
    order by keyword desc;`);
    let ansmax=data[0].keyword;;

    for (let i = 0; i < data.length; i++){
    
      if(data[i].keyword>=ansmax){
        let qs=data[i].message;
        let ans=data[i].output_message;
        anser.push({qs,ans});
      }else{
        qustion.push(data[i].message);
      }  
    }
  }catch(e){
    anser.push('null');
  }
  res.send({anser,qustion});



}
//讀取問題及答案
exports.getQA =async (req, res) => {
  let pagelimit = req.body.page;
  //取得總項目數量
  let querypage = await query(`select idcomplent_message FROM complent_message` );
  let totalpage=0;
  totalpage=querypage.length;
  let selectLimit = " limit " + ( pagelimit - 1) * 25 + ",25";
  let qa = await query(`SELECT * FROM complent_message `+selectLimit);
  let qaList=[];
  for(let i=0;i<qa.length;i++){
    let qaId=qa[i].idcomplent_message;
    let qaMessage=qa[i].message;
    let qaAnser=qa[i].output_message;
    qaList.push({qaId,qaMessage,qaAnser});
  }
  return {rows:qaList,totalpage};
}
//讀取問題 關鍵詞
exports.getQAList =async (req, res) => {
  let id;
  if(req.body!=null){
    id=req.body.id;
  }else{
    id=req.params.id;
  }
  let qa = await query(`SELECT idselect_message,item FROM select_message where complent='`+id+`';`);
  let qaList=[];
  for(let i=0;i<qa.length;i++){
    let qaBigId=qa[i].idselect_message;
    let qaId=i+1;
    let qaKeyword=qa[i].item;
    qaList.push({qaBigId,qaId,qaKeyword});
  }
  return {rows:qaList};
}
exports.addQA = async (req, res) =>{
  let cutList = [];
  let cutTogether = "";
  let message = req.body.qaMessage;
  let ans = req.body.qaAnser;
  let qaOper = req.body.oper;
  let qaId = "";
  try{
    if (qaOper=="add"){

      let data = await query(`INSERT INTO complent_message (message, output_message) VALUES ('`+message+`', '`+ans+`');  `);
      qaId = data.insertId;
     
      cutList=await Jieba.cutAll(message);
        for(let i=0;i<cutList.length;i++){
          cutTogether=`INSERT INTO select_message (item, complent) VALUES ('`+cutList[i]+`', '`+qaId+`');`;
          let getback= await query(cutTogether);
        }
   
  

    }else if(qaOper=="edit"){

      qaId = req.body.id;
      await query(`UPDATE complent_message SET message = '`+ message +`', output_message = '`+ ans +`' WHERE (idcomplent_message = '`+ qaId +`');    `);
    }else{

      qaId = req.body.id;
      await query(`DELETE FROM complent_message WHERE (idcomplent_message = '`+ qaId +`');`);

    }

    return({mes:"OK",qaId});

  }catch(e){
    return({mes:"error",qaId});
  }

}

exports.addQAList = async (req, res) =>{

  let qasId = req.params.id;
  let message = req.body.qaKeyword;
  let qaOper = req.body.oper;
  let qaId = "";
  try{
    if (qaOper=="add"){
      let data = await query(`INSERT INTO select_message (item, complent) VALUES ('`+message+`', '`+qasId+`');`);
      qaId=data.insertId;
    }else if(qaOper=="edit"){
      qaId = req.body.id;
      await query(`UPDATE select_message SET item = '`+ message +`' WHERE (idselect_message = '`+ qaId +`');    `);
    }else{

      qaId = req.body.id;
      await query(`DELETE FROM select_message WHERE (idselect_message = '`+ qaId +`');`);

    }

    return({mes:"OK",qaId});

  }catch(e){
    return({mes:"error",qaId});
  }

}



module.exports = exports;