import { PostType } from '@/types/post';
import { getISODate } from './utils';
import { v4 as uuidv4 } from 'uuid';
import { MS_PER_MINUTE } from '@/constants/constants';

export function initializePosts(): PostType[] {
  let posts = getPosts();

  if (!posts || posts.length === 0) {
    const dummyPosts: PostType[] = Array.from({ length: 20 }).map((_, i) => ({
      id: uuidv4(),
      title: `${i + 1}번째 더미데이터`,
      content: `Next.js 게시판의\n${i + 1}번째 더미데이터입니다.`,
      createdAt: getISODate((20 - i) * MS_PER_MINUTE),
      comments: [],
    }));

    savePosts(dummyPosts);
    posts = dummyPosts;
  }

  return posts;
}

export function getPosts(): PostType[] {
  const stored = localStorage.getItem('posts');
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function savePosts(posts: PostType[]) {
  localStorage.setItem('posts', JSON.stringify(posts));
}
