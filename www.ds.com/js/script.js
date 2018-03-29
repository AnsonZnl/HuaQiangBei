//返回顶部
var sdelay=0;
function returnTop() {
    window.scrollBy(0,-200);//Only for y vertical-axis
    if(document.body.scrollTop>0) {
        sdelay= setTimeout('returnTop()',40);
    }
}
//码上惊喜
function finou(bk,ne){
    bk.onmouseover=function(){
        ne.style.display='block'
    };
    bk.onmouseout=function(){
        ne.style.display='none'
    };
}
var JCode=document.getElementById("J-code");
var JCodeImg=document.getElementById("J-code-img");
finou(JCode,JCodeImg);
//轮播图
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
     autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });