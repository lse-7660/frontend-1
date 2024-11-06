// 변수 선언
var a = 1;
a = 2;

let b = '2';
b = 3;

const c = true;
// c = false;
// 재할당 불가능
// 컴포넌트는 const로 할당

const d = c;

const listItem = 5;

console.log(a, b, c, d);

// var, let은 재할당 가능

const g = 1; // 전역변수
function test() {
    const e = 2; // 지역변수
    console.log(g, e);
}
test();

// console.log(g, e);
// error

// var는 요즘 잘 사용하지 않는다
// let이랑 const 쓰면 됨
// var는 오류가 많이 난다고 한다
// 기본적으로 const를 쓰면 된다고 함
