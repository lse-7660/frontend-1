// 변수 선언, 할당
let a = 1;
// 재할당
a = 2;
console.log(a);

const b = 1;
console.log(b);
// b = 2; // => TypeError(const는 재할당 불가)

document.write(
    '졸림미다 그러나 나난 할 수 잇다 내일부터는 커피를 안마셔야겟다 오히려 졸림 ㅗ 커피를 ㅓㄴ무 많이 마셧나봐요 심장이 막 두근대진않고 너무 졸려요 잠깐뒤에 저녁먹고나면 난 다시 잠들 수 없겠죠'
);

// Data Type
// Number
const num = 131;
console.log(num);

// string
const string = '애니화 기원';
console.log(string);

const str = 'w-3 h-3 bg-slate-500';
console.log(str);

// boolean
const bool = true;
console.log(bool);
console.log(!bool);

//Object
const obj = {
    name: 'Reigen',
    sex: 'male',
    age: 28,
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);

console.log(`${obj.name}은 ${obj.age}살 입니다.`);

// Array
const arr = [
    { name: 'Mob', age: 14 },
    { name: 'Ritsu', age: 13 },
    { name: 'Teru', age: 14 },
];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[1].name);
console.log(arr[2].name);
console.log(`${arr[2].age}살`);

// function
// 함수 선언
const func = function () {
    console.log('졸려');
};
// 함수 호출
func();

const func2 = (props) => {
    console.log(props);
};
func2('뿡');

// 연산자
// 비교연산자

console.log(1 === 1);
console.log(1 === 2);
console.log(1 !== 1);
console.log(1 !== 2);

// 논리 연산자
// And 연산자: 데이터가 둘 다 참이면 마지막 데이타 반환/ 연산자를 기준으로 가장 먼저 만나는 거짓 데이터 변환
// c 가 참일 경우 d를 실행해라!!!1
const c = true;
const d = '<div>무언가 어떤 개쩌는 기능</div>';

console.log(c && d);

// OR 연산자
// e가 참일 경우 e를 출력
// e가 거짓일 경우 f를 출력
const e = '푸대푸대';
const f = '잠들 수 없습니다';

console.log(e || f);

// 삼항 연산자
// 조건 ? 참일때 반환 : 거짓일 때 반환
console.log(true ? '엿' : '머거');
