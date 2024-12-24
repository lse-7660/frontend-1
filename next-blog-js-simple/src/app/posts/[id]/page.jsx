'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';

const PostDetailPage = ({ params }) => {
    const router = useRouter();
    const [post, setPost] = useState(null);
    // const [loading, setLoading] = useState(true);

    // params = Promise ({id:'1'})
    // use() 훅을 사용해서 unWrap 하기
    const resolvedParams = use(params);
    // resolvedParams = {id: '1'}

    useEffect(() => {
        axios
            .get(`/api/posts/${resolvedParams.id}`)
            .then((res) => {
                setPost(res.data);
                // setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
                alert('게시글을 불러올 수 없습니다.');
                router.push('/posts');
            });
    }, [resolvedParams, router]);

    // if (loading) {
    //     return <div>로딩 중...</div>;
    // }
    if (!post) {
        return <div>로딩 중...</div>;
    }
    // 와 미친 이거 너무 재밌다 post 데이터를 비동기적으로 가져오기 때문에 페이지가 로드될 때는 useState로 인해 post 값이 null이라서 null.title을 가져올수 없어서 오류가 난대 그래서 loading이나 !post로 post 데이터가 null일 때를 처리해야하는거임!
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.createdAt}</span>
            <div>
                <Link rel="stylesheet" href="/posts">
                    목록
                </Link>
            </div>
        </div>
    );
};

export default PostDetailPage;
