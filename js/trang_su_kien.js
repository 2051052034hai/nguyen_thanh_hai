$(document).ready(function(){
    $("div.card-tin-tuc").addClass("wow animate__fadeIn animate__slower	3s")
    wow = new WOW({
              boxClass:     'wow',      // default
              animateClass: 'animate__animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true        // default
            })
            wow.init();
    /* định dạng cho phần xem thêm */
    
    $("div.tin_tuc_js").hide()
    $("div.xem-them-tin-tuc").click(function(){
        $(this).hide();
        $("div.tin_tuc_js").show();
    })
})
