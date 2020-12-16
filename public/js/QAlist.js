
'use strict';
var qa=this.qa?(()=>{throw new Error()})():{};
$(() => { //初始設定
  qa.facelist="";
  $.get("/api/getface", (data) => {
    for(let i=0;i<data.length;i++){
      if(i==0){
        qa.facelist=data[i].id+":"+data[i].Name;
      }else{
        qa.facelist+=";"+data[i].id+":"+data[i].Name;
      }
      
    }
    qa.newData(1);
  });
  qa.newData=(page)=>{
    let pagecheck=true;
    $("#qaList").GridUnload();
    jQuery("#qaList").jqGrid({
      url:'../api/getQa',
      datatype: "json",
      
      mtype: 'post',
      colNames:['id','問題', '答覆','情緒'],
      colModel:[
        {name:'qaId',index:'qaId',edittype:'text',key: true},
        {name:'qaMessage',index:'qaName',editable:true,editoptions: { value: "是:否" }},
        {name:'qaAnser',index:'qaContent',editable:true,edittype:'textarea',editoptions: {rows:"5",cols:"10",style:'width:100%;height:100%;',value:""},width:500,formatter: (data)=> {
          return data;
          
      }},
      {name:'qaUnibo',index:'qaUnibo',editable:true,edittype:'select',editoptions:{ value: qa.facelist }
      }
      ],
      rowNum:25,
      pager: '#qaPage',
      page: page!=null?page:1,
      sortname: 'qaId',
     viewrecords: true,
     editurl:"../api/addQa",
     pgtext: '{0}: <div class="jqgridInput" style="display:inline" id="totalpage"></div> ',
     recordtext: '<div class="jqgridInput" style="display:inline" id="totalitem"></div>筆',
     multiselect: false,
     subGrid : true,
       subGridRowExpanded: function(subgrid_id, row_id) {
            
            var subgrid_table_id, pager_id;
            subgrid_table_id = subgrid_id+"_t";
            pager_id = "p_"+subgrid_table_id;
            $("#"+subgrid_id).html("<table id='"+subgrid_table_id+"' class='scroll'></table><div id='"+pager_id+"' class='scroll'></div>");
           jQuery("#"+subgrid_table_id).jqGrid({
              url:"../api/getQAList",
              datatype: "json",
              mtype: 'post',
              postData: { id:row_id},
              colNames: ['id','編號','關鍵詞'],
              colModel: [
                {name:"qaBigId",index:"QABigId",hidden:true,editable:false,key:true,width:130},
                {name:"qaId",index:"QAId",editable:false,width:130},
                {name:"qaKeyword",index:"QAName",editable:true,width:130},
              ],
              height: '100%',
              rowNum:100,
              sortname: 'qaBigId',
              sortorder: "asc",
              pager: pager_id,
              editurl:"../api/addQAList/"+row_id,
           });
           jQuery("#"+subgrid_table_id).jqGrid('navGrid',"#"+pager_id,
           {edit:true,add:true,del:true,search:false},
           {width:650,reloadAfterSubmit:true,closeAfterEdit:true,closeAfterAdd:true},
           {width:650,reloadAfterSubmit:true,closeAfterEdit:true,closeAfterAdd:true},)
    
           if(!qa.tableList.includes(subgrid_table_id)){
            qa.tableList.push(subgrid_table_id);
          }
          
       },
       loadComplete: (e) => {  
        qa.reSizejqGridWidth(qa.tableList);
        $("#totalitem").text(e.totalpage); //設定切換頁面
        let pages=Math.floor(e.totalpage / 25)+1;
        $("#totalpage").text(pages);
      
          if (page==pages){
            $("#last_qaPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
            $("#next_qaPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
          }else{
            $("#last_qaPage").attr('class', 'ui-pg-button ui-corner-all');
            $("#next_qaPage").attr('class', 'ui-pg-button ui-corner-all');
          }
          if (page!=1){
            $("#first_qaPage").attr('class', 'ui-pg-button ui-corner-all');
            $("#prev_qaPage").attr('class', 'ui-pg-button ui-corner-all');
          }else{
            $("#first_qaPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
            $("#prev_qaPage").attr('class', 'ui-corner-all ui-pg-button ui-state-disabled ui-jqgrid-disablePointerEvents');
          }
          if(pagecheck){
            $('#first_qaPage').click(()=>{
              qa.newData(1);
            });
            $('#prev_qaPage').click(()=>{
              qa.newData(--page);
            });
            $('#next_qaPage').click(()=>{
              qa.newData(++page);
            });
            $('#last_qaPage').click(()=>{
              qa.newData(pages);
            });
            pagecheck=false;
          }
         
        
     
      },onPaging:() => {
        return "stop";
      }
      
    });

   
    jQuery("#qaList").jqGrid('navGrid','#qaPage',
    {edit:true,add:true,del:true,search:false,refresh:true,afterRefresh:()=>{
      qa.newData(page);
    }},
    {width:650,reloadAfterSubmit:true,closeAfterEdit:true,closeAfterAdd:true},
    {width:650,reloadAfterSubmit:true,closeAfterEdit:true,closeAfterAdd:true},
    
    );
  
  }




  qa.tableList=['qaList'];

  qa.reSizejqGridWidth=(tableList)=>{ 
    for(let i=0;i<tableList.length;i++){
      //重新抓jqGrid容器的新width
      let newWidth = jQuery("#"+tableList[i]).closest(".ui-jqgrid").parent().width();
      //是否縮齊column(相當於shrinkToFit)
      let shrinkToFit = true;
      jQuery("#"+tableList[i]).jqGrid("setGridWidth", newWidth, shrinkToFit); 
    }
  
  }

 

  $(window).on("resize", ()=>{qa.reSizejqGridWidth(qa.tableList)});

  

  qa.reSizejqGridWidth(qa.tableList);
});
