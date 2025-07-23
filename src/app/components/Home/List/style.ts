import styled from 'styled-components';

export const ListContainer = styled.main`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  > article > a {
    width: 100%;
    height: 60px;
    padding: 4px 15px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.highlight};
    font-size: ${(props) => props.theme.typo.size.md};
    font-weight: ${(props) => props.theme.typo.weight.medium};
    border-bottom: 1px solid ${(props) => props.theme.colors.silver};

    > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  > article:last-child > a {
    border-bottom: none;
  }
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  > p {
    margin: 0px 10px;
    font-size: ${(props) => props.theme.typo.size.sm};
  }
`;

export const PageButton = styled.button<{ active?: boolean }>`
  font-size: ${({ theme }) => theme.typo.size.md};
  padding: 6px 10px;
  border-radius: 4px;
  color: ${({ active, theme }) => (active ? theme.colors.highlight : 'white')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const NavButton = styled.button<{ hidden?: boolean }>`
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  font-size: ${(props) => props.theme.typo.size.sm};
  padding: 6px 4px;

  > img {
    margin-top: 6px;
    height: 20px;
  }
`;
