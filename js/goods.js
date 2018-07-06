/*headTop*/
$(".head-Top-ul-2 li:first").mouseenter(function(){
	$(".head-more").show().stop().animate({"top":30,"opacity":1},300)
}).mouseleave(function(){
	$(".head-more").stop().animate({"top":37,"opacity":0},300,function(){
		$(".head-more").hide()
	})
})
$(".head-more").mouseenter(function(){
	$(this).show()
	$(".head-more").stop()//停止动画
}).mouseleave(function(){
	$(".head-more").stop().animate({"top":37,"opacity":0},300,function(){
		$(".head-more").hide()
	})
})
/*nav-1*/
$(".nav-1").on("click","li",function(){
	$(this).addClass("active").siblings().removeClass("active")
})
/*nav3  nav4*/
$(".nav-select").mouseenter(function(){
	$(".nav-3").show().mouseenter(function(){
		$(".nav-4").show()
	}).mouseleave(function(){
		$(".nav-4").hide()
	})
}).mouseleave(function(){
	$(".nav-3").hide()
})
$(".nav-3").mouseenter(function(){
	$(".nav-3").show()
}).mouseleave(function(){
	$(".nav-3").hide()
})
$(".nav-4").mouseenter(function(){
	$(".nav-4").show()
	$(".nav-3").show()
}).mouseleave(function(){
	$(".nav-4").hide()
	$(".nav-3").hide()
})
/*放大镜*/
$(".bottom-img ul li").click(function(){
	$index = $(this).index()
	$(this).addClass("active1").siblings().removeClass("active1")
	$(".small-img img").eq($index).show().siblings("img").hide();
	$(".big-img img").eq($index).show().siblings().hide();
	$(".mask").css("background","url(img/good"+($index+1)+".jpg)")
})
$(".small-img").mouseenter(function(){
	$(".mask").show()
	$(".layer").show()
	$(".big-img").show()
}).mouseleave(function(){
	$(".mask").hide()
	$(".layer").hide()
	$(".big-img").hide()
}).mousemove(function(e){
	var e = e || event;
	var x = e.pageX - $(".mask").width()/2 - $(".small-img").offset().left
	var y = e.pageY - $(".mask").height()/2 - $(".small-img").offset().top
	var maxL = $(".small-img").width() - $(".mask").width()
	var maxY = $(".small-img").height() - $(".mask").height()
	x = x < 0 ? 0 : (x>maxL?maxL:x)
	y = y < 0 ? 0 : (y>maxY?maxY:y)
	$(".mask").css({
		"left":x,
		"top":y,
		"backgroundPositionX":-x,
		"backgroundPositionY":-y,
	})
	var bigL = x*$(".big-img").width()/$(".small-img").width()
	var bigY = y*$(".big-img").height()/$(".small-img").height()
	$(".big-img img").css({
		"left":-bigL,
	    "top":-bigY
	})
})
//cont-m-M
$(".cont-m-M-p2-s1").mouseenter(function(){
	$(".huiyuanbuy").show()
}).mouseleave(function(){
	$(".huiyuanbuy").hide()
})
$(".iponepay").mouseenter(function(){
	$(".erweima").show()
}).mouseleave(function(){
	$(".erweima").hide()
})
var count = 1
$(".cont-m-M-p6 span").eq(1).click(function(){
	--count
	if( count <= 0 ){
		alert("你必须选择一件商品进行购买")
		count = 1
	}
	$(this).next("span").html(count)
	$(".money").html(`￥${count*90}.0`)
})
$(".cont-m-M-p6 span").eq(3).click(function(){
	count++
	$(this).prev("span").html(count)
	$(".money").html(`￥${count*90}.0`)
})
//商品详情 评价详情显示隐藏
$(".cont-b-L-T>ul>li").eq(1).click(function(){
	var index = $(this).index()
	$(this).addClass("active3")
	$(".cont-b-L-T>ul>li").eq(0).removeClass("active3")
	$(".cont1").eq(1).show()
	$(".cont1").eq(0).hide()
})
$(".cont-b-L-T>ul>li").eq(0).click(function(){
	var index = $(this).index()
	$(this).addClass("active3")
	$(".cont-b-L-T>ul>li").eq(1).removeClass("active3")
	$(".cont1").eq(0).show()
	$(".cont1").eq(1).hide()
})
//right-nav-L
$(".list1").mouseenter(function(){
	$(this).css("background","#e73736 url(img/icon_03.png) no-repeat center center")
	$(".register-login").show()
}).mouseleave(function(){
	$(".register-login").hide()
	$(this).css("background","#666666 url(img/icon_03.png) no-repeat center center")
})
$(".register-login").mouseenter(function(){
	$(".list1").css("background","#e73736 url(img/icon_03.png) no-repeat center center")
	$(".register-login").show()
}).mouseleave(function(){
	$(".list1").css("background","#666666 url(img/icon_03.png) no-repeat center center")
	$(".register-login").hide()
})


$(".list3").mouseenter(function(){
	$(this).css("background","#e73736")
	$(".history").show().stop().animate({"left":-92,opacity:1},500)
}).mouseleave(function(){
	$(this).css("background","#666")
	$(".history").stop().animate({"left":-112,opacity:0.5},500,function(){
		$(".history").hide()
	})
})
$(".history").mouseenter(function(){
	$(".list3").css("background","#e73736")
	$(".history").stop()
	$(".history").show()
}).mouseleave(function(){
	$(".list3").css("background","#666")
	$(".history").stop().animate({"left":-112,opacity:0.5},500,function(){
		$(".history").hide()
	})
})


$(".list4").mouseenter(function(){
	$(this).css("background","#e73736")
	$(".shoucang").show().stop().animate({"left":-92,opacity:1},500)
}).mouseleave(function(){
	$(this).css("background","#666")
	$(".shoucang").stop().animate({"left":-112,opacity:0.5},500,function(){
		$(".shoucang").hide()
	})
})
$(".shoucang").mouseenter(function(){
	$(".list4").css("background","#e73736")
	$(".shoucang").stop().show()
}).mouseleave(function(){
	$(".list4").css("background","#666")
	$(".shoucang").stop().animate({"left":-112,opacity:0.5},500,function(){
		$(".shoucang").hide()
	})
})

$(".top1").click(function(){
	$("html,body").stop().animate({"scrollTop":0},1000)
})


//购物车特效
var flagG = true
$(".p2").click(function(){
	$(".list2").css("background","#666666")
	$(".list2 i").css("background","#666 url(img/icon_06.png) no-repeat center center")
	$(".list2 span").css({"background":"#e73736","color": "#fff"})
	$(".right-nav-1").css("width",36)
	$(".right-nav-R").css("display","none")
	flagG = true
})
$(".list2").click(function(){
	if( flagG ){
		$(".list2").css("background","#e73736")
		$(".list2 i").css("background","#e73736 url(img/icon_06.png) no-repeat center center")
		$(".list2 span").css({"background":"#fff","color": "#e73736"})
		$(".right-nav-1").css("width",306)
		$(".right-nav-R").css("display","block")
		flagG = false
	}else{
		$(".list2").css("background","#666666")
		$(".list2 i").css("background","#666 url(img/icon_06.png) no-repeat center center")
		$(".list2 span").css({"background":"#e73736","color": "#fff"})
		$(".right-nav-1").css("width",36)
		$(".right-nav-R").css("display","none")
		flagG = true
	}
})
$(".list2").mouseenter(function(){
	if( flagG ){
		$(".list2").css("background","#e73736")
		$(".list2 i").css("background","#e73736 url(img/icon_06.png) no-repeat center center")
		$(".list2 span").css({"background":"#fff","color": "#e73736"})
	}
}).mouseleave(function(){
	if( flagG ){
		$(".list2").css("background","#666666")
		$(".list2 i").css("background","#666 url(img/icon_06.png) no-repeat center center")
		$(".list2 span").css({"background":"#e73736","color": "#fff"})
	}
})
