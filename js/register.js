/*用户名验证*/
var flagA = null;

$("#t1").keyup(function(){
	var $t1 = $("#t1").val();
	var regAdmin = /^\w{3,14}$/;
	$("#t1").css("color","#333")
	if( $t1 == "" ){
		$(".t1-error").html("用户名长度不能少于 3 个字符。")
		$("#t1").css("border","1px solid #fe655c")
		$(".s1").css("background", "url(img/error.png) no-repeat center center")
		$(".s1").show()
		flagA = false
	}else if( $t1.length < 3 ){
		$(".t1-error").html("用户名长度不能少于 3 个字符。")
		$("#t1").css("border","1px solid #fe655c")
		$(".s1").css("background", "url(img/error.png) no-repeat center center")
		$(".s1").show()
		flagA = false
	}else if( $t1.length > 14 ){
		$(".t1-error").html("用户名长度不能多于 14 个字符。")
		$("#t1").css("border","1px solid #fe655c")
		$(".s1").css("background", "url(img/error.png) no-repeat center center")
		$(".s1").show()
		flagA = false
	}else{
		$(".t1-error").html("")
		$("#t1").css("border","1px solid #cccccc")
		$(".s1").css("background", "url(img/true.png) no-repeat center center")
		$(".s1").show()
	}
	if( regAdmin.test($t1) ){
		flagA = true
	}else{
		flagA = false
	}
})
/*邮箱验证*/
var flagY = null;
$("#t2").keyup(function(){
	var $t2 = $("#t2").val();
	var regEmail = /^\w{1,}@\w{1,}(\.\w+)$/;
	$("#t2").css("color","#333")
	
	if( $("#t2").val() == ""){
		$("#t2").css("border","1px solid #fe655c")
		$(".s2").css("background", "url(img/error.png) no-repeat center center")
		$(".t2-error").html("邮箱不能为空")
		flagY = false
	}else if( regEmail.test($t2) ){
		$(".t2-error").html("")
		$("#t2").css("border","1px solid #cccccc")
		$(".s2").css("background", "url(img/true.png) no-repeat center center")
		flagY = true
	}else{
		$(".t2-error").html("邮箱不合法")
		$("#t2").css("border","1px solid #fe655c")
		$(".s2").css("background", "url(img/error.png) no-repeat center center")
		$(".s2").show()
		flagY = false
	}
})
/*密码*/
var flagP = null;
$("#t3").keyup(function(){
	var $t3 = $("#t3").val();
	var regPwd = /^\w{6,}$/;
	$("#t3").css("color","#333")
	
	if( regPwd.test($t3) ){
		$(".t3-error").html("")
		$("#t3").css("border","1px solid #cccccc")
		$(".s3").css("background", "url(img/true.png) no-repeat center center")
		flagP = true
	}else{
		$(".t3-error").html("登录密码不能少于 6 个字符。")
		$("#t3").css("border","1px solid #fe655c")
		$(".s3").css("background", "url(img/error.png) no-repeat center center")
		$(".s3").show()
		flagP = false
	}
})
/*确认密码*/
var flagP2 = null;
$("#t4").keyup(function(){
	var $t4 = $("#t4").val();
	$("#t4").css("color","#333")
	if(  $("#t4").val() == $("#t3").val() ){
		$(".t4-error").html("")
		$("#t4").css("border","1px solid #cccccc")
		$(".s4").css("background", "url(img/true.png) no-repeat center center")
		flagP2 = true;
	}else{
		$(".t4-error").html("两次密码不一致。")
		$("#t4").css("border","1px solid #fe655c")
		$(".s4").css("background", "url(img/error.png) no-repeat center center")
		$(".s4").show()
		flagP2 = false
	}
})
/*button*/
$("#btn").click(function(){
	if( flagA && flagY && flagP && flagP2 && $("#cx").prop("checked") ){
		location.href = "login.html"
		var json = {
				"username" : $("#t1").val(),
				"password" : $("#t3").val()
			}
		$(document).cookie(`user=${JSON.stringify(json)}`)
	}
})

