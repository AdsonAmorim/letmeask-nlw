import styled from 'styled-components';

export const Aside = styled.aside`
  background-color:var(--background-aside);
  color: var(--color-text-secondary);
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 12rem 8rem;

  img {
      max-width: 32rem;
  }

  h2 {
      font:700 3.2rem 'Poppins',sans-serif;
      line-height: 4.2rem;
      margin-top: 1.6rem;
  }
 
  p {
      font-size:2.4rem;
      margin-top: 1.6rem;
      line-height: 3.2rem;
  }

`;
