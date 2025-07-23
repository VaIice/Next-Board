import { screen, fireEvent } from '@testing-library/react';
import Write from '@/app/write/page';
import { useRouter } from 'next/navigation';
import { renderWithTheme } from '@/utils/test';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/utils/localStorage', () => ({
  getPosts: jest.fn(() => []),
  savePosts: jest.fn(),
}));

jest.mock('@/utils/utils', () => ({
  getISODate: jest.fn(() => '2025-07-14T00:00:00.000Z'),
  handleFormSubmit: jest.fn((e) => e.preventDefault()),
}));

describe('Write 컴포넌트', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  test('제목, 내용 입력 시 값 변경', () => {
    renderWithTheme(<Write />);

    const titleInput = screen.getByPlaceholderText('제목을 입력하세요.');
    const contentTextarea = screen.getByPlaceholderText('내용을 입력하세요.');

    fireEvent.change(titleInput, { target: { value: '새 제목' } });
    fireEvent.change(contentTextarea, { target: { value: '새 내용' } });

    expect(titleInput).toHaveValue('새 제목');
    expect(contentTextarea).toHaveValue('새 내용');
  });

  test('제목, 내용이 비어있으면 alert 호출', () => {
    renderWithTheme(<Write />);

    window.alert = jest.fn();

    const writeButton = screen.getByRole('button', { name: /작성/i });

    fireEvent.click(writeButton);
    expect(window.alert).toHaveBeenCalledWith('제목과 내용을 입력하세요.');
  });

  test('저장 후 페이지 이동', () => {
    const { getPosts, savePosts } = require('@/utils/localStorage');

    getPosts.mockReturnValue([]);

    renderWithTheme(<Write />);

    const titleInput = screen.getByPlaceholderText('제목을 입력하세요.');
    const contentTextarea = screen.getByPlaceholderText('내용을 입력하세요.');
    const writeButton = screen.getByRole('button', { name: /작성/i });

    fireEvent.change(titleInput, { target: { value: '제목' } });
    fireEvent.change(contentTextarea, { target: { value: '내용' } });

    fireEvent.click(writeButton);

    expect(getPosts).toHaveBeenCalled();
    expect(savePosts).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          title: '제목',
          content: '내용',
        }),
      ])
    );

    expect(mockPush).toHaveBeenCalledWith('/');
  });

  test('내용이 최대 길이를 넘지 않도록 조절', () => {
    renderWithTheme(<Write />);

    const contentTextarea = screen.getByPlaceholderText(
      '내용을 입력하세요.'
    ) as HTMLTextAreaElement;

    const longText = 'a'.repeat(300);

    fireEvent.change(contentTextarea, { target: { value: longText } });
    expect(contentTextarea.value.length).toBeLessThanOrEqual(300);
  });
});
