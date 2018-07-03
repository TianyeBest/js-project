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

