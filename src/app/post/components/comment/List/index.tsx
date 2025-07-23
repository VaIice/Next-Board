'use client';

import {
  ListButton,
  ListContainer,
} from '@/app/post/components/comment/List/style';
import { CommentType } from '@/types/comment';
import { getCurrentDate } from '@/utils/utils';

export default function List({ comment }: { comment: CommentType[] }) {
  return (
    <ListContainer>
      {comment.length === 0 ? (
        <p>댓글이 존재하지 않습니다.</p>
      ) : (
        comment.map((c) => (
          <li key={c.id}>
            <p>{c.text}</p>
            <time>{getCurrentDate(c.createdAt)}</time>
          </li>
        ))
      )}
      <ListButton href='/'>목록으로</ListButton>
    </ListContainer>
  );
}
