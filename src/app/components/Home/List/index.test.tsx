import { screen, fireEvent } from '@testing-library/react';
import List from '@/app/components/Home/List';
import { renderWithTheme } from '@/utils/test';

const postsMock = Array.from({ length: 25 }).map((_, i) => ({
  id: `post-${i + 1}`,
  title: `게시글 ${i + 1}`,
  content: '내용',
  createdAt: new Date().toISOString(),
  comments: [],
}));

describe('List 컴포넌트', () => {
  test('게시글 타이틀이 페이지별로 렌더링', () => {
    renderWithTheme(<List posts={postsMock} />);

    for (let i = 1; i <= 10; i++) {
      expect(screen.getByText(`게시글 ${i}`)).toBeInTheDocument();
    }
    expect(screen.queryByText('게시글 11')).not.toBeInTheDocument();
  });

  test('페이지 버튼 클릭 시 게시글 리스트 변경', () => {
    renderWithTheme(<List posts={postsMock} />);

    const page2Button = screen.getByRole('button', { name: '2' });
    fireEvent.click(page2Button);

    expect(screen.getByText('게시글 11')).toBeInTheDocument();
    expect(screen.queryByText('게시글 1')).not.toBeInTheDocument();
  });

  test('페이지 이동 버튼 활성/비활성 상태 테스트', () => {
    renderWithTheme(<List posts={postsMock} />);

    expect(
      screen.getByAltText('처음 페이지 아이콘').parentElement
    ).toHaveAttribute('hidden');
    expect(
      screen.getByAltText('이전 페이지 아이콘').parentElement
    ).toHaveAttribute('hidden');

    fireEvent.click(screen.getByRole('button', { name: '2' }));

    expect(
      screen.getByAltText('처음 페이지 아이콘').parentElement
    ).not.toHaveAttribute('hidden');
    expect(
      screen.getByAltText('이전 페이지 아이콘').parentElement
    ).not.toHaveAttribute('hidden');
  });
});
