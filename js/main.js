/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topbar-menu").style.top = "0";
  } else {
    document.getElementById("topbar-menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// scroll spy
$(function() {
  var topoffset = 60; //variable for menu height
  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});  
    
// tooltip
$( function() {
    $( document ).tooltip();
} );

$(document).tooltip({
  position: { my: "center", at: "top-10" }
});
	