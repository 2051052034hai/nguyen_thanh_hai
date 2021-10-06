$(document).ready(function(){
    $("div.dang-nhap").hide()
    //  xử lý khi click
    $("#member").click(function(){
        $("div.dang-nhap").fadeIn(500)
        $("body").append('<div id = "over">').css("overflow","hidden")
    })
    // xử lý khi click đóng hộp thoại
    $(document).on('click',"#close,#over",function(){
        $("#over").remove();
        $("div.dang-nhap").fadeOut(300)
        $("body").css("overflow","visible")
    })
})