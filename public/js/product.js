"use strict";

var unibo=this.unibo?(()=>{throw new Error()})():{};
$(() => {
    $("#gogo").click(() =>{

      $("#textBox").append("<div class='line'><img src='./public/img/users.png' class='round_icon cont' ><div class='us'>"+$("#message").val()+"</div></div>");
     
      $("#textBox").append("<div class='line' id='loading'><img src='./public/img/unibo/standard2.gif' class='round_icon cont2' ><div class='other dotloading'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div></div>");
      
      $.post("/api/getmessage", { 
        mess:$("#message").val(),
      }, (data, status) => {
        
        for(let i=0;i<data.anser.length;i++){
          if(data.anser[i]=='null'){
            let anns="https://www.dcard.tw/f/cycu<br>https://www.facebook.com/CYCU.PR/"
            
            $("#textBox").append("<div class='line'><img src='./public/img/unibo/cry_motion2.gif' class='round_icon cont2' ><div class='other'>查無資料<br>可以到相關網站進行詢問喔。<br>"+anns+"<br>也可以幫我們填寫回饋單使我們增加題庫</div></div>");
            $("#uniboface")[0].src="./public/img/unibo/cry.gif";
            
          }else{
            let ans=data.anser[i].ans;
            let htmfirst=ans.indexOf("http");
            let htmend=ans.indexOf("。",htmfirst);
            let showans="";
            let urlsave="";
            for(let i=0;i<ans.length;i++){
                if(i==htmfirst){
                    urlsave+=ans[i];
                    showans+="<a style='word-break: break-all;' href='"+ans[i];
                }else if(i>htmfirst&&i<htmend){
                    showans+=ans[i];
                    urlsave+=ans[i];
                }else if(i==htmend){
                    showans+="'>"+ urlsave +"</a>";
                }else{
                    showans+=ans[i];
                }
              
            }
       
            
            $("#textBox").append("<div class='line'><img src='./public/img/unibo/standard2.gif' class='round_icon cont2' ><div class='other'>"+data.anser[i].qs+"<br>"+showans+"</div></div>");
            $("#uniboface")[0].src=data.uniboFace;
          }
         
        }
        $('#getquestion').text("");
        for(let i=0;i<data.qustion.length;i++){
          if(data.qustion[i]!='null'){
            $("#getquestion").append(`<div class='questionitem' onclick="unibo.sendmsg('`+data.qustion[i]+`')">`+data.qustion[i]+`</div>`)
          }
        }
        $("#loading").remove();
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
  unibo.sendmsg=(msg)=>{
    $("#message").val(msg);
    $("#gogo").click();
  }



  navigator.getUserMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

  if (typeof navigator.mediaDevices.getUserMedia === 'undefined') {
      navigator.getUserMedia({
          audio: true
      }, streamHandler, errorHandler);
  } else {
      navigator.mediaDevices.getUserMedia({
          audio: true
      }).then(streamHandler).catch(errorHandler);
  }
  
});
