import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button[type="submit"] {
    cursor: pointer;
    background-color: var(--background-aside);
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.6rem;

    transition: opacity 200ms;

    img {
      margin-right:1rem;
    }

    &:hover {
      opacity: .9;
    }
  }

  button, input {
    outline: none;
    border:none;
    width: 32rem;
    height: 5rem;
    border-radius: .8rem;
  }

  input {
    border: 1px solid var(--gray-medium);
    padding: 1.6rem;
  }
`;
