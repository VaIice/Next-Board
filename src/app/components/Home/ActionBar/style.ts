import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SortButton = styled.button<{ active?: boolean }>`
  padding: 5px 8px;
  background: white;
  color: black;
  border-radius: 15px;
  font-size: ${(props) => props.theme.typo.size.sm};
  color: ${({ active }) => (active ? '#1E97f3' : 'black')};
  margin-right: 8px;
  &:hover {
    background-color: rgb(238, 238, 238);
  }
`;

export const WriteButton = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: ${(props) => props.theme.typo.size.md};

  > img {
    margin-top: 3px;
    margin-right: 10px;
    height: 20px;
  }
`;
