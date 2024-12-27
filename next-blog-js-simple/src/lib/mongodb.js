import mongoose from 'mongoose';

// MongoDB 연결 문자열을 환경변수에서 가져옴
const MONGODB_URI = process.env.MONGODB_URI;

// 연결 문자열이 없으면 에러 발생
if (!MONGODB_URI) {
    throw new Error('MONGODB_URI must be defined');
}

// 전역 변수에 mongoose 연결 정보를 저장
// 이렇게 하면 서버가 재시작되어도 연결이 유지됨
let cached = global.mongoose;

// 처음 실행될 때는 cached가 없으므로 초기화
if (!cached) {
    cached = global.mongoose = {
        conn: null, // 현재 연결 객체
        promise: null, // 연결 시도중인 Promise
    };
}

async function connectDB() {
    // 이미 연결되어 있다면 그 연결을 재사용
    if (cached.conn) {
        return cached.conn;
    }

    // 연결 시도중이 아니라면 새로운 연결 시도
    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // 연결되기 전에 명령어 버퍼링 비활성화
        };

        // MongoDB 연결 시도
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        // 연결이 완료될 때까지 대기
        cached.conn = await cached.promise;
    } catch (e) {
        // 연결 실패시 promise 초기화하고 에러 던지기
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connectDB;
