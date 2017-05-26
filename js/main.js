$(function(){
	$('.header-slide a.top').click(function(){
		$('html,body').stop().animate({'scrollTop':'0'});
	})
});

function index_ban(){
	//初始化banner样式
	//$(".banner").css("background","none");
	var listN = $(".i-process .right .show li").length;
	$(".i-process .right .show li").eq(0).fadeIn(1000);

	for(i=0;i<listN;i++){
		$(".i-process .right .btn").append('<span class="span'+i+'"></span>');
	}
	//$(".i-process .right .btn").css("margin-left",-$(".btn").width()/2);
	$(".i-process .right .btn span").eq(0).addClass("on");
	$(".i-process .right .slide li").eq(0).addClass("on");

	//执行效果
	var sw = 1;
	$(".i-process .right .btn span").mouseover(function(){
		sw = $(".i-process .right .btn span").index(this);
		myShow(sw);
	});
	$('.i-process .right .slide li').mouseover(function(){
		sw = $(".i-process .right .slide li").index(this);
		myShow(sw);
	})
	function myShow(i){
		$(".i-process .right .btn span").eq(i).addClass("on").siblings("span").removeClass("on");
		$(".i-process .right .slide li").eq(i).addClass("on").siblings("li").removeClass("on");
		$(".i-process .right .show li").eq(i).stop(true,true).fadeIn(500).siblings().stop(true,true).fadeOut(500);
	}
	//滑入停止动画，滑出开始动画
	$(".i-process .right").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		clearInterval(myTime);
		myTime = setInterval(function(){
		  myShow(sw);
		  sw++;
		  if(sw==listN){sw=0;}
		} , 5000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw);
	   sw++;
	   if(sw==listN){sw=0;}
	} , 5000);
}

function index_bottom(){
	//初始化banner样式
	//$(".banner").css("background","none");
	var listN = $(".i-info .hide ul").length;
	$(".i-info .hide ul").eq(0).fadeIn(1000);

	for(i=0;i<listN;i++){
		$(".i-info .btn").append('<span class="span'+i+'"></span>');
	}
	//$(".i-info .btn").css("margin-left",-$(".btn").width()/2);
	$(".i-info .btn span").eq(0).addClass("on");

	//执行效果
	var sw = 1;
	$(".i-info .btn span").mouseover(function(){
		sw = $(".i-info .btn span").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".i-info .btn span").eq(i).addClass("on").siblings("span").removeClass("on");
		$(".i-info .hide ul").eq(i).stop(true,true).fadeIn(1000).siblings().stop(true,true).fadeOut(1000);
	}
	//滑入停止动画，滑出开始动画
	$(".i-info .con").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		clearInterval(myTime);
		myTime = setInterval(function(){
		  myShow(sw);
		  sw++;
		  if(sw==listN){sw=0;}
		} , 5000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw);
	   sw++;
	   if(sw==listN){sw=0;}
	} , 5000);
}


$(function(){
    $(".includeDom").each(function(){
        var html = $(this).attr("include");
        $(this).load(html);
    })
})


