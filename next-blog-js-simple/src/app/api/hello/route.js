import { NextResponse } from 'next/server';

const helloPosts = [
    {
        id: 1,
        title: 'hello',
    },
    {
        id: 2,
        title: 'somebody help me',
    },
];

// 서버 생성
export async function GET() {
    return NextResponse.json({ helloPosts });
}
