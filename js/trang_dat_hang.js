
  /* phần js của trang đặt hàng */
  function init(){
      /*  Javascrip xử lý hiệu ứng khi cick vào ảnh sản phẩm */
      var images2 = document.querySelectorAll(".picture img")
      for(var i = 0; i < images2.length; i++)
      images2[i].onclick = function() {
        var path = this.src
        var img = document.getElementById("mainimage")
        img.src = path
      }


      /*/////////// js của trang liên hệ/////////////// */
      function Validator(options){
        // Định nghĩa hàm validate
        function validate(inputElement, rule){
          var errorMessage = rule.test(inputElement.value);
          var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            
          if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
            inputElement.classList.add('input-error')
        }else{
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid')
            inputElement.classList.remove('input-error')
          }
        }
  
        // lấy emlement của form cần validate
        var formElement = document.querySelector(options.form);
        if(formElement){
          /* Lặp qua từng rule và thực hiện Validate */
          formElement.onsubmit = function(e){
            e.preventDefault();
            options.rules.forEach(function(rule){
              var inputElement = formElement.querySelector(rule.selector);
                validate(inputElement,rule);
            });
         }

           options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement){
              
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                 validate(inputElement,rule);
                }
                // xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                  var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                  errorElement.innerText='';
                  inputElement.parentElement.classList.remove('invalid')
                  inputElement.classList.remove('input-error')
                }
              }
           })
        }
    }
    // Nguyên tắc của các rules
    // 1.khi có lỗi ==> trả ra messae lỗi
    // 2.Khi hợp lệ ==> trả về undefined
    Validator.isRequired = function (selector){
        return {
            selector:selector,
            test:function(value){
                return value.trim() ? undefined: "Vui lòng nhập trường hợp này?"
            }
        };
    }
    // Kiểm tra xem người dùng có phải nhập email hay khônng
    Validator.isEmail = function (selector){
        return {
            selector:selector,
            test:function(value){
                var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined: "Trường này phải là Email"
            }
        };
    }
    // output nhận được
    Validator({
        form: '#form-1',
        errorSelector:'.form-message',
        rules:[
            Validator.isRequired('#fullname'),
            Validator.isEmail('#email'),
            Validator.isRequired('#chu-de'),
            Validator.isRequired('#noi-dung'),
        ]
    });
  }


  ///////////PHẦN JQUERY CỦA TRANG ĐẶT HÀNG /////////////////*/
  /* Jquery định dạng cho thanh số lượng sản phẩm */
  $(document).ready(function(){
    var $this = $("input.input-qty");
    qty = $this.parent().find(".is-form");
    min = Number($this.attr('min'));
    max = Number($this.attr('max'));
    var d = min;
    $this.attr('value',d).val(d);
    $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
         if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
          var x = Number($this.val()) + 1
          if (x <= max) d += 1
    }
    $this.attr('value',d).val(d);
    })
})      
       /* Jquery định dạng cho phần đánh giá và mô tả sản phẩm */
       
        $(document).ready(function(){
           $(".alls-bottom > div:not(:first-child)").hide()
          
           $("ul.tap a").click(function(){
            event.preventDefault()
            //xử lý biên
            $("ul.tap a").removeClass("add-boder")
                $(this).addClass("add-boder")
             // xử lý tap
            $("ul.tap a").removeClass("addcolor")
                $(this).addClass("addcolor")
    
                 // xử lý content
            var tap = $(this).attr("href")
            $(".alls-bottom > div").hide()
            $(tap).show()
            })
    
        }) 
     
       /* jquery định dạng khi cick vào ngôi sao bình chọn */
       $(document).on('click',".starsl,label.fas",function(){
           $(".starsl,label.fas").css({
               "color":"#dddddd"
           })
           $("label.fas",this).css({
               "color":"yellow"
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
      /* jquety cho nút gototop */
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

      
    