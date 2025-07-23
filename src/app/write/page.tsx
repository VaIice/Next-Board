'use client';
import {
  Container,
  Content,
  Counter,
  Title,
  WriteButton,
} from '@/app/write/style';
import { CONTENT_MAX_LENGTH, TITLE_MAX_LENGTH } from '@/constants/post';
import { PostType } from '@/types/post';
import { getPosts, savePosts } from '@/utils/localStorage';
import { getISODate, handleFormSubmit } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= TITLE_MAX_LENGTH) {
      setTitle(e.target.value);
    }
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= CONTENT_MAX_LENGTH) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;

      setContent(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력하세요.');
      return;
    }

    const newPost: PostType = {
      id: uuidv4(),
      title,
      content,
      createdAt: getISODate(),
      comments: [],
    };

    const posts = getPosts();
    posts.push(newPost);
    savePosts(posts);

    router.push('/');
  };

  return (
    <Container onSubmit={handleFormSubmit}>
      <Title
        name='title'
        placeholder='제목을 입력하세요.'
        value={title}
        onChange={handleTitle}
      />
      <Content
        name='content'
        placeholder='내용을 입력하세요.'
        value={content}
        onChange={handleContent}
        spellCheck='false'
      />
      <div>
        <Counter over={content.length >= CONTENT_MAX_LENGTH}>
          {content.length} / {CONTENT_MAX_LENGTH}
        </Counter>
        <WriteButton type='button' onClick={handleSubmit}>
          작성
        </WriteButton>
      </div>
    </Container>
  );
}
