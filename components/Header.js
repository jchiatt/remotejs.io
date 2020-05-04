import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  img {
    width: 100%;
    max-width: 12rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="RemoteJS Logo" />
    </StyledHeader>
  );
}
