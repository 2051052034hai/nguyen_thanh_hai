
/*/////////////////  Jquery HIỆU ỨNG CHO TRANG CHỦ ////////////////////////////*/ 
/* Jquery định dạng cho Thanh menu trượt */
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() >= 300){
                $("nav").addClass("add");
            }else
            $("nav").removeClass("add");
        })
    })
/* Jquery định dạng cho phần hiện thị thanh đăng nhập */
$(document).ready(function(){
    /*thanh đăng nhập ẩn trước khi click */
    $("#dangnhap,a.exit").hide()
    /*khi click thì dùng id over làm mờ trang và hiện hộp thoại ra */
    $(".dang-nhap").click(function(){
        $("body").append('<div id="over">');
       $("#dangnhap,a.exit").fadeIn(500)
        $("body").addClass("diem-dung")
    })
    /* khi click đóng hộp thoại */
    $(document).on('click',"a.exit,#over",function(){
        $("#over,#dangnhap,a.exit").fadeOut(300,function(){
            $("#over").remove();
            $("body").removeClass("diem-dung")
        })
      
    })

  })
  /* /////////////java script của phần đầu trang ///////////////// */ 
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 350){
             $(".the-banh-1").addClass("effect-intro-1") 
             $(".the-banh-2").addClass("effect-intro-2") 
             $(".the-banh-3").addClass("effect-intro-3") 
             $(".the-banh-4").addClass("effect-intro-4") 
        }
      
    })
});
/* /////////////java script của phần cuối trang ///////////////// */ 
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 5900){
             $(".effect-1").addClass("effect-content") 
             $(".effect-2").addClass("effect-content-1") 
             $(".effect-3").addClass("effect-content-2") 
             $(".effect-4").addClass("effect-content-3") 
        }
    })
  
});
    /* /////////////java script của phần go to top  ///////////////// */ 
$(document).ready(function() {
    $("#gototop").hide()
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 500)
        $("#gototop").slideDown("3000")
      else
        $("#gototop").slideUp("3000")
    })
    $("#gototop").click(function() {
        $("html, body").animate({
          scrollTop: 0
        },1000);
    })
  })
  /* ///////////////Đếm số ///////////// */ 
  $(document).ready(function(){
    $('.counter')
  })

  /* jquery cho thanh kem các loại */
  $(document).ready(function(){
    /* ban đầu thanh chọn ở trạng thái ẩn */
    $(".list").hide()
    /* khi rê chuột vào ô kem các loại */
    $(".last").mouseenter(function(){
      $(".list").removeClass("sliceinbottom")
      $(".list").show().addClass("sliceintop");
    })
    /* khi rời chuột khỏi ô kem các loại */
    $(".last").mouseleave(function(){
      $(".list").fadeOut(300).addClass(" sliceinbottom ");
    })
})
  
  /*/////////////////  Jquery HIỆU ỨNG CHO TRANG CHỦ ////////////////////////////*/ 
/* Jquery định dạng cho Thanh menu trượt */
$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() >= 300){
          $("nav").addClass("add");
      }else
      $("nav").removeClass("add");
  })
})
/* Jquery định dạng cho phần hiện thị thanh đăng nhập */
$(document).ready(function(){
/*thanh đăng nhập ẩn trước khi click */
$("#dangnhap,a.exit").hide()
/*khi click thì dùng id over làm mờ trang và hiện hộp thoại ra */
$(".dang-nhap").click(function(){
  $("body").append('<div id="over">');
 $("#dangnhap,a.exit").fadeIn(500)
  $("body").addClass("diem-dung")
})
/* khi click đóng hộp thoại */
$(document).on('click',"a.exit,#over",function(){
  $("#over,#dangnhap,a.exit").fadeOut(300,function(){
      $("#over").remove();
      $("body").removeClass("diem-dung")
  })

})

})

/* /////////////java script của phần go to top  ///////////////// */ 
$(document).ready(function() {
$("#gototop").hide()
$(window).scroll(function() {
if ($(this).scrollTop() >= 500)
  $("#gototop").slideDown("3000")
else
  $("#gototop").slideUp("3000")
})
$("#gototop").click(function() {
  $("html, body").animate({
    scrollTop: 0
  },1000);
})
})
/* ///////////////Đếm số ///////////// */ 
$(document).ready(function(){
$('.counter')
})

/* jquery cho thanh kem các loại */
$(document).ready(function(){
/* ban đầu thanh chọn ở trạng thái ẩn */
$(".list").hide()
/* khi rê chuột vào ô kem các loại */
$(".last").mouseenter(function(){
$(".list").removeClass("sliceinbottom")
$(".list").show().addClass("sliceintop");
})
/* khi rời chuột khỏi ô kem các loại */
$(".last").mouseleave(function(){
$(".list").fadeOut(300).addClass(" sliceinbottom ");
})
})
/////////////////////////////wowjs////////////////////////////////
$(document).ready(function(){
  $("div.phan-text-trai").addClass("wow animate__fadeInLeft")
  $("div.the-banh-1").addClass("wow animate__fadeInLeft")
  $("div.the-banh-2").addClass("wow animate__fadeInLeft")
  $("div.the-banh-3").addClass("wow animate__fadeInRight")
  $("div.the-banh-4").addClass("wow animate__fadeInRight")
   $("div.effect-left-right-1").addClass("wow animate__fadeInUp")
   $("div.effect-left-right-2").addClass("wow animate__fadeInUp")
   $("div.effect-left-right-3").addClass("wow animate__fadeInUp")
   $("div.effect-left-right-4").addClass("wow animate__fadeInUp")
     $("div.hinh-anh-header").addClass("wow animate__fadeIn")
     $("div.card").addClass("wow animate__fadeInDown")
       $("div.effect-1").addClass("wow animate__fadeInLeftBig")
       $("div.effect-2").addClass("wow animate__fadeInLeftBig")
       $("div.effect-3").addClass("wow animate__fadeInLeftBig")
       $("div.effect-4").addClass("wow animate__fadeInLeftBig")
  wow = new WOW({
            boxClass:     'wow',      // default
animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          })
          wow.init();
})