'use client';

import { formatDate } from '@/utils/formatDate';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';

const PostDetailPage = ({ params }) => {
    const router = useRouter();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    // params = Promise ({ id: '1' })
    // use() 훅을 사용하여 unWrap 하기
    // resolvedParams = { id: '1' }
    const resolvedParams = use(params);

    useEffect(() => {
        // 게시글 불러오기
        axios
            .get(`/api/posts/${resolvedParams.id}`)
            .then((res) => {
                setPost(res.data);
                setLoading(false);
            })
            .catch((error) => {
                // console.error(error)
                setLoading(false);
            });
    }, [resolvedParams.id, router]);

    const handleDelete = async () => {
        if (!confirm('정말 삭제하시겠습니까?')) return;

        try {
            const res = await axios.delete(`/api/posts/${resolvedParams.id}`);
            if (res.status === 200) {
                router.push('/posts');
            } else {
                alert('삭제에 실패했습니다.');
            }
        } catch (error) {
            alert('오류가 발생했습니다.');
        }
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }
    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    return (
        <div className="container mx-auto py-10 flex flex-col gap-4 min-h-screen">
            <div className="flex justify-between items-end font-black border-b border-gray-300 pb-5">
                <h2 className="text-4xl">{post.title}</h2>
                <span className="text-gray-400 block text-right">{formatDate(post.createdAt)}</span>
            </div>
            <p className="text-xl flex-1">{post.content}</p>
            <div className="flex border-t border-gray-300 pt-5">
                <Link href={'/posts'} className="bg-gray-200 p-3">
                    목록
                </Link>
                <Link href={`/posts/${resolvedParams.id}/edit`} className="ml-auto bg-gray-200 p-3">
                    수정
                </Link>
                <button onClick={handleDelete} className="ml-3 bg-gray-200 p-3">
                    삭제
                </button>
            </div>
        </div>
    );
};

export default PostDetailPage;
