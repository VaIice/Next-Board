'use client';

import { Container } from '@/app/components/Home/SearchBar/style';
import { handleFormSubmit } from '@/utils/utils';

type SearchBarType = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  onSearch,
}: SearchBarType) {
  const handleSubmit = (e: React.FormEvent) => {
    handleFormSubmit(e);
    onSearch();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} data-testid='search-form'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='검색어를 입력하세요'
        />
        <button type='submit'>
          <img src='/search.svg' alt='검색 아이콘' />
        </button>
      </form>
    </Container>
  );
}
