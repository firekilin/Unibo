"use strict";

var unibo=this.unibo?(()=>{throw new Error()})():{};
$(() => {
    $("#gogo").click(() =>{
      $("#textBox").append("<div class='line'><div class='us'>"+$("#message").val()+"</div></div>");
      $.post("/api/getmessage", { 
        mess:$("#message").val(),
      }, (data, status) => {
        for(let i=0;i<data.anser.length;i++){
          $("#textBox").append("<div class='line'><div class='other'>"+data.anser[i].qs+"<br>"+data.anser[i].ans+"</div></div>");
        }
        $('#textBox').animate({ scrollTop:$('#textBox')[0].scrollHeight }, 800);
        });
    });

  unibo.stt=createVoiceSpeechRecognition();
  $("#listen").mousedown(()=>{
    unibo.stt.startRecognition();
  });
  $("#listen").mouseup(()=>{
    unibo.stt.stopRecognition();
  });
  unibo.stt.onend=()=>{
    $("#message").val(unibo.stt.finalRecognizing);
    unibo.stt.resetRecognition();
    $("#gogo").click();
  }

  
});

