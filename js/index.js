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
},1000);
//option  选项卡效果

$(".option-Top ul li").mouseenter(function(){
	var $list = $(this).attr("list")
	$(this).css({
		"background":"#fff url(img/option-Top.jpg) repeat-x",
        "color":"#ff5722"
	}).siblings().css({
		"background":"#fafafa",
		"color":"#000"
	})
	$.ajax({
		type:"get",
		url:"./js/option.json",
		dataType:"json",
		success : function( json ){
			var pro = json[$list].list;
			if( $list == "classify006"){
				$(".option-Bt").html(`
										<dl>
											<dt><a href=""><img src="img/${pro[0].src}"/></a></dt>
											<dd><a href="">${pro[0].content}</a></dd>
											<dd><span>${pro[0].price}</span><em>${pro[0].price1}</em></dd>
										</dl>	
									`)
				$(".option-Bt").css({"display":"block"})
			}else{
				$(".option-Bt").css("display","flex")
				$(".option-Bt").html(`
					<dl>
						<dt><a href=""><img src="img/${pro[0].src}"/></a></dt>
						<dd><a href="">${pro[0].content}</a></dd>
						<dd><span>${pro[0].price}</span><em>${pro[0].price1}</em></dd>
					</dl>
					<dl>
						<dt><a href=""><img src="img/${pro[1].src}"/></a></dt>
						<dd><a href="">${pro[1].content}</a></dd>
						<dd><span>${pro[1].price}</span><em>${pro[1].price1}</em></dd>
					</dl>
					<dl>
						<dt><a href=""><img src="img/${pro[2].src}"/></a></dt>
						<dd><a href="">${pro[2].content}</a></dd>
						<dd><span>${pro[2].price}</span><em>${pro[2].price1}</em></dd>
					</dl>
					<dl>
						<dt><a href=""><img src="img/${pro[3].src}"/></a></dt>
						<dd><a href="">${pro[3].content}</a></dd>
						<dd><span>${pro[3].price}</span><em>${pro[3].price1}</em></dd>
					</dl>
					<dl>
						<dt><a href=""><img src="img/${pro[4].src}"/></a></dt>
						<dd><a href="">${pro[4].content}</a></dd>
						<dd><span>${pro[4].price}</span><em>${pro[4].price1}</em></dd>
					</dl>
			
				`)
			}
			
		}
	})
})
//showul
var timeShow = setInterval(timeShow1,2000)
var moveLeft = 0
function timeShow1(){
	moveLeft++
	if( moveLeft == 13 ){
		moveLeft = 1
		$(".showul").css("left",0)
	}
	$(".showul").animate({"left":-moveLeft*180},1000)
}
$(".showul li").mouseenter(function(){
	clearInterval(timeShow)
}).mouseleave(function(){
	timeShow = setInterval(timeShow1,1500)
})
/*var oUlleft = 0
$(".next").click(function(){
	oUlleft += 180
	if( oUlleft >= 0 ){
		oUlleft = 0
	}
	$(".showul").animate({"left":oUlleft},500)
})
$(".prev").click(function(){
	oUlleft -= 180
	if(oUlleft <= -2160){
		oUlleft = -2160
	}
	console.log(oUlleft)
	$(".showul").animate({"left":oUlleft},500)
})*/
/*box*/
$(".box1").mouseenter(function(){
	$(this).css("background","#fc5416 url(img/icon_03.png) no-repeat center center")
	$(".box5").css({"display":"block","background":"#fc5416"})
	$(".box5").stop().animate({"right":28},1000)
}).mouseleave(function(){
	$(".box1").css("background","#000000 url(img/icon_03.png) no-repeat center center")
	$(".box5").css("background","#000")
	$(".box5").stop().animate({"right":-30},1000,function(){
    	$(".box5").hide()
    })
})
$(".box5").mouseenter(function(){
	$(".box5").show().css({"background":"#fc5416"});
	$(".box1").css("background","#fc5416 url(img/icon_03.png) no-repeat center center")
	$(".box5").stop();
}).mouseleave(function(){
	$(".box1").css("background","#000000 url(img/icon_03.png) no-repeat center center")
	$(".box5").css("background","#000")
    $(".box5").stop().animate({"right":-30},1000,function(){
    	$(".box5").hide()
    })
})
/*box2*/
$(".box2").mouseenter(function(){
	$(this).css("background","#fc5416 url(img/icon_06.png) no-repeat center center")
	$(".box6").css({"display":"block","background":"#fc5416"})
	$(".box6").stop().animate({"right":28},1000)
}).mouseleave(function(){
	$(".box2").css("background","#000000 url(img/icon_06.png) no-repeat center center")
	$(".box6").css("background","#000")
	$(".box6").stop().animate({"right":-30},1000,function(){
    	$(".box6").hide()
    })
})
$(".box6").mouseenter(function(){
	$(".box6").show().css({"background":"#fc5416"});
	$(".box2").css("background","#fc5416 url(img/icon_06.png) no-repeat center center")
	$(".box6").stop();
}).mouseleave(function(){
	$(".box2").css("background","#000000 url(img/icon_06.png) no-repeat center center")
	$(".box6").css("background","#000")
    $(".box6").stop().animate({"right":-30},1000,function(){
    	$(".box6").hide()
    })
})
/*box3*/
$(".box3").mouseenter(function(){
	$(this).css("background","#fc5416 url(img/icon_08.png) no-repeat center center")
	$(".box7").css({"display":"block","background":"#fc5416"})
	$(".box7").stop().animate({"right":28},1000)
}).mouseleave(function(){
	$(".box3").css("background","#000000 url(img/icon_08.png) no-repeat center center")
	$(".box7").css("background","#000")
	$(".box7").stop().animate({"right":-28},1000,function(){
    	$(".box7").hide()
    })
})
$(".box7").mouseenter(function(){
	$(".box7").show().css({"background":"#fc5416"});
	$(".box3").css("background","#fc5416 url(img/icon_08.png) no-repeat center center")
	$(".box7").stop();
}).mouseleave(function(){
	$(".box3").css("background","#000000 url(img/icon_08.png) no-repeat center center")
	$(".box7").css("background","#000")
    $(".box7").stop().animate({"right":-28},1000,function(){
    	$(".box7").hide()
    })
})
/*box4*/
$(".box4").mouseenter(function(){
	$(this).css("background","#fc5416 url(img/jiantou.png) no-repeat center center")
	$(".box8").css({"display":"block","background":"#fc5416"})
}).mouseleave(function(){
	$(".box4").css("background","#000000 url(img/jiantou.png) no-repeat center center")
	$(".box8").css("background","#000")
	$(".box8").hide()
})
$(".box8").mouseenter(function(){
	$(".box8").show().css({"background":"#fc5416"});
	$(".box4").css("background","#fc5416 url(img/jiantou.png) no-repeat center center")
	$(".box8").show();
}).mouseleave(function(){
	$(".box4").css("background","#000000 url(img/jiantou.png) no-repeat center center")
	$(".box8").css("background","#000")
    $(".box8").hide()
})
$(".box4").click(function(){
	$("html,body").stop().animate({"scrollTop":0},1000)
})
$(".box8").click(function(){
	$("html,body").stop().animate({"scrollTop":0},1000)
})
