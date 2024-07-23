let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let river = document.getElementById('river');
let boat = document.getElementById('boat');

window.onscroll = function() {
   let value = scrollY ;
   stars.style.left = value + 'px'
   moon.style.top = value*4 + 'px'
   mountains3.style.top = value + 'px'
   river.style.top = value*2 + 'px'
   boat.style.left = value*3 + 'px'
   if (value >= 214) {
    moon.style.display = 'none'
   }else {
    moon.style.display = 'block'
   }
   if (value >= 155) {
    document.querySelector('.main').style.background = 'linear-gradient(#3d80d5, #10001f)';
    document.querySelector('.header').style.display = 'none'
   }else {
    document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
    document.querySelector('.header').style.display = 'flex'
   }
}