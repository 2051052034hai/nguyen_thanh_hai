function init(){
    function Validator(options){
        // lấy emlement của form cần validate
        var formElement = document.querySelector(options.form);
        if(formElement){
           options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement){

                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
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
        ],
        onsubmit: function(data){
            // call CPI
            console.log(data);
        }
    });
} 