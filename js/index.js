//微信商城
$(".wxshop").on("mouseenter",function(){
		$(".erweima").show();
	}).on("mouseleave",function(){
		$(".erweima").hide();
	})
	$(".erweima").on("mouseenter",function(){
		$(".erweima").show();
		$(".wxshop").css("background","#fff")
	}).on("mouseleave",function(){
		$(".erweima").hide();
		$(".wxshop").css("background","")	
})
//导航图    三级菜单      详细页面
$(".navlist2>ul").on("mouseenter","li",function(){
	var index = $(this).index();
	$(".navlist2-1").eq(index).show().on("mouseenter",function(){
		$(".navlist2-1").eq(index).show();
	}).on("mouseleave",function(){
		$(".navlist2-1").eq(index).hide();
	})
}).on("mouseleave","li",function(){
	var index = $(this).index();
	$(".navlist2-1").eq(index).hide();
})
//导航固定
$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	
	if( sTop >= 145 ){
		$(".navlist>ul").css({"position":"fixed","top":0})
	}else{
		$(".navlist>ul").css({"position":""})
		
	}
})
//banner图
var timeBanner = setInterval(autoBanner,2500)
var indexBanner = 0
function autoBanner(){
	indexBanner++
	if( indexBanner == 5){
		indexBanner = 0
	}
	//banner
	$(".banner-1>ul>li").eq(indexBanner).fadeIn(1000).siblings().fadeOut(1000);
	//圆圈
	$(".banner-list ul li").eq( indexBanner ).css(
		"background","#ff0000"
	).siblings().css(
		"background","#fff"
	)
}
$(".banner-list ul").on("mouseenter","li",function(){
	//鼠标移入下面列表操作
	clearInterval(timeBanner);
	$(this).css("background","#ff0000")
		   .siblings()
		   .css(
				"background","#fff"
				);
	indexBanner = $(this).index() - 1;
	autoBanner();
}).on("mouseleave","li",function(){
	timeBanner = setInterval(autoBanner,2500)
})
//限时销售倒计时
var end = new Date("2019-6-28 12:22:22");
var start = new Date();
var diff = (end.getTime()-start.getTime())/1000;
function showTime(){
	var d = parseInt(diff/3600/24)
	var h = parseInt( (diff-d*24*3600)/3600 )
	var m = parseInt( (diff-d*24*3600-h*3600)/60 )
	var s = parseInt(diff-d*24*3600-h*3600-m*60)  
	$(".time").html(`<span>距结束：${d}天${h}时${m}分${s}秒</span>`)
}
showTime();
var timeList = setInterval(function(){
	diff--;
	if( diff <= 0 ){
		clearInterval(timeList)
		$(".time").html("限时结束")
	}else{
		showTime()
	}
},1000)
