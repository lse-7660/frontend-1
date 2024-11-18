const num = 3.1415926535;
console.log(num.toFixed(2));

const num2 = 100000000000;
// 갖고싶다
console.log(num2.toLocaleString() + '원');

console.log(Number.isInteger(1));
console.log(Number.isInteger(3.14));

console.log(Number.isNaN(NaN));

// 절대값 반환 절대값이 뭐요? 어따 쓰는거요?
console.log(Math.abs(-10));

// Math.random()
console.log(Math.random());
// 0이상 1미만의 난수를 생성해줌
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(1, 100));

// Math.round(): 반올림
console.log(Math.round(5.18));
