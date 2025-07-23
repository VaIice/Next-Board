import { Container } from '@/app/post/components/article/Title/style';
import { getCurrentDate } from '@/utils/utils';

export default function Title({
  title,
  createdAt,
}: {
  title: string;
  createdAt: string;
}) {
  return (
    <Container>
      <h1>{title}</h1>
      <time dateTime={createdAt}>{getCurrentDate(createdAt)}</time>
    </Container>
  );
}
