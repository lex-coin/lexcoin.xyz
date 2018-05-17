
var menu = false;
$('.mn').on('click', function() {
    if(menu == false) {
        $('.mn').addClass('is-active');   
        $('.resp').fadeIn(300);   
        menu = true;  
    } else {
        $('.mn').removeClass('is-active');    
        $('.resp').fadeOut(300);
        menu = false;    
    }
})

$('.ap').on('click', function() {
    $('.resp').fadeOut(200);
})

$(document).ready(function() {
    $('nav a[href*=\\#]').bind('click', function(e) {
      e.preventDefault(); 
      var target = $(this).attr("href"); 
  
      $('html, body').stop().animate({
        scrollTop: ( $(target).offset().top - 100 ) 
      }, 600, function() {
        location.hash = target;
      });
  
      return false;
    });
  });