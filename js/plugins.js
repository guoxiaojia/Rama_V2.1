/**
 *  page Horizontal screen scroll
 */
var runPage;
runPage = new FullPage({
    id: 'pageContain',
    slideTime: 800,
    effect: {
        transform: {
            translate: 'X'
        },
        opacity: [0, 1]
    },
    mode: 'wheel, touch, nav:navBar',
    easing: 'ease',
    callback:   function(index,thisPage) {
        if(index+1 !== 1) {
            $('.home').removeClass('showFilt');
        }else{
            $('.home').addClass('showFilt');
        }
        if(index+1 !== 4) {
            $('.about .img-box ul .img1 div').removeClass('showStar');
        }else{
            $('.about .img-box ul .img1 div').addClass('showStar');
        }
    }
});

// 倒计时time插件
$('#countdown').countDown({
    targetDate: {
    'day': 1,
    'month': 7,
    'year': 2018,
    'hour': 0,   // 时间控制在东8区
    'min': 0,
    'sec': 0,
    // 'utc': 1    //utc时间世界协调时间
    }
});