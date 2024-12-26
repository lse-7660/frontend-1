import { posts } from '@/data/posts';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

//전체 글 조회 - GET
export async function GET() {
    // 성공
    try {
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: '게시글을 불러오는데 실패했습니다.' }, { status: 500 });
    }
}

// 새 글 쓰기 --POST
export async function POST(req) {
    try {
        // data = {title: '제목', content: '내용'}
        const data = await req.json();

        if (!data.title || !data.content) {
            return NextResponse.json({ error: '제목과 내용은 필수입니다' }, { status: 400 });
        }

        const newPost = {
            id: uuidv4(),
            title: data.title,
            content: data.content,
            createdAt: new Date().toLocaleDateString(),
        };

        // 서버의 데이터베이스(posts)에 데이터 추가
        posts.push(newPost);
        // 클라이언트에게 새 게시물 반환
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: '게시글 작성에 실패했습니다.' }, { status: 500 });
    }
}
