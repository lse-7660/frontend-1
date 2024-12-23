// fs-test.js
const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === '/') {
            // fs.promises.readFile() : 파일을 읽어오는 메서드
            const data = await fs.promises.readFile('./index.html');
            // 200이면 성공
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // 파일을 읽어온 data를 응답 본문으로 보내면서 요청 종료
            res.end(data);
        } else if (req.url === '/about') {
            const data = await fs.promises.readFile('./about.html');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        }
    } catch (error) {
        console.error(error);
        // 500이면 서버 오류
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        // 에러 메시지를 응답 본문으로 보내면서 요청 종료
        res.end(error.message);
    }
});

// 8080 서버 실행
server.listen(8080, () => {
    console.log('8080 포트에서 서버가 실행 중입니다.');
});
