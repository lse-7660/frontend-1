// 시간 부족 이슈로 자주 쓰는 것만
const str = 'hello world';

console.log(str.length);
console.log(str.includes('hello'));

const str2 = '12345';
// 10글자가 안 넘으면 10글자가 될때까지 채움
console.log(str2.padStart(10, 0));
console.log(str2.padEnd(10, 0));

const str3 = 'Hello Rucker, Hello Dreamcore';
console.log(str3);
console.log(str3.replace('Hello', 'Goodbye'));
console.log(str3.replace(/Hello/g, 'Goodbye'));

// slice
console.log(str.slice(0, 5));
console.log(str.slice(0, -2));
console.log(str.slice(6));
// 어떨 때 쓰냐면, 뉴스 기사 배열이 100개가 있는데 이걸 10개만 보여주고 싶을 때
const news = ['news1', 'news2', 'news3', 'news4', 'news5', 'news6', 'news7'];
console.log(news.slice(0, 5));
// 이렇게요

// split
const str5 = 'Spring, Summer, Fall, Winter';
console.log(str5.split(''));
// 냅다 다 쪼갬;
console.log(str5.split(','));
// 쉼표 기준으로 쪼개라

// toLowerCase
// 데이터 받을 때 대소문자 구분하니까 소문자로 받는게 조음
console.log(str5.toLowerCase());
console.log(str5.toUpperCase());

// trim: 문자열 앞뒤 공백 없앰
const str6 = ' hello world ';
console.log(str6.trim());
