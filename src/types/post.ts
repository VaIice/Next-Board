import { CommentType } from '@/types/comment';

export type SortOrder = 'latest' | 'oldest';

export type PostType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  comments: CommentType[];
};
