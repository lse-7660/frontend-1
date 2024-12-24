'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const WritePage = () => {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/posts', { title, content });

            if (res.status === 201) {
                alert('글쓰기가 완료되었습니다');
                router.push('/posts');
            } else {
                alert('글 작성에 실패했습니다.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('오류가 발생했습니다.');
        }
    };

    const btnStyle = 'px-5 py-2 rounded-lg';

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold sr-only">포스트 작성</h2>
            <form onSubmit={handleSubmit}>
                {/* 타이틀 */}
                <div>
                    <label htmlFor="tit" className="sr-only">
                        제목
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            return setTitle(e.target.value);
                        }}
                        name="tit"
                        id="tit"
                        placeholder="제목을 입력해주세요"
                        className="w-full text-3xl border-b-2"
                    />
                </div>

                {/* 본문 */}
                <div>
                    <label htmlFor="cont" className="sr-only">
                        내용
                    </label>
                    <textarea
                        name="cont"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        id="cent"
                        placeholder="내용입력"
                        className="w-full h-full"
                    ></textarea>
                </div>

                {/* 확인, 취소 */}
                <div className="flex gap-3">
                    <button className={`bg-gray-200 ${btnStyle}`}>취소</button>
                    <button type="submit" className={`bg-teal-500 ${btnStyle}`}>
                        등록
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WritePage;
