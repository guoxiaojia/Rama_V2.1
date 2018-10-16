$(function(){
    $(".navInfo").on('click',function(){
        $('.menu').show().animate({
            opacity:1,
            left:0,
            width:'100%'
        },500)
    })
    $(".icon-close").on('click',function(){
        $('.menu').animate({
            left: '-100%',
            width: 0,
            opacity:0
        },800,function() {
            $('.menu').hide();
        })
    })

    $(".menu-nav > li").hover(function(){
        var $this = $(this).children().find('.child')[0]
        if($this){
            $(this).children().find('ul.child').stop().slideDown();
            return;
        }
       
    },function(){
        var $this = $(this).children().find('.child')[0]
        if($this){
            $(this).children().find('ul.child').stop().slideUp();
            return;
        }
        
    })
})