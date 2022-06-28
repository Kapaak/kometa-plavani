import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --font1: 'Bebas Neue', cursive;
        --font2: 'Poppins', sans-serif;

        --col1: #FFCA0F;
        --col2: #2172DD;
        --col3: #DCE9FA;
        --colw: #F8F8F8;
        --colb: #001427;

        --max-width:120rem;
        --side-padding:4rem;
        --vertical-padding:2rem;
    }

    html{
        font-size: 62.5%;
        background-color: var(--colw);
    }

    body{
        font-family: var(--font2);
        font-size: 1.6rem;
        color:var(--colb);
    }

`;
