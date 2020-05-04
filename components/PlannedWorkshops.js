import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 28rem);
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.125rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1.5rem;

    h2 {
      font-size: 3rem;
    }

    p,
    ul {
      font-size: 1.5rem;
    }
  }
`;

export default function PlannedWorkshops() {
  return (
    <Container>
      <h2>We're planning more workshops by the day.</h2>
      <p>Dates, instructors, and other details will be announced soon.</p>
      <h3>Planned Workshops:</h3>
      <ul>
        <li>Advanced Vue Patterns</li>
        <li>CSS Deep Dive</li>
        <li>Intro to React Native</li>
        <li>Intro to TensorFlow.js</li>
        <li>JAMstack in Action</li>
        <li>Next.js Mastery</li>
        <li>Practical TypeScript</li>
        <li>Web A11y Deep Dive</li>
      </ul>
    </Container>
  );
}
