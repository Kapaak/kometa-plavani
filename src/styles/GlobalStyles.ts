import { createGlobalStyle } from "styled-components";

import { dimensions } from "~/utils";

import { styleReset } from "./style-reset";

export const GlobalStyles = createGlobalStyle`
    ${styleReset}

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
        --col1-hover: #e6b812;
        --col2-hover: #1A5FBF;
        --col3: #DCE9FA;
        --colw: #F8F8F8;
        --colr: #FF0000;
        --collg: #dcdcdc;
        --colg:#9A9A9A;
        --colb: #001427;
        --col-success:#34C759;

        --max-width:145rem;
        --side-padding:1.6rem;
        --vertical-padding:2rem;
        --gap:2.5rem;
        --header-height:7rem;
        --information-bar-height:0rem;

        --shadow:0 0 20px 0 rgba(10, 19, 10, 0.1);
        --small-border-rad:1.5rem;

        --ftext:1.6rem;
        --fnavlink:2rem;
        --fbutton:1.4rem;
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

    strong{
        font-weight: 500;
    }

    @media(${dimensions.tablet}){
        :root{
            --gap:4rem;
            --side-padding:3rem;
        }
    }

    @media(${dimensions.desktop}){
        :root{
            --ftext:1.6rem;
            --fmheadline:7.5rem;
            --fmsheadline:3.8rem;
            --fheadline:5.6rem;
        }
    }
    
`;
