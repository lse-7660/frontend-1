// 1. 산술연산자
console.log(10 / 2); // 5

// 나머지 연산자
console.log(10 % 3); // 1
console.log(6 % 3);
// 보통 0이 되는 값을 얻으려고 씀 슬라이드같은 곳, 이해안되지만 그렇다고 함

function isEven(num) {
    console.log(num % 2 === 0);
}
isEven(1); // false
isEven(4); // true
// 그럼 이 값을 가지고
// true일 때, false일 때를 잡을 수 잇겟군요

// 2. 할당 연산자

// 하트를 클릭하면 1씩 증가함
let i = 1;
// i = i + 1;
i += 1;

console.log(i);

// 3. 증감 연산자
let ii = 1;
// ii = ii + 1;
// ii = ii++;
console.log(ii);
console.log(ii++); // 1 (선출력)
console.log(ii); // 2 (후연산)

console.log(++ii); // 3 (선연산)

console.log(ii--);
console.log(ii);
console.log(--ii);

// 4.부정 연산자
// 반대인 boolean 값

console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!!0);

// 5. 비교 연산자
const j = 1;
const k = '1';
const l = 13;

console.log(j == k); // true
console.log(j === k); // false
console.log(j !== k); // true
console.log(j > k); // false
console.log(j <= k); // true

// 선배 마라탕 사주세요
// 마라탕 먹고싶어요
// 하 김밥 괜히 사왓네
// 갑자기 마라탕얘기하셔서 놀랏네;

// 6. 논리 연산자
// AND 연산자 : 둘 다 참이면 true 반환
const m = true;
const n = true;

if (m && n) {
    console.log('축하드립니다 둘 다 참입니다');
}

// &&연산자를 기준으로 가장 먼저 만나는 거짓 값을 반환

console.log(true && true); // true
console.log(true && false); // false
console.log(1 && 0 && ''); // 0
console.log(1 && 2 && '3'); // 3

// OR연산자 : 둘 중 하나라도 참이면 true 반환

const o = true;
const p = false;

console.log(o || p);
console.log('' || '상실을 손에 넣음'); // 가장 먼저 만나는 참 데이터가 반환
console.log(false || 0 || null); // 다 부정이면 마지막 값 반환

// nullush 병합연산자 (??)
// null 또는 undefined 일 때만 오른쪽 값 반환

const q = 0;

console.log(q || 5); // 5
console.log(q ?? 5); // 0
console.log(null ?? 5); // 5
console.log(undefined ?? null); // 모두 false일 경우 마지막 값 출력

// 8. 삼항 연산자
// 겁니많이쓰임
// 조건 ? 참 : 거짓

console.log(false ? '참' : '거짓');

const bones = 131;

if (bones > 10) {
    console.log('131 애니화');
} else {
    console.log('하...');
}
// if문으로 쓰면 길어요

console.log(bones > 10 ? '131 애니화' : '술주시오');
// 삼항 연산자로 쓰면 짧아요

function isNisang(text) {
    console.log(text === 'nisang' ? '형!' : '뭡니까?');
}

isNisang('nisang'); // 형!
isNisang('reigen'); // 뭡니까?

// 9. 전개 연산자

// 객체 복사(객체의 전개)
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 };
console.log(obj2);

// 배열 복사

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log([...arr1, ...arr2]);

// tlqtoRlrk tndjqtlrksdp cudksemerh skwnddp EH rkdtksla qnxwkqrh whssk wlfansgkfurh roTlqkfshadl whssk alsvPtoRl elwu rmsid

// 함수 인자 전달

function sum(a, b) {
    console.log(a + b);
}

sum(1, 2); // 3

// 데이터 값이 배열이라면?
const num = [2, 3];
sum(num[0], num[1]);

sum(...num);
