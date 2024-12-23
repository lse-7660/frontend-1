const express = require('express');
const app = express();

app.set('port', process.env.Port || 8080);

// 1. 로깅 미들웨어 - 어떤 요청이 왔는지 확인
app.use((req, res, next) => {
    console.log('-------------------');
    console.log('새로운 요청이 왔어요!');
    console.log('요청 종류:', req.method);
    console.log('요청 주소:', req.url);
    console.log('-------------------');
    next(); //
});

// 기본 루트에 GET 요청이 오면 콜백 함수 실행
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

// posts 경로에서 블로그 글 목록을 가져오는 API
app.get('/posts', (req, res) => {
    res.send('블로그 글 목록');
});

// 새 게시글 작성
app.post('/posts/write', (req, res) => {
    res.send('새글작성');
});

// 게시글 조회
app.get('posts/:id', (req, res) => {
    res.send(req.params.id + '인 글 조회');
});

// 특정 게시글 수정
app.put('posts/:id', (req, res) => {
    res.send(req.params.id + '인 글 수정');
});

// 특정 게시문 삭제
app.delete('posts/:id', (req, res) => {
    res.send(req.params.id + '인 글 삭제');
});

// 서버 실행
app.listen(app.get('port'), () => {
    console.log('서버가 돌돌돌');
});
