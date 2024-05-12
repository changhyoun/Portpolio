$(document).ready(function() {
    $('#phone').click(function() {
        window.open('tel:010-6636-5780');
    });
    
    $('#kakao').click(function() {
        window.open('http://qr.kakao.com/talk/DjZE6943FHyZu5OSrsSF7RM7RQQ-', '_blank');
    });
    
    $('#insta').click(function() {
        window.open('https://www.instagram.com/_chxxhny', '_blank');
    });
    $('#container .cl').click(function() {
        window.location.href = 'menu.html';
    });


        $('#container > div').css({
            'opacity': 1,
            'transform': 'translateY(0)'
        }); 
    
});