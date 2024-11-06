// 방구뿡
// 구문 Statement
const arr3 = ['Reigen', 'Mob', 'Ritsu'];

// 아버지 아버지 아버지 들어오세요

console.log(arr3[0], arr3[1], arr3[2]);

// const rei = arr3[0];
// const mob = arr3[1];
// const rit = arr3[2];
// 이렇게 하자니 너무 길고 항목이 많아지면 힘듬;

// 졸리미다

const [rei, mo, rit] = arr3;
console.log(rei, mo, rit);

// 레이겐을 안쓸거다 필요없다 >
// const [, mo, rit] 이렇게 자리라도 남겨놔야함

// 재할당
// 할당 할당...!!! 할당이라고 그만 말혀
let x = 0;
let y = 0;
// x, y 가 이미 쓰이고 있는 상황

const arr4 = [28, 14];
// 1은 x에, 2는 y에 넣고 싶음
[x, y] = arr4;
// 이렇게 하면 재할당됨

console.log(x, y);

// 프리티어 프리티어
// 프리티.어 프리티.어.
// 프리티.어 우리들은
// 프리티.해 티어티.어
// 우리들.은 프리티어~~!!

// 나머지 할당
const arr5 = ['Ekubo', 'Tome', 'Roshuto', 'Yoshioka'];
// 에쿠보만 초록색으로 하고 나머지는 검은색임!
const [e, ...rest] = arr5;

console.log(e, rest);

// 객체의 구조분해
const mini = {
    w: 100,
    // h: 200,
    bg: 'blue',
};

console.log(mini.w, mini.h, mini.bg);
// 근데 이렇게 계속 엄마 이름을 쓰려니까 귀찮아!
// >자식들을 개별포장하자

const { w: width, h = 100, bg } = mini;
// 순서는 상관없고, 이름만 똑같이 하면 됨
// 객체는 이름으로 불러온다

console.log(width, h, bg); // 100 200 'blue'

// 선택적 체이닝 Optional Chaining

const userC = null;
console.log(userC?.name);

const user1 = {
    name: 'Kageyama Ritsu',
    age: 13,
};
const user2 = {
    name: 'Ekubo',
};

function printAge(user) {
    console.log(user?.age || '연령을 입력하여 주십시오');
}

// console.log(user1.age);
// console.log(user2?.age);

printAge(user1);
printAge(user2);

// // 조건문
// // if문
// if (조건) {
// // 조건이 참일 때 실행
// }
// {
//     // 거짓일 경우 실행할
// }

// function isPositive = (num){
// console.log(num);
//     if (num > 0
//     ) {
//         console.log('양수입니다')
//     } else if(num < 0){
//         console.log('음수입니다')
//     }
// }
// isPositive(5)

// switch 조건문
// switch (animal) {
//     case '개':
//         return '멍멍';
//     case '고양이':
//         return '애옹';
// }

function header(type) {
    switch (type) {
        case 'type1':
            return '타입1헤더';
        case 'type2':
            return '타입2헤더';
        default:
            return '집에보내줘';
    }
}

console.log(header('type1'));
