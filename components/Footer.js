import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  p {
    width: 50%;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} RemoteJS</p>
      <p>
        <a
          href="https://twitter.com/remotejsevents"
          target="_blank"
          rel="noreferrer noopener"
        >
          @remotejsevents
        </a>
      </p>
    </StyledFooter>
  );
}
