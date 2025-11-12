var test = false;
$(document).ready(function(){
    $("#submit").on("click",function(){
        // alert("wocaonima ")
        var name = $(".name input").val();
        if (name == "" && test){
            alert("请输入姓名");
            return;
        }
        var academy = $(".academy input").val();
        if (academy == "" && test){
            alert("请输入学院");
            return;
        }
        var studentId = $(".studentId input").val();
        if (studentId == "" && test){
            alert("请输入学号");
            return;
        }
        var start_term = $(".start_term input").val();
        if (start_term == "" && test){
            alert("请输入开始学期");
            return;
        }
        var end_term = $(".end_term input").val();
        if (end_term == "" && test){
            alert("请输入结束学期");
            return;
        }
        var issuance = $(".issuance input").val();
        if (issuance == "" && test){
            alert("请输入发放时间");
            return;
        }

        // 向cookie写入数据
        $.cookie("name", name);
        $.cookie("academy",academy);
        $.cookie("studentId",studentId);
        $.cookie("start_term",start_term);
        $.cookie("end_term",end_term);
        $.cookie("issuance",issuance);
        // 跳转到其他页面
        window.location.href = "create.html";




       



    })
})