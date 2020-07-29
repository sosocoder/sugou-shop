$(function () {
    $(".proIntro .smallImg p img").hover(function () {
        $(this).parents(".smallImg").find("span").remove();
        var d = $(this).position().left;
        var c = $(this).attr("alt");
        $(this).parent("p").addClass("on");
        $(this).parents(".smallImg").append("<span>" + c + "</span>");
        $(".smallImg").find("span").css("left", d)
    }, function () {
        $(this).parents(".smallImg").find("span").remove();
        $(this).parent("p").removeClass("on")
    });
    $(".proIntro .smallImg img").click(function () {
        var c = $(this).attr("data-src");
        $(this).parents(".proCon").find(".proImg").children(".det").attr("src", c).css({
            width: "580px",
            height: "580px"
        });
        $(this).parents(".proCon").find(".proImg").children(".list").attr("src", c).css({
            width: "360px",
            height: "360px"
        });
        $(this).parents(".smallImg").find("span").remove();
        $(this).parent("p").addClass("on").siblings().removeClass("on");
        $(this).off("mouseleave").parent("p").siblings().find("img").on("mouseleave", function () {
            $(this).parents(".smallImg").find("span").remove();
            $(this).parent("p").removeClass("on")
        })
    });
    $(".btns a").click(function () {
        if ($(".categ p").hasClass("on")) {
            if ($(this).children().hasClass("buy")) {
                $(this).attr("href", "order.html")
            }
            $(".proIntro").css("border", "none");
            $(".num .please").hide()
        } else {
            $(".proIntro").css("border", "1px solid #c10000");
            $(".num .please").show()
        }
    });
    $(".smallImg > img").mouseover(function () {
        $(this).css("border", "1px solid #c10000").siblings("img").css("border", "none");
        var c = $(this).attr("data-src");
        $(this).parent().siblings(".det").attr("src", c).css({width: "580px", height: "580px"});
        $(this).parent().siblings(".list").attr("src", c).css({width: "360px", height: "360px"})
    });

});



$(function () {
    $(".num .sub").click(function () {
        var c = parseInt($(this).siblings("span").text());
        if (c <= 1) {
            $(this).attr("disabled", "disabled")
        } else {
            c--;
            $(this).siblings("span").text(c);
            var d = $(this).parents(".number").prev().text().substring(1);
            $(this).parents(".th").find(".sAll").text("￥" + (c * d).toFixed(2));
            a();
            b()
        }
    });
    $(".num .add").click(function () {
        var c = parseInt($(this).siblings("span").text());
        if (c >= 5) {
            confirm("限购5件")
        } else {
            c++;
            $(this).siblings("span").text(c);
            var d = $(this).parents(".number").prev().text().substring(1);
            $(this).parents(".th").find(".sAll").text("￥" + (c * d).toFixed(2));
            a();
            b()
        }
    });
    $(".btns .cart").click(function () {
        if ($(".categ p").hasClass("on")) {
            var c = parseInt($(".num span").text());
            var d = parseInt($(".goCart span").text());
            $(".goCart span").text(c + d)
        }
    });
});


// 放大镜
window.addEventListener("load",function(){
    var proImg = document.querySelector('.proImg');
    var mask = document.querySelector('.mask');
    var maskb = document.querySelector('.maskb')
    //鼠标移入显示隐藏
    proImg.addEventListener('mouseover',function(){
        mask.style.display ="block";
        maskb.style.display ="block";
    });
    proImg.addEventListener('mouseout',function(){
        mask.style.display ="none";
        maskb.style.display ="none";
    });

    proImg.addEventListener('mousemove',function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth/2;
        var maskY = y - mask.offsetHeight/2;
        if(maskX <= 0){
            maskX = 0;
        }else if(maskX >= 220){
            maskX =220;
        }
        if(maskY <= 0){
            maskY = 0;
        }else if(maskY >= 270){
            maskY =270;
        }
        mask.style.left = maskX +'px';
        mask.style.top = maskY +'px';
        var bigimg = document.querySelector('.maskb .bigimg');
        bigimg.style.left = -maskX + 'px';
        bigimg.style.top = -maskY + 'px';
       
    })

    $('.size span').on('click',function(){
        $(this).addClass('act').siblings('.size span').removeClass('act');
    })
    
})