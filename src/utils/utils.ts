import { PostType } from '@/types/post';

export function generateDots(count: number): {
  top: string;
  left: string;
  size: string;
  duration: string;
}[] {
  return Array.from({ length: count }, () => ({
    top: `${(Math.random() * 100).toFixed(2)}%`,
    left: `${(Math.random() * 100).toFixed(2)}%`,
    size: `${(1 + Math.random() * 2).toFixed(2)}px`,
    duration: `${(30 + Math.random() * 30).toFixed(2)}s`,
  }));
}

export function getVisiblePosts(
  posts: PostType[],
  currentPage: number,
  itemsPerPage: number
): PostType[] {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  return posts.slice(startIndex, endIndex);
}

export function getPageGroupRange(
  currentPage: number,
  groupSize: number,
  totalPages: number
): { startPage: number; endPage: number } {
  const startPage = Math.floor((currentPage - 1) / groupSize) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);
  return { startPage, endPage };
}

export function getCurrentDate(isoString: string) {
  const date = new Date(isoString);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');

  return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
}

export function getISODate(offsetMs = 0) {
  return new Date(Date.now() - offsetMs).toISOString();
}

export function handleFormSubmit(e: React.FormEvent) {
  e.preventDefault();
}

export function filterAndSortPosts(
  posts: PostType[],
  keyword: string,
  sortOrder: 'latest' | 'oldest'
): PostType[] {
  const lowerSearch = keyword.toLowerCase();

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(lowerSearch)
  );

  const sorted = filtered.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return sortOrder === 'oldest' ? dateA - dateB : dateB - dateA;
  });

  return sorted;
}
