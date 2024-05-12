
$(document).ready(function() {
  $('.nav3_menu li').each(function() {
    $(this).hover(function() {
      $(this).find('.material-symbols-outlined').css('transform', 'rotateY(360deg)');
      $(this).find('.material-symbols-outlined').css('color','#fff');
      $(this).find('.material-symbols-outlined').css('backgroundColor','#5EB23F');

    }, function() {
      $(this).find('.material-symbols-outlined').css('transform', 'rotateY(0)');
      $(this).find('.material-symbols-outlined').css('color','#333');
      $(this).find('.material-symbols-outlined').css('backgroundColor','#f5f5f5');
    });
  });

const apiKey = "2dd2a62d904385b0db3f423a042af454";

// 현재 날씨 정보를 가져와 HTML에 추가하는 함수
function updateWeather(weather, temperature, iconCode) {
  const weatherElement = document.getElementById("weather");
  const imageUrl = getWeatherImageUrl(iconCode); // 날씨 상태에 따른 이미지 파일 경로
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;

  weatherElement.innerHTML = ""; // 이전 내용 삭제
  weatherElement.appendChild(imageElement);
  weatherElement.innerHTML += ` ${temperature}°C`;
}


// API 호출 후 응답 데이터 처리 함수
function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`API 호출에 실패하였습니다. 상태 코드: ${response.status}`);
  }
  return response.json();
}

// API 호출 함수
function getWeather() {
  const city = "Daejeon"; // 날씨를 조회할 도시 이름
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // API 호출
  fetch(apiUrl)
    .then(handleResponse)
    .then(data => {
      // 응답 데이터 처리
      const weather = data.weather[0].main;
      const temperature = Math.round(data.main.temp - 273.15);
      const iconCode = data.weather[0].icon;

      // 결과를 HTML에 표시
      updateWeather(weather, temperature, iconCode);
    })
    .catch(error => console.log(error));
}

// 날씨 상태에 따른 이미지 파일 경로 반환하는 함수
function getWeatherImageUrl(iconCode) {
  const weatherImageMap = {
    "01d": "img/sun.png",
    "02d": "img/fewcloud.png",
    "03d": "img/scatteredclouds.png",
    "04d": "img/brokenclouds.png",
    "09d": "img/rain.png",
    "10d": "img/rain.png",
    "11d": "img/scattered-thunderstorms.png",
    "13d": "img/snow.png",
    "50d": "img/fog.png",
    // 추가적인 날씨 상태에 대한 이미지 파일 경로를 매핑할 수 있습니다.
  };

  return weatherImageMap[iconCode] || "";
}

// 페이지 로드 시 날씨 정보 가져오기
window.addEventListener("load", function () {
  getWeather();
  
});
function displayDate() {
    const dateElement = document.getElementById("date");
    const today = new Date();

    // 날짜 정보 추출
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1을 해줍니다
    const day = String(today.getDate()).padStart(2, "0");

    // 결과를 HTML에 표시
    dateElement.textContent = `${year}-${month}-${day}`;
  }

  // 페이지 로드 시 날짜 정보 가져오기
  window.addEventListener("load", function () {
    displayDate();
  });
  // 현재 날짜와 요일을 가져와서 HTML에 표시하는 함수
  function displayDate() {
    const dateElement = document.getElementById("date");
    const today = new Date();

    // 날짜 정보 추출
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1을 해줍니다
    const day = String(today.getDate()).padStart(2, "0");

    // 요일 정보 추출
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = days[today.getDay()]; // 0부터 6까지의 숫자를 요일로 매핑

    // 결과를 HTML에 표시
    dateElement.textContent = `${year}-${month}-${day} (${dayOfWeek})`;
  }

  // 페이지 로드 시 날짜 정보 가져오기
  window.addEventListener("load", function () {
    displayDate();

    $('.back').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        dots: false,
        infinite: true,
        arrow: true,
        customPaging: function(slider, i) {
          return (i + 1);
        }
    });
    
    $('.text-box').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrow: false,
    });
    $('.main2_right_box1').slick({
      autoplay:true,
      autoplaySpeed: 2000,
      dots: false,
      arrow:false,
    });
    $('.main4_right_box2_t2').slick({
      autoplay:true,
      autoplaySpeed: 2000,
      dots: false,
      arrow:false,
    });
    
    $('#main1 .slick-prev').click(function() {
      $('.back').slick('slickPrev');
    });
    $('#main1 .slick-next').click(function() {
      $('.back').slick('slickPrev');
    });
 
    $('#playbutton').hide();
    $('#pausebutton').on('click', function() {
      $('#playbutton').fadeIn();
      $('#pausebutton').hide();
      $('.back').slick('slickPause');
      $(this).css('background-image', 'url("img/play.png")');
    });
    
    
    $('#playbutton').on('click', function() {
      $('#playbutton').hide();
      $('#pausebutton').fadeIn();
      $('.back').slick('slickPlay');
      $('#pausebutton').css('background-image', 'url("img/pause.png")');
    });
    
    
    var $status = $('.pagingInfo');
    var $slickElement = $('.slideshow');
  
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });
  
    $slickElement.slick({
      // 슬라이더 설정
    });
    $('.guide_1, .guide_2, .guide_3, .guide_4').hover(
      function() {
        $(this).find('.group, .floor, .room, .guidance').stop().css({
          position: 'relative',
          color:'#0A5890',
          transform: 'rotateY(180deg)',
          transition: 'transform 0.5s ease'
        });
      },
      function() {
        $(this).find('.group, .floor, .room, .guidance').stop().css({
          position: 'relative',
          color:'#f5f5f5',
          transform: 'rotateY(0)',
          transition: 'transform 0.5s ease'
        });
      }
    );
      $('.main2_left .box1').css({backgroundColor:'#169DDA',});
      $('.main2_left .box1 a').css({color:'#ffff',});
      
      $('.main2_left_box1 > div').click(function() {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).css({
            backgroundColor: 'transparent',
          });
        } else {
          $('.main2_left_box1 > div').removeClass('active');
          $('.main2_left_box1 > div').css({
            backgroundColor: 'transparent',
          });
          $('.main2_left_box1 > div a').css({
            color: '#333',
          });
          $(this).addClass('active');
          $(this).css({
            backgroundColor: '#169DDA',
          });
          $(this).find('a').css({
            color: '#ffffff'
          })
        }
      });

     
      $('.main2_left_box1 > div').click(function() {
        var newText = "제24대 조강희 병원장 취임식"; // 변경할 텍스트를 저장할 변수 초기화
      
        if ($(this).hasClass('box1')) {
          newText = "제24대 조강희 병원장 취임식";
          $('.main2_left_box3_left p:nth-child(1) a').text("· 근로자의 날·어린이날·부처님 오신 날(대체공휴일) 외래 휴진안내")
          $('.main2_left_box3_left p:nth-child(2) a').text("· [공직자의 이해충돌 방지법] 시행 1주년 기념 홍보슬로건 공모전");
          $('.main2_left_box3_left p:nth-child(3) a').text("· 제6기 CNUH 대학생 서포터즈 모집 안내");
          
          $('.main2_left_box3_right p:nth-child(1) a').text("2023.05.12");
          $('.main2_left_box3_right p:nth-child(2) a').text("2023.04.24");
          $('.main2_left_box3_right p:nth-child(3) a').text("2023.04.04");
        } else if ($(this).hasClass('box2')) {
          newText = "호흡기 알레르기 내과 박동일 교수 국내 최초 시술 성공";
          $('.main2_left_box3_left p:nth-child(1) a').text("· 대전 세종 충남·넥슨 후원 공공어린이재활병원 개원식")
          $('.main2_left_box3_left p:nth-child(2) a').text("· 조강희 병원장 마약 예방 ‘NO EXIT’ 캠페인 동참");
          $('.main2_left_box3_left p:nth-child(3) a').text("· 제8차 만성폐쇄성폐질환 적정성 평가 8년 연속 1등급");

          $('.main2_left_box3_right p:nth-child(1) a').text("2023.05.30");
          $('.main2_left_box3_right p:nth-child(2) a').text("2023.05.30");
          $('.main2_left_box3_right p:nth-child(3) a').text("2023.05.26");
        } else if ($(this).hasClass('box3')) {
          newText = "충남대학교병원 2023년 상반기 빅데이터(팀장급) 채용공고(상시)";
          $('.main2_left_box3_left p:nth-child(1) a').text("· [대전본원] 충남대학교병원 2023년 상반기 약무직 상시공고")
          $('.main2_left_box3_left p:nth-child(2) a').text("· 충남대학교병원 계약직 채용공고");
          $('.main2_left_box3_left p:nth-child(3) a').text("· 대전세종충남 공공어린이재활병원 채용공고");

          $('.main2_left_box3_right p:nth-child(1) a').text("2023.03.17");
          $('.main2_left_box3_right p:nth-child(2) a').text("2023.04.28");
          $('.main2_left_box3_right p:nth-child(3) a').text("2023.04.28");
        } else if ($(this).hasClass('box4')) {
          newText = "의생명연구원 규제특구혁신사업 실험용 쥐(NOG-EXL) 구매";
          $('.main2_left_box3_left p:nth-child(1) a').text("· 2023년 의약품(파사렉트연고 외 8종) 추가단가계약")
          $('.main2_left_box3_left p:nth-child(2) a').text("· 의생명연구원 규제특구혁신사업 실험용 쥐(NOG-EXL) 구매");
          $('.main2_left_box3_left p:nth-child(3) a').text("· 2023년 위생재료 3차 303종 연간 단가 계약");

          $('.main2_left_box3_right p:nth-child(1) a').text("2023.05.25");
          $('.main2_left_box3_right p:nth-child(2) a').text("2023.05.24");
          $('.main2_left_box3_right p:nth-child(3) a').text("2023.05.24");
        }
      });

        


        $('.main2_right_box1').on('afterChange', function(event, slick, currentSlide) {
          
          if (currentSlide === 0) {
            $('.main2_right_box2_t1 a').text("2023년 5월 넷째 주 소식");

            $('.main2_right_box2_t2_t1 a').text("· 제24대 조강희 병원장 취임식 진행");
            $('.main2_right_box2_t2_t2 a').text("· 의생명연구원 규제특구혁신사업 NOG-EXL 구매");
            $('.main2_right_box2_t2_t3 a').text("· 감사실, 제1차 청렴위원회 및 청렴서약식 개최");
            $('.main2_right_box2_t2_t4 a').text("· 마취통증의학과 공동연구논문 마취통증의학 분야 국제학술지 게재");
          } else if (currentSlide === 1) {
            $('.main2_right_box2_t1 a').text("2023년 5월 둘째 주 소식");

            $('.main2_right_box2_t2_t1 a').text("· 대전 노인보건의료센터 어버이날 '사랑의 카네이션 행사' 성료");
            $('.main2_right_box2_t2_t2 a').text("· 호흡기내과 이송이 교수, 제43회 대한중환자의학회 학술대회 수상");
            $('.main2_right_box2_t2_t3 a').text("· 소아암·희귀질환 어린이와 가족이 함께하는 2023 그림한마당 개최");
            $('.main2_right_box2_t2_t4 a').text("· 대전광역시 보조기기센터, 2023 대전지역 체험 전시회 개최");
          } else if (currentSlide === 2) {
            $('.main2_right_box2_t1 a').text("2023년 5월 첫째 주 소식");

            $('.main2_right_box2_t2_t1 a').text("· 병원체자원 BL3 공용연구시설 개소식 ");
            $('.main2_right_box2_t2_t2 a').text("· 5월 1일자 임용장 수여식 진행");
            $('.main2_right_box2_t2_t3 a').text("· 어린이공공전문진료센터 제101회 포토부스 팝업행사 개최");
            $('.main2_right_box2_t2_t4 a').text("· 의료재활센터와 함께하는 어린이날 축제한마당 진행");
          } else if (currentSlide === 3) {
            $('.main2_right_box2_t1 a').text("2023년 4월 넷째 주 소식");

            $('.main2_right_box2_t2_t1 a').text("· 주요 보직자 임명·진료부원장 윤석화 교수, 공공부원장 권계철 교수 등");
            $('.main2_right_box2_t2_t2 a').text("· 보건복지부 지정, 광역 새싹지킴이병원 개소식 및 심포지엄 개최");
            $('.main2_right_box2_t2_t3 a').text("· 의료재활센터 '2023년 재활센터 장애인의 날 기념행사' 진행");
            $('.main2_right_box2_t2_t4 a').text("· 권역심뇌혈관질환센터, 의료취약계층 대상 건강강좌 진행");
          } else if (currentSlide === 4) {
          $('.main2_right_box2_t1 a').text("2023년 4월 셋째 주 소식");

          $('.main2_right_box2_t2_t1 a').text("· 충남대학교병원 제24대 병원장 재활의학과 조강희 교수 임명");
          $('.main2_right_box2_t2_t2 a').text("· 충남대학교병원, 기획재정부 주관 '공공기관 고객만족도 조사' 보통등급");
          $('.main2_right_box2_t2_t3 a').text("· 가정의학과 서원윤 교수, TJB메디컬플러스 '비만' 주제로 방송출연");
          $('.main2_right_box2_t2_t4 a').text("· 대전광역시 지역장애인보건의료센터 '장애인의 날 공동 캠페인' 성료");
        }
      
        $('.main4_right_box2_t2').on('afterChange', function(event, slick, currentSlide) {
        
          
          if (currentSlide === 0) {
            $('.main4_right_box2_t1 p:nth-of-type(2)').text("2023.05월 호");

   
          } else if (currentSlide === 1) {
            $('.main4_right_box2_t1 p:nth-of-type(2)').text("2023.04월 호");

           
          } else if (currentSlide === 2) {
            $('.main4_right_box2_t1 p:nth-of-type(2)').text("2023.03월 호");

          } else if (currentSlide === 3) {
            $('.main4_right_box2_t1 p:nth-of-type(2)').text("2023.02월 호");
           
          } else if (currentSlide === 4) {
            $('.main4_right_box2_t1 p:nth-of-type(2)').text("2022.12월 호");
          }
        });
       
      });
        $('.main3_center_tx1, .main3_center_tx2, .main3_center_tx3, .main3_center_tx4, .main3_center_tx5, .main3_center_tx6, .main3_center_tx7, .main3_center_tx8, .main3_center_tx9').stop().hover(
          function() {
            $(this).css({
              'background-color': 'white',
              'transform': 'translate(-20px, -20px)',
              'transition': 'all 0.4s ease',
              'border': '1px dotted #2F68C2'
            });
            $(this).find('a').css('color', '#2F68C2');
          },
          function() {
            $(this).stop().css({
              'background-color': 'transparent',
              'transform': 'none',
              'transition': 'all 0.4s ease',
              'border': '1px solid #6E96D4'
            });
            $(this).find('a').css('color', '#E4EBF7');
          }
        );
        $('.main3_right').hover(
          function() {
            $(this).find('.material-symbols-rounded').css({
              'transform': 'scaleX(1.3)',
              'transform-origin': 'left',
              'transition': 'all 0.4s ease'
            });
            $(this).find('article').animate({
              'left': '37%'
            }, 50);
          },
          function() {
            $(this).find('.material-symbols-rounded').css({
              'transform': 'scaleX(1)',
              'transform-origin': 'left',
              'transition': 'all 0.4s ease'
            });
            $(this).find('article').animate({
              'left': '33%'
            }, 50);
          }
        );
        $('.footer_medicaldepartment').hide();
        $('.footer_box1 p:nth-of-type(1)').click(function(){
          $('.footer_medicaldepartment').fadeToggle();
        });

        $('.footer_ProfessionalCenter').hide();
        $('.footer_box1 p:nth-of-type(2)').click(function(){
          $('.footer_ProfessionalCenter').fadeToggle();
        });

        $('.nav2_menu_1').hide();

        $('.nav2_menu li:nth-of-type(1)').hover(
          function() {
            $('.nav2_menu_1').stop().fadeIn();
            $('.nav2_menu_2, .nav2_menu_3, .nav2_menu_4, .nav2_menu_5').fadeOut();
            $('.nav2_menu li:nth-of-type(1)').css('transform','scaleX(1)');
          },function(){
            $('.nav2_menu_1').stop().fadeOut();
            $('.nav2_menu li:nth-of-type(1) a:after').css('transform','scaleX(0)');
          });
        
        $('.nav2_menu_1').mouseenter(function() {
          $('.nav2_menu_1').stop().fadeIn();
          $('.nav2_menu li:nth-of-type(1) a:after').css('transform','scaleX(1)');
        }).mouseleave(function() {
          $('.nav2_menu_1').stop().fadeOut();
          $('.nav2_menu li:nth-of-type(1) a:after').css('transform','scaleX(0)');
        });

        $('.nav2_menu_2').hide();

        $('.nav2_menu li:nth-of-type(2)').hover(
          function() {
            $('.nav2_menu_2').stop().fadeIn();
            $('.nav2_menu_1, .nav2_menu_3, .nav2_menu_4, .nav2_menu_5').fadeOut();
            $('.nav2_menu li:nth-of-type(2) a:after').css('transform','scaleX(1)');
          },function(){
            $('.nav2_menu_2').stop().fadeOut();
            $('.nav2_menu li:nth-of-type(2) a:after').css('transform','scaleX(0)');
          });
        
        $('.nav2_menu_2').mouseenter(function() {
          $('.nav2_menu_2').stop().fadeIn();
          $('.nav2_menu li:nth-of-type(2) a:after').css('transform','scaleX(1)');
        }).mouseleave(function() {
          $('.nav2_menu_2').stop().fadeOut();
          $('.nav2_menu li:nth-of-type(2) a:after').css('transform','scaleX(0)');
        });

        $('.nav2_menu_3').hide();

        $('.nav2_menu li:nth-of-type(3)').hover(
          function() {
            $('.nav2_menu_3').stop().fadeIn();
            $('.nav2_menu_1, .nav2_menu_2, .nav2_menu_4, .nav2_menu_5').fadeOut();
            $('.nav2_menu li:nth-of-type(3) a:after').css('transform','scaleX(1)');
          },function(){
            $('.nav2_menu_3').stop().fadeOut();
            $('.nav2_menu li:nth-of-type(3) a:after').css('transform','scaleX(0)');
          });
        
        $('.nav2_menu_3').mouseenter(function() {
          $('.nav2_menu_3').stop().fadeIn();
          
          $('.nav2_menu li:nth-of-type(3) a:after').css('transform','scaleX(1)');
        }).mouseleave(function() {
          $('.nav2_menu_3').stop().fadeOut();
          $('.nav2_menu li:nth-of-type(3) a:after').css('transform','scaleX(0)');
        });

        $('.nav2_menu_4').hide();

        $('.nav2_menu li:nth-of-type(4)').hover(
          function() {
            $('.nav2_menu_4').stop().fadeIn();
            $('.nav2_menu_1, .nav2_menu_2, .nav2_menu_3, .nav2_menu_5').fadeOut();
            $('.nav2_menu li:nth-of-type(4) a:after').css('transform','scaleX(1)');
          },function(){
            $('.nav2_menu_4').stop().fadeOut();
            $('.nav2_menu li:nth-of-type(4) a:after').css('transform','scaleX(0)');
          });
        
        $('.nav2_menu_4').mouseenter(function() {
          $('.nav2_menu_4').stop().fadeIn();
          $('.nav2_menu li:nth-of-type(4) a:after').css('transform','scaleX(1)');
        }).mouseleave(function() {
          $('.nav2_menu_4').stop().fadeOut();
          $('.nav2_menu li:nth-of-type(4) a:after').css('transform','scaleX(0)');
        });

        $('.nav2_menu_5').hide();
        

        $('.nav2_menu li:nth-of-type(5)').hover(
          function() {
            $('.nav2_menu_5').stop().fadeIn();
            $('.nav2_menu_1, .nav2_menu_2, .nav2_menu_3, .nav2_menu_4').fadeOut();
            $('.nav2_menu li:nth-of-type(5) a:after').css('transform','scaleX(1)');
          },function(){
            $('.nav2_menu_4').stop().fadeOut();
            $('.nav2_menu li:nth-of-type(5) a:after').css('transform','scaleX(0)');
          });
        
        $('.nav2_menu_5').mouseenter(function() {
          $('.nav2_menu_5').stop().fadeIn();
          $('.nav2_menu li:nth-of-type(5) a:after').css('transform','scaleX(1)');
        }).mouseleave(function() {
          $('.nav2_menu_5').stop().fadeOut();
          $('.nav2_menu li:nth-of-type(5) a:after').css('transform','scaleX(0)');
        });
        $('.nav2_menu_5_box img').hover(
          function() {
            $(this).stop().css({
              backgroundColor:'#f5f5f5',
              transform: 'rotateY(180deg)',
              transition: 'transform 0.5s ease'
            });
          },
          function() {
            $(this).stop().css({

              backgroundColor:'transparent',
              transform: 'rotateY(0deg)',
              transition: 'transform 0.5s ease'
            });
          }
        );

  
        
        $('.aside').hide();
        $('.modal').hide();
        
        $('.mn').click(function(){
          $('.aside').fadeIn();
          $('.modal').fadeIn();
        
          // 스크롤 비활성화
          $('body').css('overflow', 'hidden');
        });
        
        $('.aside2 .get').click(function(){
          $('.aside').fadeOut();
          $('.modal').fadeOut();
        
          // 스크롤 활성화
          $('body').css('overflow', 'auto');
        });
        
      
          if (!$(event.target).closest('.aside').length && !$(event.target).hasClass('mn')) {
            $('.aside').fadeOut();
          }
        
        
        
       

        
          $('li.lv1').mouseenter(function(){
            $(this).find('ul.lv2').stop().slideDown()
          })
          
          $('li.lv1').mouseleave(function(){
            $('ul.lv2').stop().slideUp()
          })
      
        $('.main2_left_box2 p a').text(newText);
      });
      var currentDateElement = $('#dateInfo');
      var dayOfWeekElement = $('#dayOfWeek');
      var currentDate = new Date();
    
      var year = currentDate.getFullYear();
      var month = currentDate.getMonth() + 1;
      var day = currentDate.getDate();
    
      var daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
      var dayOfWeek = daysOfWeek[currentDate.getDay()];
    
      var formattedDate = year + '.' + month + '.' + day;
      
      currentDateElement.text(formattedDate);
      dayOfWeekElement.text(dayOfWeek);

    });