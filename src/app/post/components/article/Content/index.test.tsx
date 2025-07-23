import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@/utils/test';
import Content from '@/app/post/components/article/Content';

describe('Content 컴포넌트', () => {
  const mockHandleDelete = jest.fn();

  beforeEach(() => {
    mockHandleDelete.mockClear();
  });

  test('내용 화면 출력', () => {
    renderWithTheme(
      <Content content='테스트 내용입니다' handleDelete={mockHandleDelete} />
    );
    expect(screen.getByText('테스트 내용입니다')).toBeInTheDocument();
  });

  test('삭제 버튼 클릭 시 handleDelete 호출', () => {
    renderWithTheme(
      <Content content='삭제 이벤트' handleDelete={mockHandleDelete} />
    );
    const deleteButton = screen.getByRole('button', { name: /삭제/i });
    fireEvent.click(deleteButton);
    expect(mockHandleDelete).toHaveBeenCalled();
  });
});
