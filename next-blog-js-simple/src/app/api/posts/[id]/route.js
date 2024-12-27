import { posts } from '@/data/posts';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

// MongoDB의 ObjectId가 유효한지 검사하는 함수
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// 특정 게시글 조회 - GET
export async function GET(req, { params }) {
    try {
        await connectDB();

        const resolvedParams = await Promise.resolve(params);

        if (!isValidObjectId(resolvedParams.id)) {
            return NextResponse.json({ error: '유효하지 않은 게시글 ID입니다.' }, { status: 400 });
        }

        const post = await Post.findById(resolvedParams.id);
        console.log('Found post:', post); // 조회된 게시글 확인

        if (!post) {
            return NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error('Server error:', error); // 에러 로깅 추가
        return NextResponse.json({ error: '게시글을 불러오는데 실패했습니다.' }, { status: 500 });
    }
}

// 특정 게시글 수정 - PUT
export async function PUT(req, { params }) {
    try {
        // MongoDB 연결
        await connectDB();
        const resolvedParams = await Promise.resolve(params);

        // ID 유효성 검사
        if (!isValidObjectId(resolvedParams.id)) {
            return NextResponse.json({ error: '유효하지 않은 게시글 ID입니다.' }, { status: 400 });
        }

        const data = await req.json();

        // findByIdAndUpdate: ID로 게시글을 찾아 업데이트
        // $set: MongoDB 업데이트 연산자, new: true는 업데이트된 문서 반환
        const post = await Post.findByIdAndUpdate(
            resolvedParams.id,
            { $set: data },
            { new: true, runValidators: true }
        );

        if (!post) {
            return NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 });
        }

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: '게시글을 수정하는데 실패했습니다.' }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await connectDB();
        const resolvedParams = await Promise.resolve(params);

        // ID 유효성 검사
        if (!isValidObjectId(resolvedParams.id)) {
            return NextResponse.json({ error: '유효하지 않은 게시글 ID입니다.' }, { status: 400 });
        }

        // findByIdAndDelete: ID로 게시글을 찾아 삭제
        const post = await Post.findByIdAndDelete(resolvedParams.id);

        if (!post) {
            return NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 });
        }

        return NextResponse.json({ message: '게시글이 삭제되었습니다.' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: '게시글을 삭제하는데 실패했습니다.' }, { status: 500 });
    }
}
