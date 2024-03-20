/*
var landing = document.getElementById('landing');
var home = document.getElementById('home');

var touchstartY;
var clicked=false; 


landing.addEventListener('onClick', function(e) {
    touchstartY = e.touches[0].clientY;
    clicked  = true;
});

landing.addEventListener('', function(e) {
    touchstartY = null;
    clicked  = false;
});

landing.addEventListener('touchmove', (e)=>{
    console.log("touch: "+touchstartY);
    if(e.changedTouches[0].clientY < touchstartY && clicked){
        home.classList.remove("d-block").add('d-block');
        landing.classList.add('d-none');

    }
})

landing.addEventListener('mousemove', (e)=>{
    console.log("mouse:"+touchstartY);
    if(e.changedTouches[0].clientY < touchstartY){
        home.classList.remove("d-block").add('d-block');
        landing.classList.add('d-none');

    }
})
*/
window.addEventListener("scroll", ()=> {
    var navbar = document.querySelector(".nav");
    if (window.scrollY > 0) {
      navbar.classList.add("nav-scrolled");  
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

