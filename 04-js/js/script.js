// 선택자
// id 선택자
document.getElementById('id');
// class 선택자
document.getElementsByClassName('class');
// tag 선택자
document.getElementsByTagName('tag');

// query 선택자: 제일 많이 씀, 우리도 이렇게 쓸 거임
document.querySelector('#id');
document.querySelector('.class');
document.querySelector('#tag');

// 변수 선언

// let
let a = 1;
console.log(a);

// let 재할당
a = 2;
console.log(a);

// const: 재할당 불가능
const b = 3;
console.log(b);

// b = 4;
// console.log(b);
// >오류남
// id, class 잡을 때 이걸로다가.

// 함수 선언
// 일반 함수
// function 함수명() {실행될 코드}

// 함수 호출
// 함수명();

// 객체 선언
const obj = {
    left: '0',
    top: '0',
    // backgroundColor: 'red',
    'background-color': 'red',
    // 같은거임, 위 카멜케이스는 js / 아래 케밥은 css를 js가 이해할 수 있게 옮긴거
};

// 산술연산자
console.log(1 + 2);
console.log(5 % 3); //2
// 슬라이드 만들 때 쓰는데 % 값이 0이다! > 마지막 슬라이드다 > 그럼 첫번째로 돌아가 이렇게 씀

// 조건문
// if (조건) {조건이 참일 때 실행될 코드}
// else {조건이 거짓일 때 실행될 코드}

let c = 1;
if (c === 1) {
    console.log('쌀');
} else {
    console.log('보리');
}

$(document).ready(function () {
    document.querySelector('button').addEventListener('click', function () {
        console.log('밥무거');
        // .box 숨기기
        $('.box').hide();
    });
});
