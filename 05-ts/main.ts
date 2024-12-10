let hello: string = 'Hello TypeScript';

hello = '집';

console.log(hello);

// 구문
// 변수명: 타입 = 값
const str: string = 'hello';
const num: number = 10;
const bool: boolean = true;
const arr: number[] = [1, 2, 3];
const obj: { name: string; age: number } = { name: 'Rucker', age: 24 };

// 타입 지정은 생략할 수도 있다!: 타입 추론

// 함수 선언
// // function 함수이름(매개변수: 타입) 반환타입{
//     반환코드;

// }

// hello 함수 만들고,
function hello2(name: string): void {
    console.log(name);
}

hello2('Rucker');

function hello3(name: string): string {
    return name;
}

console.log(hello3('Rucker'));

// 익명함수
const hello4 = function (age) {
    return age;
};
console.log(hello4(20));

const hello5 = (name: string): string => {
    return `안녕하신가, ${name}여!`;
};
console.log(hello5('필멸자'));

// interface
interface User {}

const user1: User = { name: 'kim', age: 210 };
const user2: User = { name: 'Lee', age: 254 };

// 객체 타입
const a: { name: string; age: number } = { name: 'kim', age: 264 };
const b: { name: string; age: number } = { name: 'shin', age: 51 };

interface Ab {
    name: string;
    age: number;
}

const aa: Ab = { name: 'kim', age: 20 };
const bb: Ab = { name: 'Song', age: 34 };

// 배열 타입
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['가', '나', '다'];
const arr3: any[] = [1, '배고파', true];

// 객체 배열 타입
// 타입은 대문자로 시작!
interface Students {
    name: string;
    age: number;
}

const students: Students[] = [
    {
        name: '김수국',
        age: 22,
    },
    {
        name: '김케토',
        age: 18,
    },
];

// 객체 내부 객체 타입

interface Address {
    city: string;
    dong: string;
}

interface User3 {
    name: string;
    age: number;
    address: Address;
}

const user3: User3 = {
    name: '김수국',
    age: 22,
    address: {
        city: 'seoul',
        dong: 'molla',
    },
};

// 일반 함수
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2));

const sum2: (a: number, b: number) => number = (a, b) => {
    return a + b;
};

console.log(sum2(1, 2));
