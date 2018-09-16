/*
* @Author: ZX
* @Date:   2018-09-09 11:32:16
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-09 15:36:39
*/
window.onload=function(){


// 2.透明度轮播图


    let imgs=document.querySelectorAll("bannerImg");
    let dots=document.querySelectorAll(".banner_dot");
    let banner=document.querySelectorAll(".banner")[0];
    console.log(dots);
    //定义初始值
    imgs[0].style.opacity=1;
    dots[0].classList.add("active");
    let num=0;
    // 移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            for(let j=0;j<dots.length;j++){
                imgs[j].style.opacity=0;
                dots[j].classList.remove("active");
            }
            imgs[i].style.opacity=1;
            dots[i].classList.add("active");
            num=i;
        }
    }

    //自动轮播
    let t=setInterval(move,2000);
    function move() {
        num++;
        if(num==2){
            num=0;
        }
        for(let j=0;j<dots.length;j++){
            dots[j].classList.remove("active");
            imgs[j].style.opacity=0;
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add("active");
    }


    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,2000);
    }


   



}