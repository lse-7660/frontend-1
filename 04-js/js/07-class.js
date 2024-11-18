// 클래스
// 리터럴 객체
// const dreamcore = ['Rucker', 'Hyeong', 'Lucid'];

// 자바스크립트에서는 배열도 객체래
// 생성자 함수
// const dreamcore = new Array('Rucker', 'Hyeong', 'Lucid');

// console.log(dreamcore);
// console.log(dreamcore.length);
// console.log(dreamcore[0]);
// console.log(dreamcore.includes('Rucker'));
// // 이것이 js 기본 매서드

// // 생성자함수이름.prototype.만들고자하는매서드이름 = function(){}
// // 생성자 함수 : new Array(1, 2, 3)
// const starbucks = new Array('Americano', 'Latte', 'Eggtart');

// Array.prototype.menu = function () {
//     console.log(this);
// };

// starbucks.menu();

// const mega = ['집에', '보내', '주세', '요'];
// mega.menu();

// // 매서드 재활용

// const ame = {
//     name: '아메리카노',
//     price: 3000,
//     orderMenu: function () {
//         console.log(`${this.name}는 ${this.price}원 입니다.`);
//     },
// };

// const latte = {
//     name: '라떼',
//     price: 4500,
//     // orderMenu() {
//     //     console.log(`${this.name}는 ${this.price}원 입니다.`);
//     // },
// };

// ame.orderMenu();
// // latte.orderMenu();
// // 객체 안에 함수가 있으면 그게 매서드

// ame.orderMenu.call(latte);

// // 생성자함수를 이용한 메뉴판 만들기
// // 생성자 함수는 대문자로 시작!!!!!
// function OrderMenu(name, price) {
//     this.name = name;
//     this.price = price;
// }

// // 생성자함수.prototype.메소드명 = function(){};
// OrderMenu.prototype.orderMenuPrint = function () {
//     console.log(`${this.name}는 ${this.price}원 입니다`);
// };

// const ame2 = new OrderMenu('아케인', 2);
// ame2.orderMenuPrint();
// const latte2 = new OrderMenu('아악졸려', 131);
// latte2.orderMenuPrint();

// console.log(ame2);

// => 야 생성자 이거 쓰기 개갓다! class 문법으로 쉽게 하자!!!!

// ex6) class 문법

// class OrderCoffee {
//     // 생성자 함수
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     // 메서드
//     printMenu() {
//         console.log(`${this.name}으로 인해 ${this.price} 저는 귀가해야합니다`);
//     }
//     making() {
//         console.log(`${this.name}에 가고 싶습니다 ${this.price}를 보러 가야 합니다`);
//     }
//     complete() {
//         console.log(`${this.name}이 ${this.price} 되었습니다`);
//     }
// }

// new OrderCoffee('급격한 졸음', '죄송하지만').printMenu();
// new OrderCoffee('금요일증후군', '침대에 눕고 싶어서').printMenu();
// new OrderCoffee('집', '러커').making();
// new OrderCoffee('체력', '방전').complete();

// new OrderCoffee('name', 'price')가 반복되면 그냥 변수로 만들어버려
// const ame3 = new OrderCoffee('name', 'price') <이렇게
// 근데 나는 반복이 안되서 걍 둠;ㅎ

// 1118_클래스 문법을 다시 시작하여보자
// 클래스 함수가 뭐냐

class OrderCoffee {
    // 생성자함수(객체를 생성)
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // method
    order() {
        console.log(`${this.name}은 ${this.price}원입니다.`);
    }
    // method 2
    making() {
        console.log(`${this.name}을 만들고 있습니다`);
    }
    made() {
        console.log(`${this.name}가 완성되었습니다`);
    }
}

new OrderCoffee('아메리카노', 3000).order();
// 뭐가 문제인가햇네;; ()이거 안넣어서 매서드 호출이 안됏음;

new OrderCoffee('아메리카노').making();
new OrderCoffee('아메리카노').made();

// '아메리카노', 3000이 계속 반복되니까 객체로 만들어버리기
const ame3 = new OrderCoffee('아메리카노', 3000);
ame3.order();

// 라떼로 다시 실습
const latte3 = new OrderCoffee('라떼', 3500);
latte3.order();
latte3.making();
latte3.made();

// 클래스 상속
class Special extends OrderCoffee {
    constructor(name, price, specialFeature, period) {
        super(name, price + 1500);
        this.specialFeature = specialFeature;
        this.period = period;
    }

    // method
    order() {
        console.log(`${this.specialFeature} ${this.name}는 ${this.price + 1500}원입니다.`);
    }
    // method 2
    limited() {
        console.log(`${this.specialFeature} ${this.name}은 ${this.period} 한정판매입니다.`);
    }
}

new Special('아메리카노', 3000, '미니언즈').order();
new Special('아메리카노', 3000, '미니언즈', '11월').limited();

const ameSpecial = new Special('아메리카노', 3000, '미니언즈', '11월');
ameSpecial.order();
