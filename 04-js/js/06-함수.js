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

// js > 함수 > 6. 호출 스케줄링(scheduling)

// setTimeout:일정 시간이 지난 후에 함수 실행할래
// clearTimeout으로 타이머 취소할수도~
// setTimeout(function, milliseconds)
// 3초 후에 콘솔에 띄우고싶어
const callRitsu = setTimeout(function () {
    console.log('형이 살기 좋은 세상을 만들기 위해');
}, 3000);

// btn1을 클릭했을 때 clearTimeout 사용하여 setTimeout 취소하고
// 콘솔창에 'setTimeout이 취소되었습니다' 출력

document.querySelector('.btn1').addEventListener('click', () => {
    clearTimeout(callRitsu);
    console.log('대청소가 취소되었습니다');
});

// setInterval / clearInterval
// 사용하는 방법은 똑같음
// setInterval(function, milliseconds)

const callNisang = setInterval(() => {
    // console.log('니상 ');
}, 1000);

document.querySelector('.btn2').addEventListener('click', () => {
    clearInterval(callNisang);
    console.log('사이 좋은 형제는 끝이야');
});

// callback
// 원하는 시점에 호출되도록 설정하는 함수

const aa = (callback) => {
    callback();
    console.log('리츠');
};

const bb = () => {
    console.log('모브');
};

aa(bb);

// a > b 순서대로 출력되면 '동기'
// b > a 순서는 비동기, 콜백 함수로 구현 가능

// this

// 일반함수: 호출 위치에서 this가 결정된다 / 대충 걔라고 해도 알아들음

// 화살표 함수 : 자신이 선언된 {함수} 범위에서 this가 결정된다 함수로 같이 묶어줘야 아~ 걔~ 함

const obj2 = {
    firstname: 'Rucker',
    lastname: 'of Dreamcore',
    // 이것이 메서드라고요? 그렇군
    // fullname: function () {
    //     return `${this.firstname} ${this.lastname}`;
    // },
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    },
    // 위에꺼랑 밑에꺼랑 같음
};

// 객체안에서 함수가 할당되면 그것이 매서드,,, 예?
console.log(obj2.fullname());
// 객체 안에 같이 들어간 애를 this라고 불러도 알아듣죠?

const obj3 = {
    firstname: 'Rucker',
    lastname: 'of Dreamcore',
    fullName: () => {
        return `${this.firstname} ${this.lastname}`;
    },
};

console.log(obj3.fullName());
// 못찾겠대 this가 누구냬 자기 함수 안에는 그런 애 없대 undefined undefined래 그럼 이걸 어떡하냐,

function users() {
    this.firstname = 'Rucker';
    this.lastname = 'of Dreamcore';

    return {
        getFullName: () => {
            return `${this.firstname} ${this.lastname}`;
        },
    };
}
const user2 = users();
console.log(user2.getFullName());

// 아니 이거 1도 몰르겠는데요
// 객체 안에 함수 쓸거면 일반함수 쓰라는 얘기,,,,라네요
