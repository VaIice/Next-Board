import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LATEST, OLDEST } from '@/constants/constants';
import ActionBar from '@/app/components/Home/ActionBar';
import { renderWithTheme } from '@/utils/test';

describe('ActionBar 컴포넌트', () => {
  const mockSetSortOrder = jest.fn();

  beforeEach(() => {
    mockSetSortOrder.mockClear();
  });

  test('오래된순 버튼 클릭 시 setSortOrder(OLDEST) 호출', () => {
    renderWithTheme(
      <ActionBar sortOrder={LATEST} setSortOrder={mockSetSortOrder} />
    );
    const oldestButton = screen.getByText('오래된순');
    fireEvent.click(oldestButton);
    expect(mockSetSortOrder).toHaveBeenCalledWith(OLDEST);
  });

  test('글쓰기 버튼 클릭 시 /write로 이동', () => {
    renderWithTheme(
      <ActionBar sortOrder={LATEST} setSortOrder={mockSetSortOrder} />
    );
    const writeButton = screen.getByRole('link', { name: /글쓰기/i });
    expect(writeButton).toHaveAttribute('href', '/write');
  });
});
