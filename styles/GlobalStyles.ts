import { createGlobalStyle } from "styled-components";

import { dimensions } from "@/components/utils/breakpoints";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color:inherit;
    }

    :root{
        --font1: 'Bebas Neue', cursive;
        --font2: 'Poppins', sans-serif;

        --col1: #FFCA0F;
        --col2: #2172DD;
        --col3: #DCE9FA;
        --colw: #F8F8F8;
        --colb: #001427;

        --max-width:130rem;
        --side-padding:3rem;
        --vertical-padding:2rem;
        --gap:2.5rem;
        --header-height:7rem;

        --ftext:1.6rem;
        --fnavlink:2rem;
        --fbutton:1.7rem;
        --fmheadline:4.5rem;
        --fmsheadline:2.5rem;
        --fheadline:4rem;
        --fsheadline:2.5rem;
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

    @media(${dimensions.tablet}){
        :root{
            --side-padding:8rem;
            --gap:4rem;
        }
    }

    @media(${dimensions.desktop}){
        :root{
            --ftext:1.8rem;
            --fmheadline:7.5rem;
            --fmsheadline:3.8rem;
            --fheadline:5.6rem;
        }
    }

`;
