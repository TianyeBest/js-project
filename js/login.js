$(".userputong").click(function(){
	$(this).hide()
	$(".usercard").show()
	$(".login-head p").eq(0).html(`<span class="iconfont">&#xe607;</span>会员卡用户登陆`)
	$(".s1").html("会员卡号")
	$(".s2").html("会员密码")
})
$(".usercard").click(function(){
	$(this).hide()
	$(".userputong").show()
	$(".login-head p").eq(0).html(`<span class="iconfont">&#xe607;</span>会员登陆`)
	$(".s1").html("用户名")
	$(".s2").html("密码")
})
$(".login-head p").eq(1).click(function(){
	$(this).css( {"border-bottom":"1px solid #e73736","color": "#e73736"} )
		   .prev("p")
		   .css( {"border-bottom":"1px solid #eee","color": "#8a8a8a"} )
    $(".login-content2").show();
    $("login-content").hide()
})
$(".login-head p").eq(0).click(function(){
	$(this).css( {"border-bottom":"1px solid #e73736","color": "#e73736"} )
		   .next("p")
		   .css( {"border-bottom":"1px solid #eee","color": "#8a8a8a"} )
    $(".login-content2").hide();
	$("login-content").show()
})
$("#t1").focus(function(){
	$(".s1").hide()
	$(this).keyup(function(){
		if( $(this).val() == "" ){
			$(".s11").show()
			$(".t1-error").html("用户名不能为空")
			$("#t1").css("border","1px solid #fe655c")
		}else{
			$(".t1-error").html("")
			$("#t1").css("border","1px solid #cccccc")
			$(".s11").hide()
		}
	})
}).blur(function(){
	if( $(this).val() == "" ){
			$(".s11").show()
			$(".t1-error").html("用户名不能为空")
			$("#t1").css("border","1px solid #fe655c")
		}else{
			$(".t1-error").html("")
			$("#t1").css("border","1px solid #cccccc")
			$(".s11").hide()
		}
})
$(".s1").click(function(){
	$(this).hide()
})
$("#t2").focus(function(){
	$(".s2").hide()
	$(this).keyup(function(){
		if( $(this).val() == "" ){
			$(".s12").show()
			$(".t2-error").html("用户名不能为空")
			$("#t2").css("border","1px solid #fe655c")
		}else{
			$(".t2-error").html("")
			$("#t2").css("border","1px solid #cccccc")
			$(".s12").hide()
		}
	})
}).blur(function(){
	if( $(this).val() == "" ){
			$(".s12").show()
			$(".t2-error").html("用户名不能为空")
			$("#t2").css("border","1px solid #fe655c")
		}else{
			$(".t2-error").html("")
			$("#t2").css("border","1px solid #cccccc")
			$(".s12").hide()
		}
})
$(".s2").click(function(){
	$(this).hide()
})
//取cookie
function getCookie(key){
		var str = document.cookie;
		if(str){
			var arr = str.split("; ");
			for( i = 0 ; i < arr.length ; i++){
				var item = arr[i].split("=")
				if( item[0] == key ){
					return item[1]
				}	
			}
			return ""
		}
		return ""
	}
$("#btn").click(function(){
	var str1 = getCookie("user")
	str2 = str1.split(", ")
	var pro = JSON.parse(str2)
	console.log(pro["username"])
	if( $("#t1").val() == pro["username"] && $("#t2").val() == pro["password"]){
		location.href="index.html"
	}else{
		alert("帐号密码不正确")
	}
})
		
