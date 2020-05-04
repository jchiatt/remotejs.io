import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 28rem);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.colors.black};

  h2 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.125rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 10rem;
    max-width: 20rem;
    width: 100%;
    align-items: center;
  }

  input {
    width: 100%;
    border: 4px solid ${({ theme }) => theme.colors.secondary};
    padding: 1rem 1.5rem;
    font-size: 1.125rem;
    font-weight: bold;
  }

  button {
    width: 100%;
    border: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.25rem;
    padding: 1rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.125rem;
    font-weight: bold;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1.5rem;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export default function NewsletterSignup() {
  return (
    <Container>
      <h2>Get notified of new events.</h2>
      <p>New remote workshops, talks, and conferences coming soon.</p>
      <form>
        <input type="email" placeholder="Your email" />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
