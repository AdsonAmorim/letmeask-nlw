import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 45% 55%;

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-family: 'Poppins',sans-serif;
      font-size: 2.4rem;
      margin-top: 5rem;
      margin-bottom: 2.4rem;
    }

    span {
      font-size: 1.4rem;
      margin-top: 1.6rem;
    }
  }

`;
