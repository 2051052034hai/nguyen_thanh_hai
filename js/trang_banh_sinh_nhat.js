/* juqery cho phần đặt hàng sản phẩm */
$(document).ready(function(){
    $(".fa-heart,.fa-code").fadeOut();
    $("div.cake-item,div.item-bottom").mousemove(function(){
        $(this).addClass("move-top")
        $(".fa-shopping-cart",this).addClass("border-none")
        $(".fa-heart,.fa-code",this).css("opacity","1")
        $(".fa-heart",this).fadeIn(500).addClass("move-left");
        $(".fa-code",this).fadeIn(500).addClass("move-right");
    })
    $("div.cake-item,div.item-bottom").mouseleave(function(){
        $(this).removeClass("move-top")
        $(".fa-heart",this).fadeIn(500).removeClass("move-left");
        $(".fa-code",this).fadeIn(500).removeClass("move-right");
        $(".fa-heart,.fa-code",this).css("opacity","0")
        setTimeout(function(){
            $(".fa-shopping-cart").removeClass("border-none")
        },300)
    })
    var dem = 0;
    $(".fa-heart").click(function(){
        dem++;
        if(dem % 2 == 0){
            $(this).css("color","black")
        }
        if(dem % 2 != 0){
            $(this).css("color","red")
        }
    })
})
/* jquery thêm class hiệu ứng hover cho tất cả các ảnh có class .article-item */
$(document).ready(function(){
    $(".article-item").addClass("c4-izmir c4-border-right c4-image-pan-left c4-gradient-top")
    $("div.three-cake-item").addClass("wow animate__fadeInRight animate__slow")
    $("div.item-bottom").addClass("wow animate__fadeInUp animate__slow")
    wow = new WOW({
              boxClass:     'wow',      // default
              animateClass: 'animate__animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true        // default
            })
            wow.init();
})
 
/*jquery xử lý khi người dùng click vào icon-menu */
$(document).ready(function(){
    $("div.cake-item-bottom").fadeOut();
    $("div.icon-item-menu > i:first-child").addClass("add-color")
    $("div.icon-item-menu > i:last-child").click(function(){
        $("div.icon-item-menu > i:first-child").removeClass("add-color")
        $(this).addClass("add-color")
        $("div.three-cake-item").fadeOut();
        $("div.cake-item-bottom").fadeIn(1000);
    })
    $("div.icon-item-menu > i:first-child").click(function(){
        $("div.icon-item-menu > i:last-child").removeClass("add-color")
        $(this).addClass("add-color")
        $("div.three-cake-item").fadeIn();
        $("div.cake-item-bottom").fadeOut();
    })
})