import { screen } from '@testing-library/react';
import Title from '@/app/post/components/article/Title';
import { renderWithTheme } from '@/utils/test';

describe('Title 컴포넌트', () => {
  const title = '테스트 제목';
  const createdAt = '2024-07-13T12:34:00.000Z';

  test('제목 렌더링', () => {
    renderWithTheme(<Title title={title} createdAt={createdAt} />);
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });
});
