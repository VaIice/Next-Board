import { screen } from '@testing-library/react';
import List from '@/app/post/components/comment/List';
import { CommentType } from '@/types/comment';
import { renderWithTheme } from '@/utils/test';

jest.mock('@/utils/utils', () => ({
  ...jest.requireActual('@/utils/utils'),
  getCurrentDate: jest.fn(() => '2024.07.14 10:00'),
}));

describe('List 컴포넌트', () => {
  test('댓글이 없는 경우 안내 문구 출력', () => {
    renderWithTheme(<List comment={[]} />);
    expect(screen.getByText('댓글이 존재하지 않습니다.')).toBeInTheDocument();
  });

  test('댓글이 있는 경우 목록 렌더링', () => {
    const comments: CommentType[] = [
      {
        id: '1',
        text: '첫 번째 댓글',
        createdAt: '2024-07-14T01:00:00.000Z',
      },
      {
        id: '2',
        text: '두 번째 댓글',
        createdAt: '2024-07-14T02:00:00.000Z',
      },
    ];

    renderWithTheme(<List comment={comments} />);

    expect(screen.getByText('첫 번째 댓글')).toBeInTheDocument();
    expect(screen.getByText('두 번째 댓글')).toBeInTheDocument();

    expect(screen.getAllByText('2024.07.14 10:00')).toHaveLength(2);
  });
});
