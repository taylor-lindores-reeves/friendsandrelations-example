import particlesJS from './modules/Particles';
import MobileMenu from './modules/MobileMenu';

var close = document.getElementById("closebtn");

close.addEventListener("click", function() {
  var menuIcon = close.children;
  for (var i = 0; i < menuIcon.length; i++){
    menuIcon[i].classList.toggle("active");
  } 
});


new MobileMenu();