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
