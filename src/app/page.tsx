'use client';
import { useEffect, useState, useMemo } from 'react';
import List from '@/app/components/Home/List';
import { PostType, SortOrder } from '@/types/post';
import { initializePosts } from '@/utils/localStorage';
import SearchBar from '@/app/components/Home/SearchBar';
import ActionBar from '@/app/components/Home/ActionBar';
import { filterAndSortPosts } from '@/utils/utils';
import { LATEST } from '@/constants/constants';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(LATEST);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const posts = initializePosts();
    setPosts(posts);
  }, []);

  const filteredPosts = useMemo(() => {
    return filterAndSortPosts(posts, searchKeyword, sortOrder);
  }, [posts, searchKeyword, sortOrder]);

  const handleSearchClick = () => {
    setSearchKeyword(searchTerm);
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearchClick}
      />
      <ActionBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <List posts={filteredPosts} />
    </>
  );
}
