const range_input = document.getElementById('testimonials-range');
//const t_carousel = document.getElementById('t-carousel');
const t_carousel_inner = document.getElementById('t-carousel-inner');
//const t_card = document.querySelector('testimonials__card');
let step = (window.innerWidth>1000)? 267 + 30 : 293 + 30 ;
range_input.addEventListener('change', rotateCarousel);

function rotateCarousel(){
    t_carousel_inner.style.left="-"+range_input.value * step +"px";
}