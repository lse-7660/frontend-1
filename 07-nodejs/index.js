// callback
// setTimeout(() => {
//     console.log('리츠');
//     setTimeout(() => {
//         console.log('모브');
//     }, 2000);
// }, 3000);

// 사용자 정의 함수의 동기 처리
// function faker(callback) {
//     callback();
// }
// console.log('1');
// faker(() => {
//     console.log('2');
// });
// console.log('3');

// 사용자 정의 함수는 콜스택

// API 비동기처리
// console.log('1');
// setTimeout(() => {
//     console.log('3');
// }, 0);
// console.log('2');

// setTime은 콜백 큐
// 그래서 콜백 왜 쓴다는건지,,,이해를 못함

// 콜백지옥
// setTimeout(() => {
//     console.log('1' + new Date());
//     setTimeout(() => {
//         console.log('2' + new Date());
//         setTimeout(() => {
//             console.log('3' + new Date());
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promise
// const promise = new Promise((resolve, reject) => {
//     console.log('커피 제조 중');
//     setTimeout(() => {
//         resolve('제조 완료');
//     }, 3000);
// });

// promise.then((result) => {
//     console.log(result);
// });

// resolve에 '제조완료'라는 인수를 넣으면
// then을 통해 실행되는거임
// 생성자함수 뭘까

var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
}).listen(8080);
