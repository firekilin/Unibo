"use strict";

var unibo=this.unibo?(()=>{throw new Error()})():{};
$(() => {
  unibo.feedback=()=>{
    $.post("/api/sendfeedback", { 
      name:$('input[name="name"]').val(),
      title:$('input[name="title"]').val(),
      content:$('textarea[name="content"]').val()
    }, (data, status) => {
      if(data.mes=='OK'){
        alert("成功，感謝你的回饋");
      }else{
        alert("失敗，回饋可能出錯");
      }
    
    });
  }
});
