import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
  }

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
