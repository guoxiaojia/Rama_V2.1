/**
 *  home fisrtPage
 */

 var firstPage = (function($,window,undefined){
     return {
        init: function() {
            $('.home').addClass('showFilt');
        }
     }
 }(jQuery,window))

//movies部分  轮播
$(function(){
    //
   

    // 默认
    $(".movies-img .blurpic-list li").eq(1).show().siblings("li").hide();
    $(".movies-right .movies-text .text").eq(1).show().siblings(".text").hide();
    //点击小图切换大图
	$("#thumbnail li span").click(function(){
        var ind=$(this).parents("li").index();
        console.log(ind);
		$(".zoompic img").attr({ "src": $(this).siblings("img").attr("src")});
		$("#thumbnail li.current").removeClass("current");
        $(this).parents("li").addClass("current");
        //文字
        $(".movies-right .movies-text .text").eq(ind).show().siblings(".text").hide();
        //模糊图片
       $(".movies-img .blurpic-list li").eq(ind).show().siblings("li").hide();
       $(".movies-img .blurpic-list li").eq(ind).find('img').css('right','0').parent().siblings('li').find('img').css('right','-850px');
        return false;
    });
    
    //小图片左右滚动
	var $slider = $('.slider ul');
	var $slider_child_l = $('.slider ul li').length;   //li的个数
    var $slider_height = $('.slider ul li').height();
    $slider.height($slider_child_l * $slider_height);
    $("#thumbnail").height($slider_height*3);   //显示框的高度
    // console.log($slider_height*3);
    var $thumbnailMTop=($slider_height*3)/2;
    // console.log($thumbnailMTop);
    $("#thumbnail").css({"marginTop":-$thumbnailMTop});


	var slider_count = 0;
	
	if ($slider_child_l < 3) {
		$('#btn-top').css({cursor: 'auto'});
		$('#btn-bottom').removeClass("dasabled");
	}
	
	$('#btn-bottom').click(function() {
		if ($slider_child_l < 3 || slider_count >= $slider_child_l - 3) {
			return false;
		}
		
		slider_count++;
		$slider.animate({top: '-=' + $slider_height + 'px'}, 'fast');
        slider_pic();
        console.log("btn"+slider_count)
	});
	
	$('#btn-top').click(function() {
		if (slider_count <= 0) {
			return false;
		}
		slider_count--;
		$slider.animate({top: '+=' + $slider_height + 'px'}, 'fast');
        slider_pic();
        console.log("top"+slider_count)
	});
	
	function slider_pic() {
        if (slider_count >= $slider_child_l - 3) {    //  count>=1
            console.log("count>=1");
			$('#btn-bottom').css({cursor: 'auto'});
            $('#btn-bottom').addClass("dasabled");
            $('#btn-top').css({cursor: 'pointer'});
            $('#btn-top').removeClass("dasabled");
		}
        else if (slider_count >0 && slider_count <= $slider_child_l - 3) {   //count>0   &&  count <=1
            console.log("count>0   &&  count <=1");
			$('#btn-top').css({cursor: 'pointer'});
			$('#btn-top').removeClass("dasabled");
			$('#btn-bottom').css({cursor: 'pointer'});
			$('#btn-bottom').removeClass("dasabled");
		}
        else if (slider_count <= 0) {    //count <= 0
            console.log("count <= 0");
			$('#btn-top').css({cursor: 'auto'});
            $('#btn-top').addClass("dasabled");
            $('#btn-bottom').css({cursor: 'pointer'});
			$('#btn-bottom').removeClass("dasabled");
		}
	}
})