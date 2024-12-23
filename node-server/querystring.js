const http = require('http');
const url = require('url');
const querystring = require('querystring');

// "http://localhost:8080/search?category=shoes&color=black&size=260";

const server = http.createServer((req, res) => {
    // url 문자열을 url 객체로 변환
    const parsedUrl = url.parse(req.url);
    // console.log(parsedUrl.query);
    // 위에서 만든 객체 중 query 부분을 querystring 모듈로 객체로 변환
    const query = querystring.parse(parsedUrl.query);
    // query = { category: 'shoes', color: 'black', size: '260' }

    // 상품 검색 처리
    if (query.category || query.color || query.size) {
        const result = `
      <h2>검색결과</h2>
      <p>카테고리: ${query.category}</p>
      <p>카테고리: ${query.color}</p>
      <p>카테고리: ${query.size}</p>
    `;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(result);
    }
});

server.listen(8080, () => {
    console.log('8080 서버 실행 중');
});
