import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.input`
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  font-size: ${(props) => props.theme.typo.size.md};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.silver};
  background: transparent;
  color: white;

  &::placeholder {
    color: ${(props) => props.theme.colors.silver};
  }
`;

export const Content = styled.textarea`
  margin-top: 15px;
  min-height: 300px;
  height: auto;
  width: 100%;
  padding: 8px 20px;
  font-size: ${(props) => props.theme.typo.size.md};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.silver};
  background: transparent;
  color: white;

  &::placeholder {
    color: ${(props) => props.theme.colors.silver};
  }
`;

export const Counter = styled.p<{ over?: boolean }>`
  margin-top: 5px;
  color: ${({ over, theme }) =>
    over ? theme.colors.warning : theme.colors.gray};
  font-size: ${(props) => props.theme.typo.size.xs};
`;

export const WriteButton = styled.button`
  margin-left: auto;
  margin-top: 20px;
  height: 40px;
  padding: 0px 20px;
  font-size: ${(props) => props.theme.typo.size.md};
  border-radius: 8px;
  background: white;
  color: black;

  &:hover {
    background-color: rgb(238, 238, 238);
  }
`;
