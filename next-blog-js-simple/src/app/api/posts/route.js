import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';

// 전체 글 조회 - GET 요청 처리
export async function GET() {
    try {
        // 몽고 연결
        await connectDB();
        // 포스트 모델을 이용해 전체 글 조회
        // sort() 메서드를 이용해 최신 글이 위로 오도록 정렬
        const posts = await Post.find({}).sort({ createdAt: -1 });

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: '게시글을 불러오는데 실패했습니다.' }, { status: 500 });
    }
}

// 글 생성 - POST 요청 처리
export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();

        if (!data.title || !data.content) {
            return NextResponse.json(
                { error: '제목과 내용은 필수입니다.' },
                { status: 400 } // Bad Request
            );
        }

        const newPost = await Post.create(data);

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: '게시글을 생성하는데 실패했습니다.' }, { status: 500 });
    }
}
