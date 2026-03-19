var test = false;
var avatarBase64 = "";
$(document).ready(function(){
     $("#avatarInput").on("change", function(e) {
        var file = e.target.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert("请上传图片格式的文件！");
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            avatarBase64 = e.target.result;
            $("#avatarPreview").attr("src", avatarBase64).show();
        };
        reader.readAsDataURL(file);
    });
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
        $.cookie("avatar", avatarBase64);
        window.location.href = "create.html";

    })
    $("#clearA").on("click",function(){
        $.removeCookie("avatar", { path: '/' });
    })
})