import { useRef } from 'react';
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
  const inputEl = useRef(null);

  const subscribe = async e => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      console.error(error);
      alert('An error occured. Check your input. See console for more info.');

      return;
    }

    inputEl.current.value = '';
    alert('You are now subscribed!');
  };

  return (
    <Container>
      <h2>Get notified of new events.</h2>
      <p>New remote workshops, talks, and conferences coming soon.</p>
      <form onSubmit={subscribe}>
        <input
          type="email"
          placeholder="Your email..."
          aria-label="Email for newsletter"
          ref={inputEl}
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
