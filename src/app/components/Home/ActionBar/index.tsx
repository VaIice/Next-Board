'use client';
import {
  SortButton,
  Container,
  WriteButton,
} from '@/app/components/Home/ActionBar/style';
import { LATEST, OLDEST } from '@/constants/constants';
import { SortOrder } from '@/types/post';

type SortSelectType = {
  sortOrder: SortOrder;
  setSortOrder: (value: SortOrder) => void;
};

export default function ActionBar({ sortOrder, setSortOrder }: SortSelectType) {
  return (
    <Container>
      <SortButton
        type='button'
        active={sortOrder === LATEST}
        onClick={() => setSortOrder(LATEST)}
      >
        최신순
      </SortButton>
      <SortButton
        type='button'
        active={sortOrder === OLDEST}
        onClick={() => setSortOrder(OLDEST)}
      >
        오래된순
      </SortButton>
      <WriteButton href='/write'>
        <img src='/write.svg' alt='글쓰기 아이콘' />
        글쓰기
      </WriteButton>
    </Container>
  );
}
