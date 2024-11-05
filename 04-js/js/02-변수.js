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

const g = 1;
function test() {
    const e = 2;
    console.log(g, e);
}
test();

// console.log(g, e);
// error
