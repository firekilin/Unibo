
jQuery("#imgList").jqGrid({
  url:'../api/getImgBox',
  datatype: "json",
  mtype: 'post',
  colNames:['編碼','圖片','名稱'],
  colModel:[
    {name:'id',hidden:true,index:'id',},
    {name:'boxImg',index:'boxImg',editable:true,edittype:'file',  editoptions: {enctype: "multipart/form-data"},width:200,formatter: (data)=> {
      return "<img src='"+data+"' alt='my image' style='width:200px' />";
  }},
    {name:'Name',index:'Name',editable:true},
  ],
  rowNum:10,
  pager: '#imgPage',
  sortname: 'id',
 viewrecords: true,
 sortorder: "desc",
 editurl:"../api/addImgBox",
 onCellSelect: (a, o, r) => { 
  let n = jQuery("#imgList").jqGrid("getGridParam", "colModel");
  "boxUrl" === n[o].name ? window.Clipboard.copy(r):null; 

  
  
},
});

processFile=(response,postdata)=>{
  const formData = new FormData();
  let json = eval('('+ response.responseText +')');
  let id = json.imgBoxId;
  formData.append('image', $("#boxImg")[0].files[0]);
  formData.append('id',id);
  //console.log(id);
  fetch('../api/uploadImgBox', {
    method: 'POST',
    body: formData,
    data:{id:id},
  }).then(output=>{
    return output.json();
  }).then(result => {
    fileMessage=result.data;
  });

}


jQuery("#imgList").jqGrid('navGrid','#imgPage',
  {edit:true,add:true,del:true,search:false},
  {width:650,reloadAfterSubmit:true,closeAfterEdit:true,closeAfterAdd:true,afterSubmit:processFile},
  {width:650,reloadAfterSubmit:true,closeAfterEdit:true,closeAfterAdd:true,afterSubmit:processFile},
);



reSizejqGridWidth=()=>{ 
  //重新抓jqGrid容器的新width
  let newWidth = jQuery("#imgList").closest(".ui-jqgrid").parent().width();
  //是否縮齊column(相當於shrinkToFit)
  let shrinkToFit = true;
  jQuery("#imgList").jqGrid("setGridWidth", newWidth, shrinkToFit); 
}

reSizejqGridWidth();

$(window).on("resize", reSizejqGridWidth);

