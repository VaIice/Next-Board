'use client';

import { useState } from 'react';
import {
  ListContainer,
  Pagination,
  PageButton,
  NavButton,
} from '@/app/components/Home/List/style';
import { PostType } from '@/types/post';
import Link from 'next/link';
import { GROUP_SIZE, ITEMS_PER_PAGE } from '@/constants/post';
import { getPageGroupRange, getVisiblePosts } from '@/utils/utils';

export default function List({ posts }: { posts: PostType[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const visiblePosts = getVisiblePosts(posts, page, ITEMS_PER_PAGE);
  const { startPage, endPage } = getPageGroupRange(
    page,
    GROUP_SIZE,
    totalPages
  );

  const handleFirst = () => setPage(1);
  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));
  const handleLast = () => setPage(totalPages);

  return (
    <>
      <ListContainer>
        {visiblePosts.map((post) => (
          <article key={post.id}>
            <Link href={`/post/${post.id}`}>
              <span>{post.title}</span>
            </Link>
          </article>
        ))}
      </ListContainer>

      {posts.length > 0 && (
        <Pagination>
          <NavButton onClick={handleFirst} hidden={page === 1}>
            <img src='/double_left.svg' alt='처음 페이지 아이콘' />
          </NavButton>
          <NavButton onClick={handlePrev} hidden={page === 1}>
            <img src='/left.svg' alt='이전 페이지 아이콘' />
          </NavButton>
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
            const pageNumber = startPage + i;
            return (
              <PageButton
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                active={page === pageNumber}
              >
                {pageNumber}
              </PageButton>
            );
          })}
          <NavButton onClick={handleNext} hidden={page === totalPages}>
            <img src='/right.svg' alt='다음 페이지 아이콘' />
          </NavButton>
          <NavButton onClick={handleLast} hidden={page === totalPages}>
            <img src='/double_right.svg' alt='마지막 페이지 아이콘' />
          </NavButton>
        </Pagination>
      )}
    </>
  );
}
