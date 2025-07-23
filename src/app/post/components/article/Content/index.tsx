'use client';
import { Container } from '@/app/post/components/article/Content/style';

export default function Content({
  content,
  handleDelete,
}: {
  content: string;
  handleDelete: () => void;
}) {
  return (
    <Container>
      <article>{content}</article>
      <button onClick={handleDelete}>삭제</button>
    </Container>
  );
}
