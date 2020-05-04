import styled from 'styled-components';

const Inner = styled.div`
  padding: 2rem 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 1.5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 2rem;
  }
`;

export default Inner;
