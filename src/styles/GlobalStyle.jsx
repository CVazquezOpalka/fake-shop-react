import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
    a{
    color: inherit;
    text-decoration:none;
    }
`;
