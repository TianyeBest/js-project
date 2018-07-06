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

//ajax
$.ajax({
	type : "get",
	url : "js/minute.json",
	dataType : "json",
	success : function(res){
		var str = ""
		for( var i = 0 ; i < res.list1.length; i++ ){
			str += `<li>
						<a class="action1" href="">
							<img src="img/${res.list1[i].src}" alt="" />
							<div class="action1-1">
								<span>${res.list1[i].price}</span>
								<i><em>0</em>人付款</i>
							</div>
							<p>${res.list1[i].content}</p>
						</a>
						<div class="action2">
							<div class="action2-1">1</div>
							<div class="action2-2">
								<a class="jia" href="javascript:;">+</a>
								<a class="jian" href="javascript:;">-</a>
							</div>
							<span class="action2-3">加入购物车</span>
							<img src="img/${res.list1[i].guojia}"/>
						</div>
					</li>`
		}
		$(".minute-UL").html(str)
		var arr = [];
		for( let j = 0 ; j < $(".jia").length ;j++){
			arr.push(new oCount().count)//[1,1,1,1,1,1,1,1]
			$(".jia").eq(j).click(function(){
				arr[j]++
				$(this).parent().prev().html(arr[j])
			})
			$(".jian").eq(j).click(function(){
				arr[j]--
				if( arr[j] <= 1 ){
					arr[j] = 1
				}
				$(this).parent().prev().html(arr[j])
			})
		}
		/*for( let j = 0 ; j < $(".jia").length ;j++){
			var count = 1
			$(".jia").eq(j).click(function(){
				count++
				$(this).parent().prev().html(count)
				
			})
		}*/
		
		/*var count = 0
		$(".jia").each(function(){
			this.count = count;
			count++;
			$(this).click(function(){
				$(".jia").parent().prev().html(this.count)
			})
		})*/
	}
})
function oCount(){
	this.count = 1
}
/*function oCount(){
	if( !oCount.ins ){
		oCount.ins = {
			count : 1,
			jia : function(){
				this.count++
			}
		}
	}
	return oCount.ins
}*/
