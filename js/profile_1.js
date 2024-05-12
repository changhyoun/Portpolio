$(function(){
    $(".closeIcon").hide();

    $('.introducebox_right_box').click(function(){
        $('.introducebox_right_box p').html("이름: 김창현<br>전화번호: 010-6636-5780<br>나이: 22살(2001년생)");

        $('.introducebox_right_box').css({
            "width": '200px',
            "height": '150px',
        });
        $(".closeIcon").show();
    });
     

    $(document).on("click", ".closeIcon", function(){
        $(".closeIcon").hide();
        $('.introducebox_right_box p').html("인적사항");
        $('.introducebox_right_box').css({
            "width": '160px',
            "height": '45px'
        });
    });
    $("#section3_warp_box1 .content1_box1, #section3_warp_box1 .content1_box2, #section3_warp_box1 .content1_box3, #section3_warp_box2 .content1_box4, #section3_warp_box2 .content1_box5, #section3_warp_box2 .content1_box6").hover(
        function() {
            // 마우스가 요소에 들어왔을 때의 처리
            $(this).css({
                'margin-bottom': '2%',  // 마진 바텀을 2%로 설정
                'transition': 'margin-bottom 0.3s ease'  // 트랜지션 속성 추가
            });
        },
        function() {
            // 마우스가 요소에서 나갔을 때의 처리
            $(this).css({
                'margin-bottom': '',  // 기본 마진으로 복원 (빈 문자열로 설정)
                'transition': 'margin-bottom 0.3s ease'  // 트랜지션 속성 추가
            });
        }
    );
    var progressBar = document.querySelector('.gage1');

    // 5초 동안 0에서 80까지 증가하는 애니메이션을 설정합니다.
    var startValue = 0;
    var endValue = 80;
    var duration = 5000; // 5초
  
    var startTime = null;
  
    function animateProgress(timestamp) {
      if (!startTime) startTime = timestamp;
  
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var currentValue = startValue + (progress * (endValue - startValue));
  
      // 프로그레스 바의 값 업데이트
      progressBar.value = currentValue;
  
      if (progress < 1) {
        // 아직 애니메이션이 끝나지 않았으면 계속해서 업데이트
        requestAnimationFrame(animateProgress);
      }
    }
  
    // 애니메이션 시작
    requestAnimationFrame(animateProgress);
    
    
      
});