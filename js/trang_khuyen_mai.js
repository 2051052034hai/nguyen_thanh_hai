/*/////////////////// JQUERY CHO TRANG kHUYẾN MÃI/////////////////*/
$(document).ready(function() {
    $("#main-items,.main-items1,.main-items2,.main-items3,.main-items4,.main-items5").css({
        "opacity":0
    })
    $("#main-items").show(300).addClass("khuyen-mai-trươt-tu-duoi-len");
$(window).scroll(function() {
if ($(this).scrollTop() >= 10 )
$(".main-items1").show(300).addClass("khuyen-mai-hien-ra");
if ($(this).scrollTop() >= 650)
$(".main-items2").show(300).addClass("khuyen-mai-hien-ra");
if ($(this).scrollTop() >= 950)
$(".main-items3").show(300).addClass("khuyen-mai-hien-ra");
if ($(this).scrollTop() >= 1250)
$(".main-items4").show(300).addClass("khuyen-mai-hien-ra");
if ($(this).scrollTop() >= 1500)
$(".main-items5").show(300).addClass("khuyen-mai-hien-ra");
})
})