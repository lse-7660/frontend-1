// $(function(){실행할 코드})
// 이게 ready 이벤트임
// 근데 이제 script 뒤에 defer 붙이면 됨

//페이지가 로딩되자마자 bg컬러를 변경해버릴것임
$('body').css({
    'background-color': 'lightblue',
    'font-size': '20px',
});

$('.btn1')
    .on('mouseenter', function () {
        $('.box1').stop().slideDown();
    })
    .on('mouseleave', function () {
        $('.box1').stop().slideUp();
    });

$('.btn2')
    .mouseenter(function () {
        $('.box2').hide();
    })
    .mouseleave(function () {
        $('.box2').show();
    });

$('.btn3').click(function () {
    $('.box3').animate(
        {
            left: '300px',
            width: '300px',
            height: '300px',
        },
        300
    );
});

// addClass() Method
// 앗사 재밋겟다
// toggle로 추가햇다 뺏다도 가능한
