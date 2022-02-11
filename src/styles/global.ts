import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 50%;
        --background:#f8f8f8;
        --color-text:#29292e;
        --color-text-secondary:#FFFFFF;
        --background-aside:#835AFD;
        --gray-medium:#A8A8B3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }

    body {
        background-color: var(--background);
        color: var(--color-text);
    }

    body, input, button, textarea {
        font: 400 1.6rem 'Roboto', sans-serif;
    }
`;
