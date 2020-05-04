import styled from 'styled-components';
import Inner from './Inner';

const StyledHero = styled.div`
  min-height: 18rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 24rem;
  }

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 3rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 4rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 5rem;
      text-align: center;
    }
  }

  a {
    display: block;
    width: 100%;
    max-width: 20rem;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    text-align: center;
    font-size: 1.125rem;
    font-weight: bold;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.25rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin: 2rem auto;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <Inner>
        <h1>Level up your JavaScript skills from home.</h1>
        <a href="https://ti.to/remotejs">See upcoming workshops</a>
      </Inner>
    </StyledHero>
  );
}
