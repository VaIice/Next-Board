import Link from 'next/link';
import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin-top: 10px;

  > p {
    font-size: ${(props) => props.theme.typo.size.sm};
  }

  > li {
    width: 100%;
    padding: 5px 0px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.colors.silver};

    > p {
      padding-top: 5px;
      white-space: pre-wrap;
      font-size: ${(props) => props.theme.typo.size.sm};
    }

    > time {
      margin-left: auto;
      font-size: ${(props) => props.theme.typo.size.xs};
      color: ${(props) => props.theme.colors.silver};
    }
  }
`;

export const ListButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-size: ${(props) => props.theme.typo.size.sm};
  color: ${(props) => props.theme.colors.silver};

  &:hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;
