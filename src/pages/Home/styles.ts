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
      color: var(--gray-medium);

      div.enterRoom {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        margin:3.2rem 0;

        &::after, &::before {
            content: '';
            background-color: var(--gray-medium);
            height: 1px;
            width: 7.6rem;
            margin: 0 1.6rem;
        }
      }

      button {
        width: 32rem;
        margin-top: 5.6rem;
      }
    }
`;

