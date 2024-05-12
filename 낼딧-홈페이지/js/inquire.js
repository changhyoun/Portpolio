$(function(){
  $('.scrolldown').on('click', function() {
    $('html').animate({ scrollTop: 50000 }, 'slow');
  });
  $(".nav_center .menu li a,.nav_right P a").hover(
    function() {
      $(this).css("color", "#f5f5f5");
    },
    function() {
      $(this).css("color", "");
    }
  );
  $('.moblie_menu').hide()
  $('.mo_close').click(function(){
    $('.moblie_menu').fadeOut();
  })
  $('.mo_menu').click(function(){
    $('.moblie_menu').fadeIn();
  })
})