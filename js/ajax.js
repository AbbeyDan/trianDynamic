function ajax(method,url,data,dataType,succcess,error){
    $.ajax({
        type: method,
        url: "http://39.104.90.182:80/px/service/px/"+url,
        data:data,
        dataType: dataType,
        success:succcess,
        error:error
    });
}