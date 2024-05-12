$(document).ready(function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KNR9VXSY6V');
  
  $("#content2_box1").hover(
    function() {
      $(this).animate({ top: "-=10px" }, 200);
    },
    function() {
      $(this).animate({ top: "+=10px" }, 200);
    }
  );

  const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active-1');

  
});

  $("#content2_box2, #content2_box3, #content2_box4, #content2_box5, #content2_box6").hover(
    function() {
      $(this).animate({ top: "-=10px" }, 200);
    },
    function() {
      $(this).animate({ top: "+=10px" }, 200);
    }
  );

  function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current + "%";
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  function scrollHandler() {
    let element = document.getElementById('content3_skillbox');
    let position = element.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      animateValue('.photo span', 0, 93, 2000);
      animateValue('.ilu span', 0, 96, 2000);
      animateValue('.html span', 0, 95, 2000);
      animateValue('.css span', 0, 94, 2000);
      animateValue('.jq span', 0, 93, 2000);
      animateValue('.ind span', 0, 90, 2000);
      animateValue('.pow span', 0, 95, 2000);
      window.removeEventListener('scroll', scrollHandler);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  function animateValue(id, start, end, duration) {
    let target = document.querySelector(id);
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / (end - start)));
    let timer = setInterval(function() {
      current += increment;
      target.innerHTML = current + '%';
      if (current == end) {
        clearInterval(timer);
       
      }
    }, stepTime);
    
  }

  $(".personal").hide();
  $(".my a").click(function() {
    $(".my").slideUp();
    $(".personal").slideDown();
  });

  $(".personal a").click(function() {
    $(".personal").slideUp();
    $(".my").slideDown();
  });
  $('#numberscroll .n1').addClass('active');
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop >= 0 && scrollTop < 1080) {
      $('#numberscroll .n1').addClass('active');
      $('#numberscroll .n2, #numberscroll .n3').removeClass('active');
    } else if (scrollTop >= 1080 && scrollTop < 2160) {
      $('#numberscroll .n2').addClass('active');
      $('#numberscroll .n1, #numberscroll .n3').removeClass('active');
    } else if (scrollTop >= 2160 && scrollTop < 3240) {
      $('#numberscroll .n3').addClass('active');
      $('#numberscroll .n1, #numberscroll .n2').removeClass('active');
    }
  });
  $(".scroll-link").on("click", function(e) {
    e.preventDefault();
    var hash = this.hash;
    var offset = $(hash).offset().top;
    $('html, body').animate({
      scrollTop: offset
    }, 1000);
  });

  $(".n1").hover(function() {
    $(".l1").css("opacity", "1");
  },function(){
    $(".l1").css("opacity", "0");
  });
  $(".n2").hover(function() {
    $(".l2").css("opacity", "1");
  },function(){
    $(".l2").css("opacity", "0");
  });
  $(".n3").hover(function() {
    $(".l3").css("opacity", "1");
  },function(){
    $(".l3").css("opacity", "0");
  });
});
