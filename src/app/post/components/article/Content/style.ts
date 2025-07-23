import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${(props) => props.theme.typo.size.sm};
  margin-top: 10px;
  min-height: 150px;

  > article {
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: keep-all;
  }

  > button {
    margin-top: 10px;
    margin-left: auto;
    font-size: ${(props) => props.theme.typo.size.xs};
    color: ${(props) => props.theme.colors.silver};

    &:hover {
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;
