'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { PostType } from '@/types/post';
import { CommentType } from '@/types/comment';
import { getPosts, savePosts } from '@/utils/localStorage';
import { getISODate } from '@/utils/utils';
import Title from '@/app/post/components/article/Title';
import Content from '@/app/post/components/article/Content';
import Form from '@/app/post/components/comment/Form';
import List from '@/app/post/components/comment/List';

export default function Post() {
  const { id } = useParams();
  const router = useRouter();

  const [post, setPost] = useState<PostType | undefined | null>(undefined);

  useEffect(() => {
    const stored = localStorage.getItem('posts');
    if (stored) {
      const parsed: PostType[] = JSON.parse(stored);
      const found = parsed.find((p) => p.id === id);
      setPost(found || null);
    }
  }, [id]);

  const handleDelete = () => {
    if (!id) return;

    const confirmed = window.confirm('게시물을 삭제하시겠습니까?');
    if (!confirmed) return;

    const posts = getPosts();
    const filtered = posts.filter((p) => p.id !== id);
    savePosts(filtered);
    router.push('/');
  };

  const handleAddComment = (text: string) => {
    if (!post) return;
    const newComment: CommentType = {
      id: uuidv4(),
      text,
      createdAt: getISODate(),
    };

    const posts = getPosts();
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, comments: [...p.comments, newComment] } : p
    );
    savePosts(updatedPosts);
    setPost((prev) => ({
      ...prev!,
      comments: [...prev!.comments, newComment],
    }));
  };

  if (post === undefined) return;
  if (post === null) return <p>존재하지 않는 게시글입니다.</p>;

  return (
    <>
      <Title title={post.title} createdAt={post.createdAt} />
      <Content content={post.content} handleDelete={handleDelete} />
      <Form onAddComment={handleAddComment} />
      <List comment={post.comments} />
    </>
  );
}
