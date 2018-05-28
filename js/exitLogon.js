function exitLogon() {
    var json = {
        msg: "确定退出登录吗",
        buttons: [
            { title: "取消", color: "red" },
            {
                title: "确定", click: function () {
                    localStorage.removeItem("username");
                    location.reload();
                }
            }
        ]
    }
    $.alertView(json);
}