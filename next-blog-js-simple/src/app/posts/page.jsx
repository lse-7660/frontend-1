'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { formatDate } from '@/utils/formatDate';

const PostsPage = () => {
    // 게시글 상태 추가
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 마운트 시
    useEffect(() => {
        // 게시글 목록 불러오기
        // axios.get(api주소).then(() => {}).catch(() => {})
        axios
            .get('/api/posts')
            .then((res) => {
                setPosts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // 로딩 중
    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center">
                <h2 className="text-6xl font-black">블로그 목록</h2>
                <Link href={'/posts/write'} className="p-5 bg-purple-400 text-white rounded-lg">
                    글쓰기
                </Link>
            </div>
            <div className="divide-y divide-gray-300">
                {posts.map((post) => (
                    <Link key={post._id} href={`/posts/${post._id}`} className="flex flex-col gap-4 my-5 pt-10 py-5">
                        <h3 className="text-4xl font-semibold">{post.title}</h3>
                        <p className="text-xl">{post.content}</p>
                        <span className="text-gray-400">{formatDate(post.createdAt)}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PostsPage;
