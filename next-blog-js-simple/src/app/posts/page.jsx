'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('/api/posts')
            .then((res) => {
                setPosts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading === true) {
        return <div>로딩 중...</div>;
    }
    if (!posts) return <div>게시글을 찾을 수 없습니다</div>;
    return (
        <div>
            <h2>블로그 목록</h2>
            <Link href="/posts/write" className="block w-14 h-14 rounded-full bg-gray-500">
                <span className="sr-only">글쓰기</span>
            </Link>
            {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`} className="container mx-auto my-5 block">
                    <h3 className="text-2xl mb-2">{post.title}</h3>
                    <p className="text-md mb-5">{post.content}</p>
                    <span className="text-sm text-gray-500">{post.createdAt}</span>
                </Link>
            ))}
        </div>
    );
};

export default PostsPage;
