import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Post from '@/app/post/[id]/page';
import React from 'react';
import { renderWithTheme } from '@/utils/test';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useParams: () => ({ id: '1' }),
}));

jest.mock('uuid', () => ({
  v4: () => 'uuid-mock',
}));

jest.mock('@/utils/utils', () => ({
  getISODate: () => '2024-07-14T12:00:00Z',
  getCurrentDate: () => '2024.07.14 12:00',
  handleFormSubmit: (e: React.FormEvent) => e.preventDefault(),
}));

describe('Post 컴포넌트', () => {
  const samplePost = {
    id: '1',
    title: '테스트 게시글',
    content: '테스트 내용',
    createdAt: '2024-07-14T10:00:00Z',
    comments: [],
  };

  const originalConfirm = window.confirm;

  beforeEach(() => {
    window.localStorage.setItem('posts', JSON.stringify([samplePost]));
    window.confirm = jest.fn(() => true);
  });

  afterEach(() => {
    window.localStorage.clear();
    mockPush.mockClear();
    jest.clearAllMocks();
    window.confirm = originalConfirm;
  });

  test('게시글 데이터 렌더링', async () => {
    renderWithTheme(<Post />);
    expect(await screen.findByText('테스트 게시글')).toBeInTheDocument();
    expect(screen.getByText('테스트 내용')).toBeInTheDocument();
  });

  test('존재하지 않는 게시글일 경우 안내 문구 표시', () => {
    window.localStorage.setItem('posts', JSON.stringify([]));
    renderWithTheme(<Post />);
    expect(screen.getByText('존재하지 않는 게시글입니다.')).toBeInTheDocument();
  });

  test('게시글 삭제 시 확인창 및 삭제 후 메인 이동', () => {
    renderWithTheme(<Post />);
    const deleteButton = screen.getByRole('button', { name: '삭제' });
    fireEvent.click(deleteButton);

    expect(window.confirm).toHaveBeenCalledWith('게시물을 삭제하시겠습니까?');
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  test('댓글 추가 시 화면 렌더링', async () => {
    renderWithTheme(<Post />);
    const textarea = screen.getByPlaceholderText('댓글을 입력해주세요.');
    const submitButton = screen.getByRole('button', { name: '제출' });

    fireEvent.change(textarea, { target: { value: '새 댓글' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('새 댓글')).toBeInTheDocument();
    });
  });
});
