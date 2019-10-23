require(['config'], function () {
    require(['jquery','jquery.cookie'], function () {
        login();
    })
})


function login() {
    const $login = $('.login_btn');
    const $user = $('input:text');
    const $password =$('input:password');

    $login.on('click',function(){

        $.ajax({
            type:'post',
            url:'http://10.31.155.77/work/my_program/yhd/php/login.php',
            data:{
                user:$user.val(),
                pswd:$password.val()
            }
            
        }).done(function(val){
             if(val){
                 console.log(val)
                alert('登陆成功');
                $.cookie('name',val,{ expires: 7 });
                window.location.href= 'http://10.31.155.77/work/my_program/yhd/src/index1.html'
             }else{
                 alert('登录失败');
             }
           
        })
    })
   
}



