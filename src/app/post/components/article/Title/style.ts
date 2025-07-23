import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    font-size: ${(props) => props.theme.typo.size.md};
    font-weight: ${(props) => props.theme.typo.weight.bold};
    margin-bottom: 3px;
  }

  > time {
    font-size: ${(props) => props.theme.typo.size.xs};
    color: ${(props) => props.theme.colors.silver};
  }
`;
