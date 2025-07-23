import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  font-size: ${(props) => props.theme.typo.size.md};
  border-radius: 25px;
  background: #004276;
  color: white;

  > form {
    width: 100%;
    display: flex;

    > input {
      width: 100%;
      height: 50px;
      font-size: ${(props) => props.theme.typo.size.md};
      border-radius: 8px;
      background: #004276;
      color: white;
      margin-right: 10px;

      &::placeholder {
        color: ${(props) => props.theme.colors.silver};
      }
    }

    > button {
      > img {
        margin-top: 4px;
        height: 25px;
      }
    }
  }
`;
