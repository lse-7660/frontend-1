// // 비동기~ 되게되게되게 중요하대
// // API가 뭐요
// // 동기와 비동기의 차이,,,,,음,,,,,

// // Promise 패턴 :new Promise((resolve, reject) => { ... });
// // 생성자함수 실행이 되었을때 resolve 출력, 실패했을 때 reject 함수 출력
// // useState랑 비슷하다고보면되,
// // 근데 우리가 데이터를 불러오지않으니까 reject는 실습할 때는 거의 안나올거야

// const a = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('a동기');
//             resolve();
//         }, 1000);
//     });
// };

// const b = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('b동기');
//             resolve(); // 성공 시 호출
//         }, 1000);
//     });
// };
// const c = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('c동기');
//             resolve(); // 성공 시 호출
//         }, 1000);
//     });
// };
// const d = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('d동기');
//             resolve(); // 성공 시 호출
//         }, 1000);
//     });
// };

// // a().then(() => {
// //     console.log('a 함수 완료');
// //     b().then(() => {
// //         console.log('b 함수 완료');
// //         c().then(() => {
// //             console.log('c 함수 완');
// //             d().then(() => {
// //                 console.log('d함완');
// //             });
// //         });
// //     });
// // });

// // 콜백 지옥!
// // 어케 해결하냐 : return 쓰자

// // then 은 항상 안에 화살표함수가~
// a()
//     .then(() => {
//         return b();
//     })
//     .then(() => {
//         return c();
//     })
//     .then(() => {
//         return d();
//     })
//     .then(() => {
//         console.log('done');
//     });

// // 웨않되 이거 / 또 함수 뒤에 ()안넣엇음;
// // {return }이거 생략해서 더 간단하게 만들수도~
// // .then(()=>d()) 이렇게
// // .then(d) 이렇게도 됨

// // 근데 이거를 Promise.all 로 할수도 잇음
// Promise.all([a(), b(), c(), d()]).then(() => {
//     console.log('얏따');
// });

// // 어 두 개 다 살려놨더니 프로미스가 먼저 뜨네

// // 실패하면 반역 성공하면 혁명아입니까!

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const getUser = (userId) => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//             .then((res) => {
//                 // 실패(reject)시 처리할 코드
//                 if (!res.ok) {
//                     throw new Error(`${userId}를 찾을 수 없습니다`);
//                 }
//                 // 성공 시 처리할 코드
//                 return res.json();
//             })
//             .then((data) => resolve(data))
//             .catch((error) => reject(error));
//     });
// };

// getUser(1)
//     .then((data) => {
//         console.log(data.title);
//         return getUser(2);
//     })
//     .then((data) => {
//         console.log(data.title);
//         return getUser(3);
//     })
//     .then((data) => {
//         console.log(data.title);
//     });
// // 여기에 에러 추가
// // 근데!!!!이것도 불편하단말임 그래서 async/await패턴을 쓴다!!!!

// // aa, bb < 이렇게 출력됐으면 좋겠음
// // 콜백넣고 셋타임 넣고,, 아 너무 복잡하다 > 프로미스 써

// const aa = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('aa');
//             resolve();
//         }, 1000);
//     });
// };
// const bb = () => {
//     console.log('bb');
// };

// // aa().then(() => {
// //     return bb();
// // });

// // async/await

// const main = async () => {
//     await aa();
//     bb();
// };

// main();

// // ㅊ함수 내부에서 실행해줘야함, 단독으로 실행 못함;

// // 실무예제!
// // 위에서 유저 정보 불러왔던걸 async/await로 만들어볼거임
// const printUser = async () => {
//     try {
//     } catch (error) {
//     } finally {
//     }
//     const user1 = await getUser(1);
//     console.log(user1.title);

//     const user2 = await getUser(2);
//     console.log(user2.title);

//     const user3 = await getUser(3);
//     console.log(user3.title);
// };

// printUser();

// console.log(fetch('https://jsonplaceholder.typicode.com/users'));

fetch('https://jsonplaceholder.typicode.com/users').then((res) => console.log(res.json()));
