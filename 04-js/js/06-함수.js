// 함수
// 01. 함수 선언하기
// 함수 선언문 function helloA() {}
// helloA();
// 함수 표현식 const helloB = function () {}
// helloB(); 똑같잔아

// 함수 선언문은 호이스팅 됨
hello1();

function hello1() {
    console.log('hello1');
}

// 함수 표현식도 되는가?!

// hello2();

// const hello2 = function () {
//     console.log('hello2');
// };
// 오류!

// Return 반환 및 Exit 종료
function lyric1() {
    return '<p>우리 오빠 말 타고 서울 가시면</p>';
    document.write('비단 구두 사가지고 오신다더니'); // 실행 안 됨
}
document.write(lyric1());

// 뜸북 뜸북 뜸북새 논에서 울고
// 뻐꾹 뻐꾹 뻐꾹새 숲에서 울 제
// 우리 오빠 말 타고 서울 가시면
// 비단 구두 사가지고 오신다더니

function lyric2() {
    return; // 정보없는 빈껍데기를 보냈군요
}
console.log(lyric2()); // undefined

function lyric3() {
    return '<p>우리 오빠 말 타고 서울 가시면</p>';
    return '비단 구두 사가지고 오신다더니'; // return 아래쪽은 실행X
}
document.write(lyric3());

// 매개변수 패턴

function sum(x = 0, y = 0) {
    return x + y;
}
// 기본값이 0, 값을 안 넣어도 오류 안남
document.write(sum(1, 5));
document.write(sum(5));

// 함수의 구조 분해
// 객체 분해
const user = {
    name: 'Mob',
    age: 14,
    address: 'chomi',
};

// function getName(props) {
//     const { name, age, address } = props;
//     console.log(name);
//     console.log(`${address}시에 사는 ${name}은 ${age}살 입니다.`);
// }
// getName(user);

// function getName({name, age, address}) {console~} 이렇게도 쓸 수 있다네,,,,,,,잘 모르겠다

function getName({ name, age, address, email = '이메일 주소를 입력하세요' }) {
    console.log(name);
    console.log(`${address}시에 사는 ${name}은 ${age}살 입니다.`);
    console.log(email);
}
getName(user);

// 엄마 이름을 매번 붙이려니 귀찬 > 구조분해

// ㅈ배고파요
// 으느ㅏㅡ러ㅜㅡ
// 머먹지
// 오후 12시 47분 인간이 허기로 인해 포악해지는 시간이다

// 배열 구조 분해 할당
const spirits = ['Ekubo', , 'Candy'];

function getSecond([, M = '제령됨', C]) {
    // const [, M = '없음', C] = arr;
    console.log(M);
}

getSecond(spirits);

// 다음 꺼는 ekuboSlayer로 해야지

// 나머지 매개변수
function print(...num) {
    console.log(num);
}
print();

// 화살표 함수
// function 대신 =>로 간략하게 함수 선언!

// function rucker() {}
// rucker();

// const rucker2 = function () {};
// rucker2();

const rucker3 = () => {
    console.log('..........');
};
rucker3();

const a = (x) => {};
// 매개변수의 괄호 생략 가능, 근데 프리티어가 붙엿음

const b = (x, y) => {};
// 매개변수 두 개 이상일 때는 괄호 필수

const c = (x, y) => {
    return x + y;
};

const d = (x, y) => x + y;
// return 있을 때 return과 중괄호 생략 가능
