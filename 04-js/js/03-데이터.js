// 데이터

// 1.string (문자열)
const string1 = 'hello';
const string2 = 'javascript';
const string3 = `${string1} world ${string2}`;
// 리액트 사용할 때 위 방식 쓰므로 이걸로 외우기
const string4 = 'world' + string1 + string2;

console.log(string3);
console.log(string4);

// 2. 숫자
const number1 = 123;
console.log(number1 + 1);
console.log(typeof number1);

// 3. boolean

const boolean1 = true;
const boolean2 = false;

if (boolean2) {
    console.log('참');
}

// 5. array 배열
// 이름 없음
// 순서로 데이터를 가져옴!
const spiritsAndSuch = ['Reigen', 'Mob', 'Ekubo', 'Serizawa', 'Tome'];

console.log(spiritsAndSuch);
console.log(spiritsAndSuch[1], spiritsAndSuch[1]);

console.log(spiritsAndSuch.length);
console.log(spiritsAndSuch[spiritsAndSuch.length - 1]);

// !!js 배열은 인덱스가 0부터 시작!

// 6. object 객체
// {중괄호}가 있으면 객체
// 이름으로 데이터를 가져옴! 이름과 값이 있다
const user = {
    name: '레이겐',
    age: 28,
    profession: '사기꾼',
};

console.log(user);
console.log(user.name);
console.log(user.age);

// 레이겐은 사기꾼입니다.
console.log(`${user.name}는 ${user.profession}입니다.`);

const userA = {
    name: '리츠',
    age: 13,
};

console.log(userA.name, userA.age);
console.log(`${userA.name}는 ${userA.age}살 입니다.`);

const userB = {
    name: '니상',
    age: 30,
    oshi: userA,
};

console.log(userB);
console.log(userB.oshi.name);
// 대괄호 표기법
console.log(userB['oshi']['name']);
// 많이는 안 씀

const users = [userA, userB];

console.log(users);
console.log(users[0]);
console.log(users[0].name);
console.log(users[0]['name']);

// function 함수

// 함수 선언
function add(a, b) {
    console.log(a + b);
}
// 함수 실행
add(1, 3);

// 함수 표현
const ritsu = function () {
    console.log('사랑해');
};

ritsu();

const add2 = function (a, b) {
    console.log(a + b);
};

add2(2, 5);

// 화살표 함수
// es6버전에서 나옴

// (a, b: 매개변수)
const add3 = (a, b) => {
    console.log(a + b);
};

add3(3, 15);
