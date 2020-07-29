//导航下拉菜单...................................
$(function() {
    $(".fr ul>li").hover(function() {
        $(this).children("ul").slideToggle();
    });
})
//下拉菜单...................................

//天气图标提示
window.onload =function(){
    var wdiv = document.getElementById("weather");
    var wimg = document.getElementById("wimg")
    var date = new Date();
    var h = date.getHours();
    if(h>6 && h<18){
        wimg.src ="img/sun.gif";
    }else{
        wimg.src = "img/moon.gif";
    }
}




//手风琴推荐
$(function() {
    // 鼠标经过某个小li 有两步操作：
    $(".recommend li").mouseenter(function() {
        // 1.当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
        $(this).stop().animate({
            width: 224
        }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
        // 2.其余兄弟小li宽度变为69px， 小图片淡入， 大图片淡出
        $(this).siblings("li").stop().animate({
            width: 69
        }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
    })

});


//轮播图.................................
addEventListener("load",function(){
    var carousel = document.querySelector(".carousel");
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var boxWidth = carousel.offsetWidth;
    //鼠标移入移出左右按钮的显示与隐藏
    carousel.addEventListener("mouseenter",function(){
        arrow_l.style.display = "block";
        arrow_r.style.display = "block";
        clearInterval(timer);
        timer = null;
    });
    carousel.addEventListener("mouseleave",function(){
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
        timer = setInterval(function(){
        //手动调用自动事件
        arrow_r.click();
            },3000);
    });


    //动态生成小圆圈,与点击变换
    var ul = document.querySelector(".carousel ul");
    var ol = document.querySelector(".circle")
    for(var i =0; i<ul.children.length;i++){
        var li = document.createElement("li");
        //记录当前索引号
        li.setAttribute("index",i);
        ol.appendChild(li);
        li.addEventListener("click",function(){
            for(var i=0; i<ol.children.length; i++){
                ol.children[i].className="";
            } 
                this.className="current";
               //点击小圆圈 图片移动  ul移动
               var index = this.getAttribute("index");
               num =index;
               circle=index;
               animate(ul,-index*boxWidth);
        })
    }
    ol.children[0].className="current";
    //克隆第一张图片放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //点击左右按钮图片移动
    var num = 0;
    //控制小圆圈变化
    var circle = 0;
    //节流阀
    var flag = true;

    
    arrow_r.addEventListener('click',function(){
        if(flag){
            flag = false;
                    if(num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num * boxWidth,function(){
            flag =true;
        });
        circle++;
        if(circle == ol.children.length){
            circle = 0;
        }
        for(var i =0; i<ol.children.length;i++){
            ol.children[i].className="";
        }
            ol.children[circle].className="current";
        }

    });
    arrow_l.addEventListener('click',function(){
        if(num == 0){
            num = ul.children.length - 1;
            ul.style.left = -num*boxWidth +"px";
        }
        num--;
        animate(ul,-num * boxWidth);
        circle--;
        if(circle < 0 ){
            circle = ol.children.length - 1; 
        }
        for(var i =0; i<ol.children.length;i++){
            ol.children[i].className="";
        }
            ol.children[circle].className="current";

    });
    
    //自动播放图片
    var timer = setInterval(function(){
        //手动调用自动事件
        arrow_r.click();
    },3000);

});
//轮播图.................................


//商品热卖
$(function() {
    // 1. 鼠标经过左侧的小li 
    $("#shop_left li").mouseover(function() {
        // 2. 得到当前小li 的索引号
        var index = $(this).index();
        $("#shop_content div").eq(index).show().siblings().hide();

    })
})

//限时秒杀
addEventListener("load",function(){
// 1. 获取元素 
    var hour = document.querySelector('.hour'); // 小时的黑色盒子
    var minute = document.querySelector('.minute'); // 分钟的黑色盒子
    var second = document.querySelector('.second'); // 秒数的黑色盒子
    var inputTime = 6000000; // 返回的是用户输入时间总的毫秒数
    var step = 0;
    countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白 
    // 2. 开启定时器
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = 6000 + step*1000; // 返回的是当前时间总的毫秒数
        var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
        var h = parseInt(times / 60 / 60 % 24); //时
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
        var m = parseInt(times / 60 % 60); // 分
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(times % 60); // 当前的秒
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
        step++;
    }
});


//电梯导航
    $(function() {
        var flag = true;
        var toolTop = $(".shop_hot").offset().top;
    floorTool();
    function floorTool(){
        if($(document).scrollTop() >= toolTop){
            $(".fixedtool").fadeIn();
        }else{
            $(".fixedtool").fadeOut();
        };
    }
    //滚到商品热卖出现
    $(window).scroll(function(){
        floorTool();
        //滚动到某个区域自动换色
       if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

                }
            })
        }
    })
    //点击滚动到对应区域
    $(".fixedtool li").click(function(){
    flag = false;
    var current = $(".floor .w").eq($(this).index()).offset().top;
    
    $("body,html").stop().animate({
        scrollTop : current
    },function(){
        flag = true;
    });
    //点击切换li的current
        $(this).addClass("current").siblings().removeClass();
    })

    //点击返回顶部
    $("#gototop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    })

})

