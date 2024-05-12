$(function(){

	$(document).ready(function() {
		// 로딩이 시작된 시간 기록
		var startTime = window.performance.now();
	  
		// 로딩이 완료된 후에 실행할 코드
		// 예: 다른 동작 추가
	  
		// 예시로 로딩이 완료된 후에 SVG를 숨기는 코드
		setTimeout(function() {
		  hideSVG();
		}, calculateDynamicLoadTime(startTime));
	  });
	  
	  function hideSVG() {
		$('.ip').fadeOut(); // SVG 숨기기
	  }
	  
	  function calculateDynamicLoadTime(startTime) {
		// 로딩 시간을 동적으로 계산
		var currentTime = window.performance.now();
		var loadTime = currentTime - startTime;
	  
		// 예시: 최소 3초, 최대 10초 동안 로딩 시간을 유지
		loadTime = Math.max(3000, Math.min(10000, loadTime));
	  
		return loadTime;
	  }
	  
	$(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $("#scroll-position").text(scrollPosition);
    });

	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-DJY8S5YR46');

	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
		$('h1').text(scrollTop); 
		
	  });
	  $('#section1').hide();
	  var scrollBlocked = true;

	  // 스크롤 막기
	  function blockScroll() {
		  scrollBlocked = true;
		  $('html, body').css({
			  'overflow': 'hidden',
			  'height': '100%'
		  });
	  }
  
	  // 스크롤 허용
	  function allowScroll() {
		  scrollBlocked = false;
		  $('html, body').css({
			  'overflow': 'auto',
			  'height': 'auto'
		  });
	  }
  
	  // 초기에는 스크롤 막기
	  blockScroll();
  
	  setTimeout(function() {
		  $('#section1').fadeIn();
  
		  // 7.5초 후에 스크롤 허용
		  allowScroll();
	  }, 7500); // 7.5초를 밀리초로 변환한 값
  
	  // 스크롤 이벤트 감지
	  $(window).on('scroll', function() {
		  if (scrollBlocked) {
			  $(this).scrollTop(0);
		  }
	  });

	$(window).trigger("scroll");
      // set and cache variables
		var w, container, carousel, item, radius, itemLength, rY, ticker, fps; 
		var mouseX = 0;
		var mouseY = 0;
		var mouseZ = 0;
		var addX = 0;
		
		
		// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
		// no need to create my own :)
		var fps_counter = {
			
			tick: function () 
			{
				// this has to clone the array every tick so that
				// separate instances won't share state 
				this.times = this.times.concat(+new Date());
				var seconds, times = this.times;
        
				if (times.length > this.span + 1) 
				{
					times.shift(); // ditch the oldest time
					seconds = (times[times.length - 1] - times[0]) / 1000;
					return Math.round(this.span / seconds);
				} 
				else return null;
			},
 
			times: [],
			span: 20
		};
		var counter = Object.create(fps_counter);
		
		
		
		$(document).ready( init )
		
		function init()
		{
			w = $(window);
			container = $( '#contentContainer' );
			carousel = $( '#carouselContainer' );
			item = $( '.carouselItem' );
			itemLength = $( '.carouselItem' ).length;
			fps = $('#fps');
			rY = 360 / itemLength;
			radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
			
			// set container 3d props
			TweenMax.set(container, {perspective:600})
			TweenMax.set(carousel, {z:-(radius)})
			
			// create carousel item props
			
			for ( var i = 0; i < itemLength; i++ )
			{
				var $item = item.eq(i);
				var $block = $item.find('.carouselItemInner');
				
        //thanks @chrisgannon!        
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});
				
				animateIn( $item, $block )						
			}
			
			// set mouse x and y props and looper ticker
			window.addEventListener( "mousemove", onMouseMove, false );
			ticker = setInterval( looper, 1000/60 );			
		}
		
		function animateIn( $item, $block )
		{
			var $nrX = 360 * getRandomInt(2);
			var $nrY = 360 * getRandomInt(2);
				
			var $nx = -(2000) + getRandomInt( 4000 )
			var $ny = -(2000) + getRandomInt( 4000 )
			var $nz = -4000 +  getRandomInt( 4000 )
				
			var $s = 3 + (getRandomInt( 10 ) * .1)
			var $d = 1 - (getRandomInt( 8 ) * .1)
			
			TweenMax.set( $item, { autoAlpha:1, delay:$d } )	
			TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
			TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
			TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
		}
		
		function onMouseMove(event)
		{
			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
			mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;
			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
		}
		
		// loops and sets the carousel 3d properties
		function looper()
		{
			addX += mouseX
			TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
			TweenMax.set( carousel, {z:mouseZ } )
			fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )	
		}
		
		function getRandomInt( $n )
		{
			return Math.floor((Math.random()*$n)+1);	
		}
     
	setTimeout(function() {
        $('#contentContainer').fadeOut();
    }, 7500); // 7.5초 후에 사라지도록 설정
	

	var duration = 7500; // 애니메이션 지속 시간 (밀리초)
	var startValue = 10;
	var endValue = 0;
	var interval = 10; // 숫자 갱신 간격 (밀리초)
	var step = (startValue - endValue) / (duration / interval);

	var current = startValue;
	var timer = setInterval(function() {
	  $("#myText").text(Math.round(current));
	  current -= step;

	  if (current < endValue) {
		clearInterval(timer);
	  }
	}, interval);
	//$('#contentContainer').hide();//이거는 section1 만들기 없애기

	$('#closesumnail').click(function () {
		// 현재 스타일이 'fixed'이면
		if ($('#closesumnail').css('position') === 'fixed') {
			// contentContainer를 fadeOut하고 section1을 보이게 하는 코드를 넣었습니다.
			$('#contentContainer').fadeOut();
			$('#section1').show();
	
			// 스크롤 허용 함수 호출
			allowScroll();
		} else {
			// 'fixed'가 아니면 (즉, 'absolute'인 경우)
			// contentContainer를 fadeIn하고 section1을 숨기는 코드를 넣었습니다.
			$('#contentContainer').fadeIn();
			$('#section1').hide();
	
			// 스크롤 막는 함수 호출
			blockScroll();
		}
	});
	



	$(window).scroll(function() {
        var scrollValue = $(this).scrollTop();
        if (scrollValue <= 3000) {
          var angle = (scrollValue / 3000) * 990;
          $("#section1 p:nth-of-type(1)").css("transform", "rotate(" + angle + "deg)");
        }
		
      });

	  $('#section1 p:nth-of-type(3)').hide();
	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 800 && scrollTop <= 1949) {
			$('#section1 p:nth-of-type(2)').html('<span>My major,</span><br>Publishing and Web Design.');
			$('#section1 p:nth-of-type(3)').fadeIn();
			$('#section1 p:nth-of-type(1)').css({
				'background-image': '',
				'background-size': '',
				'background-position': '',
				'background-color': ''
			});
		  } else if(scrollTop >=1950 && scrollTop <= 2999) {
			$('#section1 p:nth-of-type(2)').html('<span>I pursue collaboration and,</span><br>user-centered Design.');
			$('#section1 p:nth-of-type(3)').fadeOut();
			$('#section1 p:nth-of-type(1)').css({
				'background-image': 'url("img/video9.png")',
				'background-size': 'cover',
				'background-position': 'center center',
				'background-color': 'transparent'
			});
		  }else if(scrollTop >=3000) {
			$('#section1 p:nth-of-type(2)').html('<span>With determination and passion,</span><br>I seek success.');
			$('#section1 p:nth-of-type(3)').fadeOut();
			$('#section1 p:nth-of-type(1)').css({
				'background-image': '',
				'background-size': '',
				'background-position': '',
				'background-color': ''
			});
		  }else{
			$('#section1 p:nth-of-type(2)').html('<span>Hello,</span><br>Applicant, Kim Chang-hyoun');
			$('#section1 p:nth-of-type(3)').fadeOut();
			$('#section1 p:nth-of-type(1)').css({
				'background-image': '',
				'background-size': '',
				'background-position': '',
				'background-color': ''
			});
			
		  }
		  $(window).on('scroll', function() {
			var scrollTop = $(window).scrollTop();
			if (scrollTop >=3100){
				$("#section1 p:nth-of-type(1)").css("transform", "rotate(270deg)");
			}
			if (scrollTop >= 3200) {
				$("#section1 p:nth-of-type(1)").css({
				
					"transform-origin": "center center",
					"transform":"rotate(270deg)",
					"top":"35%",
					"left":"42.5%"
				});
				}else{
					$("#section1 p:nth-of-type(1)").css({
						"transform": "scaleY()",
						"transform-origin": "",
						"transform":"rotate()",
						"top":"",
						"left":""
						

					});
				}
			if(scrollTop > 3400 ){
				$("#section1 p:nth-of-type(1)").css({
					"transform": "scale(50,5)",
					"transition": "0.5s all ease",
					"backgroundColor":"#111",
					"zIndex":"1000"
	
			
				});
			}else{
				$("#section1 p:nth-of-type(1)").css({
					"transition": "",
				});
				if (scrollTop > 1) {
					$('#section1 p:nth-of-type(4), #section1 .mouse').css('opacity', '0');
				  } else {
					$('#section1 p:nth-of-type(4), #section1 .mouse').css('opacity', '1');
				  }
			  
			}
	
			 
		  });
	
		  $(window).scroll(function() {
			if ($(this).scrollTop() >= 3600) {
				$('#section1').css('position', 'relative');

			
			
			}else{
				$('#section1').css('position', 'fixed');
			}
		   // 스크롤 위치가 4300 이상이면 마진 탑을 0으로 변경
		   if (scrollTop >= 4100) {
            $('#section3 .content1_top .box1').css('margin-top', '0');
        } else {
            $('#section3 .content1_top .box1').css('margin-top', '');
        }
		if (scrollTop >= 4300) {
            $('#section3 .content1_top .box2').css('margin-top', '0');
        } else {
            $('#section3 .content1_top .box2').css('margin-top', '');
        }
			if (scrollTop >= 4600) {
            $('#section3 .content1_top .box3').css('margin-top', '0');
        } else {
            $('#section3 .content1_top .box3').css('margin-top', '');
        }
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() <= 4000) {
				$('.content1').css('visibility', 'hidden');
			}else{
				$('.content1').css('visibility', 'inherit');
			}
			 
		});

			
		
			if (scrollTop >= 5800) {
				$('#section3 .content2_top .box1').css('margin-top', '0');
			} else {
				$('#section3 .content2_top .box1').css('margin-top', '');
			}
			if (scrollTop >= 6000) {
				$('#section3 .content2_top .box2').css('margin-top', '0');
			} else {
				$('#section3 .content2_top .box2').css('margin-top', '');
			}
				if (scrollTop >= 6300) {
				$('#section3 .content2_top .box3').css('margin-top', '0');
			} else {
				$('#section3 .content2_top .box3').css('margin-top', '');
			}
			
			if (scrollTop >= 7500) {
				$('#section3 .content3_top .box1').css('margin-top', '0');
			} else {
				$('#section3 .content3_top .box1').css('margin-top', '');
			}
			if (scrollTop >= 7700) {
				$('#section3 .content3_top .box2').css('margin-top', '0');
			} else {
				$('#section3 .content3_top .box2').css('margin-top', '');
			}
				if (scrollTop >= 8000) {
				$('#section3 .content3_top .box3').css('margin-top', '0');
			} else {
				$('#section3 .content3_top .box3').css('margin-top', '');
			}

			if (scrollTop >= 9200) {
				$('#section3 .content4_top .box1').css('margin-top', '0');
			} else {
				$('#section3 .content4_top .box1').css('margin-top', '');
			}
			if (scrollTop >= 9400) {
				$('#section3 .content4_top .box2').css('margin-top', '0');
			} else {
				$('#section3 .content4_top .box2').css('margin-top', '');
			}
				if (scrollTop >= 9700) {
				$('#section3 .content4_top .box3').css('margin-top', '0');
			} else {
				$('#section3 .content4_top .box3').css('margin-top', '');
			}
			
			if (scrollTop >= 10900) {
				$('#section3 .content5_top .box1').css('margin-top', '0');
			} else {
				$('#section3 .content5_top .box1').css('margin-top', '');
			}
			if (scrollTop >= 11100) {
				$('#section3 .content5_top .box2').css('margin-top', '0');
			} else {
				$('#section3 .content5_top .box2').css('margin-top', '');
			}
				if (scrollTop >= 11400) {
				$('#section3 .content5_top .box3').css('margin-top', '0');
			} else {
				$('#section3 .content5_top .box3').css('margin-top', '');
			}
			
			if (scrollTop >= 12600) {
				$('#section3 .content6_top .box1').css('margin-top', '0');
			} else {
				$('#section3 .content6_top .box1').css('margin-top', '');
			}
			if (scrollTop >= 12800) {
				$('#section3 .content6_top .box2').css('margin-top', '0');
			} else {
				$('#section3 .content6_top .box2').css('margin-top', '');
			}
				if (scrollTop >= 13100) {
				$('#section3 .content6_top .box3').css('margin-top', '0');
			} else {
				$('#section3 .content6_top .box3').css('margin-top', '');
			}
		
			if (scrollTop >= 14300) {
				$('#section3 .content7_top .box1').css('margin-top', '0');
			} else {
				$('#section3 .content7_top .box1').css('margin-top', '');
			}
			if (scrollTop >= 14500) {
				$('#section3 .content7_top .box2').css('margin-top', '0');
			} else {
				$('#section3 .content7_top .box2').css('margin-top', '');
			}
				if (scrollTop >= 14800) {
				$('#section3 .content7_top .box3').css('margin-top', '0');
			} else {
				$('#section3 .content7_top .box3').css('margin-top', '');
			}

			if (scrollTop >= 16000) {
				$('#section3 .content8_top .box1').css('margin-top', '0');
			} else {
				$('#section3 .content8_top .box1').css('margin-top', '');
			}
			if (scrollTop >= 16200) {
				$('#section3 .content8_top .box2').css('margin-top', '0');
			} else {
				$('#section3 .content8_top .box2').css('margin-top', '');
			}
				if (scrollTop >= 16500) {
				$('#section3 .content8_top .box3').css('margin-top', '0');
			} else {
				$('#section3 .content8_top .box3').css('margin-top', '');
			}
			

			$("#timer").hide();
			$(window).scroll(function() {
				var scrollValue = $(this).scrollTop();
				if (scrollValue >= 4200 && scrollValue <= 18000) {
				  var angle = ((scrollValue - 4200) / (17800 - 4200)) * 720;
				  $(".longhand").css("transform", "rotate(" + angle + "deg)");
				  
				  // #timer 보이도록 처리
				  $("#timer").show();
				} else {
				  // #timer 감추도록 처리
				  $("#timer").hide();
				}
			  });
		
		
	  });
	  $(window).trigger('scroll');


	});