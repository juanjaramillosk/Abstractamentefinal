const caras = document.getElementById('caras')
const caras1 = document.getElementById('caras1')
const seccion2 = document.getElementById('seccion2')


setTimeout(function() {
    seccion2.style.opacity = 1;
    seccion2.style.transitionDuration = '2s';
    seccion2.style.marginBottom = '0px';  
}, 2000)



window.addEventListener("scroll",function(){
console.log(window.scrollY);
let pos = window.scrollY;

if (pos <=390) {
    caras.style.opacity = 1;
    caras.style.transitionDuration ='2s';
    caras1.style.opacity = 1;
    caras1.style.transitionDuration ='2s';
}else if( pos >= 40){
    caras.style.opacity = 0;
    caras.style.transitionDuration ='2s';
    caras1.style.opacity = 0;
    caras1.style.transitionDuration ='2s';
}

if (pos > 100) {
    seccion2.style.opacity = 1;
    seccion2.style.transitionDuration = '2s';
    seccion2.style.marginBottom = '0px';
}
if (pos < 100) {
    seccion2.style.opacity = 0;
    seccion2.style.transitionDuration = '2s';
    seccion2.style.marginBottom = '200px';
}
if (pos > 1500) {
    seccion2.style.opacity = 0;
    seccion2.style.transitionDuration = '2s';
    seccion2.style.marginBottom = '200px';
}
    
})




function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";

}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";

}

