import { screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';
import { initializePosts } from '@/utils/localStorage';
import { useRouter } from 'next/navigation';
import { renderWithTheme } from '@/utils/test';

jest.mock('@/utils/localStorage', () => ({
  initializePosts: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const dummyPosts = Array.from({ length: 15 }).map((_, i) => ({
  id: String(i + 1),
  title: `글 제목 ${i + 1}`,
  content: `내용 ${i + 1}`,
  createdAt: new Date(Date.now() - i * 1000 * 60).toISOString(),
  comments: [],
}));

describe('Home 페이지 통합 테스트', () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    (initializePosts as jest.Mock).mockReturnValue(dummyPosts);

    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  test('최신순 기본 정렬 확인', () => {
    renderWithTheme(<Home />);
    const firstPost = screen.getAllByRole('article')[0];
    expect(firstPost.textContent).toContain('글 제목 1');
  });

  test('오래된순 버튼 클릭 시 정렬 변경', () => {
    renderWithTheme(<Home />);
    const oldestButton = screen.getByRole('button', { name: '오래된순' });
    fireEvent.click(oldestButton);
    const firstPost = screen.getAllByRole('article')[0];
    expect(firstPost.textContent).toContain('글 제목 15');
  });

  test('검색 시 필터링 적용', () => {
    renderWithTheme(<Home />);
    const input = screen.getByPlaceholderText('검색어를 입력하세요');
    fireEvent.change(input, { target: { value: '글 제목 5' } });
    const form = screen.getByTestId('search-form');
    fireEvent.submit(form);

    expect(screen.getByText('글 제목 5')).toBeInTheDocument();
    expect(screen.queryByText('글 제목 1')).toBeNull();
  });

  test('다음 페이지 버튼 클릭 시 페이지 변경', () => {
    renderWithTheme(<Home />);
    const nextButton = screen
      .getByAltText('다음 페이지 아이콘')
      .closest('button');
    expect(nextButton).toBeInTheDocument();

    if (nextButton) {
      fireEvent.click(nextButton);
      const listItems = screen.getAllByRole('article');
      expect(listItems[0].textContent).toContain('글 제목 11');
    }
  });
});
