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
    $(window).on('scroll', function() {
    
      var scrollPosition = $(this).scrollTop();
      if (scrollPosition > 1) {
        $('#section1 p:nth-of-type(2), #section1 .mouse').css('opacity', '0');
      } else {
        $('#section1 p:nth-of-type(2), #section1 .mouse').css('opacity', '1');
      }
     
    });
    $('#section1 img').css('transform', 'scale(1)');

    $('.moblie_menu').hide()
    $('.mo_close').click(function(){
      $('.moblie_menu').fadeOut();
    })
    $('.mo_menu').click(function(){
      $('.moblie_menu').fadeIn();
    })
    
});