'use strict';
const dbget = require('./uniboDb');
const query = dbget.query;
//取得回饋

exports.sendfeedback = async (req, res) =>{
  let feedbackName = req.body.name;
  let feedbackTitle = req.body.title;
  let feedbackContent = req.body.content;
  try{
    await query(`INSERT INTO feedback (feedback_name, feedback_title, feedback_content) VALUES ('`+feedbackName+`', '`+feedbackTitle+`', '`+feedbackContent+`');`);
      
    return({mes:"OK"});

  }catch(e){
    return({mes:"error"});
  }

}
exports.getfeedback = async (req, res) =>{
  let pagelimit = req.body.page;
  //取得總項目數量
  let querypage = await query(`select idfeedback FROM feedback` );
  let totalpage=0;
  totalpage=querypage.length;
  let selectLimit = " limit " + ( pagelimit - 1) * 25 + ",25";
  let feedback = await query(`SELECT idfeedback,feedback_name,feedback_title,feedback_content FROM feedback order by idfeedback desc`+selectLimit);
  let feedbackList=[];
  for(let i=0;i<feedback.length;i++){
    let feedbackName=feedback[i].feedback_name;
    let feedbackTitle=feedback[i].feedback_title;
    let feedbackContent=feedback[i].feedback_content;
    feedbackList.push({feedbackName,feedbackTitle,feedbackContent});
  }
  return {rows:feedbackList,totalpage};
}


module.exports = exports;