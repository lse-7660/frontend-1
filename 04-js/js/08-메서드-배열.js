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
