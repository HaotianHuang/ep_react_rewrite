import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        min-height: 100%;
        background-color: #fff;
        font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-size: 16px;
        line-height: 22px;
        color: #333;
    }

    * {
        box-sizing: border-box;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    div {
        display: block;
        text-transform: none;
    }

    a {
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
    }

    a: hover {
        outline: 0;
    }
`;