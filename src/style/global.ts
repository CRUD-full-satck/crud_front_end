import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-book-1: #0588e2;
        --color-book-2: #000070;
        --color-book-3: 105,105,105;
        --color-book-4: 128,128,128;

        --color-font-1: #ffffff;
        --color-font-2: #000070;
        --color-font-3: #f10
    }


    * {
        margin:0;
        padding:0;
        outline:none;
        list-style:none;
        text-decoration:none;
        box-sizing:border-box;
        color: var(--color-font-2);
        background: transparent;
        font-family:  'Inter', sans-serif;
        border:none;
    }
    html, body, .wrap {
        height: 100vh;
        width: 100%; 
        background: #F0F8FF;

        .wrap {
            margin: 0 auto;
            text-align: center;
            position: relative;
        }
    }


`;

export default GlobalStyle;
