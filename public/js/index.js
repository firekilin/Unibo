"use strict";

var account=this.account?(()=>{throw new Error()})():{};
$(() => {
  $("#gogo").click(() =>{
    $("#textBox").append("<div class='line'><div class='us'>"+$("#message").val()+"</div></div>");
    $.post("/api/getmessage", { 
      mess:$("#message").val(),
    }, (data, status) => {
      $("#textBox").append("<div class='line'><div class='other'>"+data+"</div></div>");
      });
  });
});
