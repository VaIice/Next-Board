import { screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/app/components/Home/SearchBar';
import { renderWithTheme } from '@/utils/test';

describe('SearchBar 컴포넌트', () => {
  test('form 제출 시 onSearch 호출', () => {
    const onSearchMock = jest.fn();
    renderWithTheme(
      <SearchBar
        searchTerm=''
        setSearchTerm={() => {}}
        onSearch={onSearchMock}
      />
    );
    const form = screen.getByTestId('search-form');
    fireEvent.submit(form);
    expect(onSearchMock).toHaveBeenCalled();
  });
});
