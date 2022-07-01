import styled from 'styled-components';

export const Layout = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  place-content: center center;
  height: 100vh;
  width: min(100vw - 2rem, 480px);
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
