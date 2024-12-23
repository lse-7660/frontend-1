const http = require('http');

const server = http.createServer((req, res) => {
    // 요청이 들어오면 응답을 보냄
    // 응답 헤더 설정
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello Node</h1>');
    res.end('<p>더 높이 가줄게 내가 바랏던 세계 젤위에</p>');
});

// 서버에 이벤트 리스너 등록
// 서버에 에러가 발생했을 때 실행할 콜백함수
server.on('error', (error) => {
    console.log('ERROR :', error.message);
});

// 리스닝 이벤트
server.on('listening', () => {
    console.log('서버는 잘도 도네 돌아가네');
});

// 서버 실행
server.listen(8080, () => {
    console.log('8080');
});
