$(document).ready(function(){
    var name = $.cookie("name")
    if (name == undefined){
       name = "姓名"
    }
    var academy = $.cookie("academy")
    if (academy == undefined){
       academy = "学院"
    }
    var studentId = $.cookie("studentId")
    if (studentId == undefined){
       studentId = "学号"
    }
    var start_term = $.cookie("start_term")
    if (start_term == undefined){
       start_term = "开始学期"
    }
    var a = start_term
    start_term =  a.slice(0,4)+"年"+a.slice(5,7)+"月"+a.slice(8,10)+"日"+a.slice(11,13)+"时"
    var end_term = $.cookie("end_term")
    if (end_term == undefined){
       end_term = "结束学期"
    }
    a = end_term;
    end_term =  a.slice(0,4)+"年"+a.slice(5,7)+"月"+a.slice(8,10)+"日"+a.slice(11,13)+"时"
    var issuance = $.cookie("issuance")
    if (issuance == undefined){
       issuance = "签发时间"
    }
    a = issuance;
    issuance =  a.slice(0,4)+"年"+a.slice(5,7)+"月"+a.slice(8,10)+"日";
    $(".name .value").text(name)
    $(".academy .value").text(academy)
    $(".suidentId .value").text(studentId)
    $(".term .value").text(start_term + "-" + end_term)
    $(".issuance .value").text(issuance) 
})