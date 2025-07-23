import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    background: #004276;
    color: white;
    padding: 9px 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.theme.typo.size.sm};

    > textarea {
      background: #004276;
      color: white;
      &::placeholder {
        color: ${(props) => props.theme.colors.silver};
      }
    }
  }

  > button {
    margin-top: 20px;
    text-align: center;
    height: 40px;
    padding: 0px 20px;
    color: black;
    border: 1px solid ${(props) => props.theme.colors.silver};
    margin-left: auto;
    font-size: ${(props) => props.theme.typo.size.md};
    border-radius: 8px;
    background: white;

    &:hover {
      background-color: rgb(238, 238, 238);
    }
  }
`;

export const Counter = styled.p<{ over?: boolean }>`
  margin-left: auto;
  color: ${({ over, theme }) =>
    over ? theme.colors.warning : theme.colors.silver};
  font-size: ${(props) => props.theme.typo.size.xs};
`;
