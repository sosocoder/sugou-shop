//密码显示与隐藏
addEventListener("load", function() {
    var eye = document.getElementById("eye");
    var pwd = document.getElementById("password");
    var flag = 0;
    eye.onclick = function() {
        if (flag == 0) {
            pwd.type = "text";
            eye.src = "img/open.png";
            flag = 1;
        } else {
            pwd.type = "password";
            eye.src = "img/close.png";
            flag = 0;
        }
    }
})


//登录验证
    $(function(){
	function check_login()
	{
	 var name=$("#text").val();
	 var pass=$("#password").val();
	 if(name=="sugou" && pass=="123456")
	 {
		location.href="index.html";
	 }
	 else
	 {
	  $(".login_content").removeClass('shake_effect');  
	  setTimeout(function()
	  {
	   $(".login_content").addClass('shake_effect')
	  },1);  
	 }
	}
	$(function(){
		$("#btn").click(function(){
			check_login();
			return false;
		})
	})
    })