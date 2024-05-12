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
   
    
    // Execute the function on page load
    handleTextWrapping();
    
    // Execute the function whenever the window is resized
    window.addEventListener('resize', handleTextWrapping);
  });
  
  function handleTextWrapping() {
    var windowWidth = window.innerWidth;
  
    // For #section2 .content1_top p:nth-of-type(2)
    var firstParagraph = document.querySelector('#section2 .content1_top p:nth-of-type(2)');
    if (windowWidth <= 700) {
        // Remove <br> tag and apply white-space: nowrap;
        firstParagraph.innerHTML = firstParagraph.textContent;
    } else {
        // Restore original text
        firstParagraph.innerHTML = 'What kind of achievements will you make<br>It creates a culture where you can concentrate.';
    }
  
    // For .content2_top p:nth-of-type(2)
    var secondParagraph = document.querySelector('#section2 .content2_top p:nth-of-type(2)');
    if (windowWidth <= 700) {
        // Remove <br> tag and apply white-space: nowrap;
        secondParagraph.innerHTML = secondParagraph.textContent;
    } else {
        // Restore original text
        secondParagraph.innerHTML = 'Individuals manage their work hours on their own<br>It creates a culture of responsibility for work.';
    }
  
    // For .content3_top p:nth-of-type(2)
    var thirdParagraph = document.querySelector('#section2 .content3_top p:nth-of-type(2)');
    if (windowWidth <= 700) {
        // Remove <br> tag and apply white-space: nowrap;
        thirdParagraph.innerHTML = thirdParagraph.textContent;
    } else {
        // Restore original text
        thirdParagraph.innerHTML = 'We respect individual competence and passion<br>We create a culture together to achieve the best results.';
    }
  }
  
  // Execute the function on page load
  handleTextWrapping();
  
  // Execute the function whenever the window is resized
  window.addEventListener('resize', handleTextWrapping);