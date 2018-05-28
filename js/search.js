var searchNode = document.querySelector(".search input");
var btn = document.querySelector(".search_btn")
function search(node){
    var inputValue = node.value;
    var xml = new XMLHttpRequest();
    xml.open("get","text.json");
    xml.onreadystatechange=function(){
        if(xml.readyState==4&&xml.status==200){
            // 后台根据关键词返回数据
            console.log(xml.responseText);
            location.href="searchList.html?value="+inputValue
        }
    }
    xml.send();
}
// 用户点击搜索按钮触发
btn.onclick=function(){
    search(searchNode)
}
// 用户回车触发搜索事件
document.onkeydown=function(e){
    if(e.keyCode==13){
        search(searchNode);
    }
}


