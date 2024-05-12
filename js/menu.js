$(function() {

  

    $('.copy1').hide();
    $('.copy2').hide();
    $('.copy3').hide();
    
    $('.content1_right p:nth-child(1), .content1_right p:nth-child(2)').hover(function() {
      $('.copy1').stop().fadeIn();
    }, function() {
      $('.copy1').stop().fadeOut();
    });
    
    $('.copy1').hover(function() {
      $(this).stop().fadeIn();
    }, function() {
      $(this).stop().fadeOut();
    });
    $('.content1_right p:nth-child(3), .content1_right p:nth-child(4)').hover(function() {
        $('.copy2').stop().fadeIn();
      }, function() {
        $('.copy2').stop().fadeOut();
      });
      
      $('.copy2').hover(function() {
        $(this).stop().fadeIn();
      }, function() {
        $(this).stop().fadeOut();
      });

      $('.content1_right p:nth-child(5), .content1_right p:nth-child(6)').hover(function() {
        $('.copy3').stop().fadeIn();
      }, function() {
        $('.copy3').stop().fadeOut();
      });
      
      $('.copy3').hover(function() {
        $(this).stop().fadeIn();
      }, function() {
        $(this).stop().fadeOut();
      });
    
   
    
      $('.content1_left p').hover(function() {
        $(this).css({
          'transform': 'translateY(-20px)',
          'transition': 'transform 0.2s ease'
        });
        $(this).find('a').css('color', '#ccc');
      }, function() {
        $(this).css({
          'transform': 'translateY(0)',
          'transition': 'transform 0.2s ease'
        });
        $(this).find('a').css('color', '#F5F5F5');
      });
      
      document.getElementById('copy1').addEventListener('click', function() {
        var phoneNumber ='01066365780'; // 복사할 번호
      
        navigator.clipboard.writeText(phoneNumber)
          .then(function() {
            console.log('번호가 복사되었습니다.'); // 복사 성공 시 동작 (원하는 메시지 또는 동작을 추가하세요)
          });
        });

        document.getElementById('copy2').addEventListener('click', function() {
            var phoneNumber ='kch5780'; // 복사할 번호
          
            navigator.clipboard.writeText(phoneNumber)
              .then(function() {
                console.log('아이디가 복사되었습니다.'); // 복사 성공 시 동작 (원하는 메시지 또는 동작을 추가하세요)
              });
            });

            document.getElementById('copy3').addEventListener('click', function() {
                var phoneNumber ='_chxxhny'; // 복사할 번호
              
                navigator.clipboard.writeText(phoneNumber)
                  .then(function() {
                    console.log('아이디가 복사되었습니다.'); // 복사 성공 시 동작 (원하는 메시지 또는 동작을 추가하세요)
                  });
                });
                document.getElementById("closeLink").addEventListener("click", function(event) {
                    event.preventDefault(); // 기본 동작인 링크 이동을 막습니다.
                    window.history.back(); // 이전 페이지로 이동합니다.
                  });

                  $('.contact').hide();
                  $('.content1_left p:nth-of-type(3)').click(function(){
                    $('.contact').fadeIn();
                  });

                  $('.ci').click(function(){
                    $('.contact').fadeOut();
                  })
        });

      
      

  
  