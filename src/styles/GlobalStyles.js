import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body {
        font-family:"Roboto",sans-serif;
        color:${({ theme }) => theme.text};
        background-color:${({ theme }) => theme.bg};
    }

    button {
        display:flex;
        justify-content:center;
        align-items:center;
        gap:0.5rem;
        cursor: pointer;
        color:inherit;
        background:inherit;
        border:none;
        outline:none;
        font-size:1rem;
    }

    a {
        text-decoration:none;
        color:inherit;
        background:inherit;
    }

    input {
        font-size:1rem;
    }

`;
