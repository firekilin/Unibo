'use strict';
const dbget = require('./uniboDb');
const query = dbget.query;
var Jieba = require('node-jieba');

var analyzer = Jieba({
    debug: false
  });
 

//取得問題並搜尋
exports.getMessage =async (req, res) => {
  let cutList=[];
  let cutTogether="";
  let message = req.body.mess;

  await analyzer.cut(message,async  (mia,output) =>{
    cutList=output;
    console.log(output);
    for(let i=0;i<cutList.length;i++){
      cutTogether+=i==0?"('"+cutList[i]+"'":",'"+cutList[i]+"'";
    }
    cutTogether+=")";
    let data = await query(`SELECT * FROM unibo.select_message where SM_get in`+cutTogether+`;`);
  console.log(`SELECT * FROM unibo.select_message where SM_get in`+cutTogether+`;`);
    for (let i = 0; i < data.length; i++){
      let category = data[i].SM_put;
      output.push( {category} );
      
      res.send(category);
    }
  });


 
}

module.exports = exports;