import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 90px;
`;

export const LogoLink = styled.a`
  font-size: ${(props) => props.theme.typo.size.lg};
  font-weight: ${(props) => props.theme.typo.weight.bold};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typo.size.md};
  }
`;
