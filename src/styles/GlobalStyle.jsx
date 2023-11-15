import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Fira Sans', sans-serif;
    }
    body{
        
        overflow-x:hidden;
        height: 100%;
    }
    h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    }
    ul{
    list-style: none;
    }
    a{
    color: inherit;
    text-decoration:none;
    }
`;
