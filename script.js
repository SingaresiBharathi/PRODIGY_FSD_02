let s=document.querySelector(".searchh");
document.getElementById("searching").onclick=()=>
{
    s.classList.toggle('active');
    s1.classList.remove('active');
    s2.classList.remove('active');
    s3.classList.remove('active');
}

let s1=document.querySelector(".shop-cart");
document.getElementById("cart").onclick=()=>
{
    s1.classList.toggle('active');
    s.classList.remove('active');
    s2.classList.remove('active');
    s3.classList.remove('active');
}
let s2=document.querySelector(".login-form");
document.getElementById("login").onclick=()=>
{
    s2.classList.toggle('active');
    s.classList.remove('active');
    s1.classList.remove('active');
    s3.classList.remove('active');
}

let s3=document.getElementById("container");
document.getElementById("menu").onclick=()=>
{
    s3.classList.toggle('active');
    s2.classList.remove('active');
    s.classList.remove('active');
    s1.classList.remove('active');
}
window.onscroll=()=>
{
    s.classList.remove('active');
    s1.classList.remove('active');
    s2.classList.remove('active'); 
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });