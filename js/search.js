function searchBtnD() {
    $(".searchBtn").css({
        display : "none"
    });
    // $(this).stop(true, true).fadeOut();
    $(".search-windows").stop(true,true).animate({
        "width": "220px"
    },1000);
}
function searchBtnB() {
    $(".searchBtn").css({
        display : "block"
    });
    // $(this).stop(true, true).fadeOut();
    $(".search-windows").stop(true,true).animate({
        "width": "45px"
    },1000);
}
function pd() {
    var val = document.forms["myform"]["stext"].value;
    if(val==""){
        alert("搜索内容不可以为空！");
        return false;
    }
}