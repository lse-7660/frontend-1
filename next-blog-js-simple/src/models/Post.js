import mongoose from 'mongoose';

// 이미 모델이 있다면 그것을 사용, 없다면 새로 생성
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '제목을 입력해주세요.'], // 필수 입력
        trim: true, // 앞뒤 공백 제거
    },
    content: {
        type: String,
        required: [true, '내용을 입력해주세요.'],
    },
    createdAt: {
        type: Date,
        default: Date.now, // 기본값은 현재 시간
    },
});

// 모델이 이미 있다면 그것을 사용, 없다면 새로 생성
export default mongoose.models.Post || mongoose.model('Post', PostSchema);
