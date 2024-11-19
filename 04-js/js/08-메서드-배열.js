const arr = ['Rucker', 'Noah', 'Lucid'];
console.log(arr.length);

// 첫번째 값만 출력(평소)
console.log(arr[0]);
// at을 써보자
console.log(arr.at(0));
// 걍 대괄호로 불러오면되지 이거 뭐하러 써요
// 왜 쓰냐면 마지막꺼 불러오고싶어요 막 배열 백만개임
console.log(arr[arr.length - 1]);
// 절라기네
console.log(arr.at(-1));
// 쨔잔

const arr2 = [1, 2, 3];
console.log(arr2.filter((item) => item > 1));
// console.log(
//     arr2.filter((item) => {
//         return item > 1;
//     })
// ); 이거를 축약한거

const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

// 배열이름.filter((item)=> {return 조건})
const children = users.filter((user) => {
    return user.age <= 7;
});
console.log(children);

// find 조건을 만족하는 첫!번째!요소 반환 고길동씨를 찾아보자!
console.log(users.find((user) => user.name === '고길동'));

// forEach
// 배열이름.forEach((item)=>{return 실행문})

arr2.forEach((item) => {
    console.log(item);
});

const list = ['list1', 'list2', 'list3'];
list.forEach((item) => console.log(item));

// includes
// array.includes(element, start)
const dreamcore = ['Rucker', 'Noah', 'Lucid'];

console.log(dreamcore.includes('Lucid')); // true
console.log(dreamcore.includes('???')); //false

// 소문자 변환 후 includes
const lowerDreamcore = [];
// 맵 배우고 다시!

// join
// array.join(separator)
console.log(dreamcore.join(' | '));

// map
// array.map(function(currentValue, index, arr), thisValue)
const users2 = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 7 },
];

users2.map(function (item) {
    console.log(item);
});

const users3 = users2.map((item) => ({ ...item, email: null }));
console.log(users3);

// pop
// array.pop()
console.log(dreamcore.pop());
console.log(dreamcore);
// 악 루시드가 사라졌어

// push
// array.push(item1, item2, ..., itemX)
// 배열 추가하고 새로운 길이 반환
arr2.push(4, 5, 6);
console.log(arr2);

// reduce
// array.reduce(function(total, currentValue, currentIndex, arr){}, initialValue)

const totalAge = users2.reduce(function (total, item) {
    return total + item.age;
}, 0);
console.log(totalAge);

const averageAge = Math.round(totalAge / users2.length);
console.log(averageAge);

// slice
// array.slice(start, end)
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.slice(0, 3));
