
'use strict';
var feedback=this.feedback?(()=>{throw new Error()})():{};
$(() => { //初始設定
  feedback.newData=(page)=>{
    let pagecheck=true;
    $("#feedbackList").GridUnload();
    jQuery("#feedbackList").jqGrid({
      url:'../api/getfeedback',
      datatype: "json",
      
      mtype: 'post',
      colNames:['id','問題', '答覆'],
      colModel:[
        {name:'feedbackName',index:'feedbackName',key: true},
        {name:'feedbackTitle',index:'feedbackTitle',editable:true,editoptions: { value: "是:否" }},
        {name:'feedbackContent',index:'feedbackContent',editable:true},
      ],
      rowNum:25,
      pager: '#feedbackPage',
      page: page!=null?page:1,
     viewrecords: true,
     pgtext: '{0}: <div class="jqgridInput" style="display:inline" id="totalpage"></div> ',
     recordtext: '<div class="jqgridInput" style="display:inline" id="totalitem"></div>筆',
     multiselect: false,
       loadComplete: (e) => {  
        feedback.reSizejqGridWidth(feedback.tableList);
        $("#totalitem").text(e.totalpage); //設定切換頁面
        let pages=Math.floor(e.totalpage / 25)+1;
        $("#totalpage").text(pages);
      
          if (page==pages){
            $("#last_feedbackPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
            $("#next_feedbackPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
          }else{
            $("#last_feedbackPage").attr('class', 'ui-pg-button ui-corner-all');
            $("#next_feedbackPage").attr('class', 'ui-pg-button ui-corner-all');
          }
          if (page!=1){
            $("#first_feedbackPage").attr('class', 'ui-pg-button ui-corner-all');
            $("#prev_feedbackPage").attr('class', 'ui-pg-button ui-corner-all');
          }else{
            $("#first_feedbackPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
            $("#prev_feedbackPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
          }
          if(pagecheck){
            $('#first_feedbackPage').click(()=>{
              feedback.newData(1);
            });
            $('#prev_feedbackPage').click(()=>{
              feedback.newData(--page);
            });
            $('#next_feedbackPage').click(()=>{
              feedback.newData(++page);
            });
            $('#last_feedbackPage').click(()=>{
              feedback.newData(pages);
            });
            pagecheck=false;
          }
         
        
     
      },onPaging:() => {
        return "stop";
      }
      
    });

   
    jQuery("#feedbackList").jqGrid('navGrid','#feedbackPage',
    {edit:false,add:false,del:false,search:false,refresh:false,afterRefresh:()=>{
      feedback.newData(page);
    }},
   
    );
  
  }




  feedback.tableList=['feedbackList'];

  feedback.reSizejqGridWidth=(tableList)=>{ 
    for(let i=0;i<tableList.length;i++){
      //重新抓jqGrid容器的新width
      let newWidth = jQuery("#"+tableList[i]).closest(".ui-jqgrid").parent().width();
      //是否縮齊column(相當於shrinkToFit)
      let shrinkToFit = true;
      jQuery("#"+tableList[i]).jqGrid("setGridWidth", newWidth, shrinkToFit); 
    }
  
  }

 

  $(window).on("resize", ()=>{feedback.reSizejqGridWidth(feedback.tableList)});

  feedback.newData(1);

  feedback.reSizejqGridWidth(feedback.tableList);
});
