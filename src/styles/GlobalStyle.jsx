import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        font-family:sans-serif;
        overflow-x:hidden;
        height: 100%;
    }
    h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    }
    a{
    color: inherit;
    text-decoration:none;
    }
`;
