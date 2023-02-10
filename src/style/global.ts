import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-book-1: 54,54,54;
        --color-book-2: 79,79,79;
        --color-book-3: 105,105,105;
        --color-book-4: 128,128,128;
    }


    * {
        margin:0;
        padding:0;
        outline:none;
        list-style:none;
        text-decoration:none;
        box-sizing:border-box;
        color:#000;
        background: transparent;
        font-family:  'Inter', sans-serif;
        border:none;
    }
    html, body, .wrap {
        height: 100vh;
        width: 100%; 

        .wrap {
            margin: 0 auto;
            text-align: center;
            position: relative;
        }
    }


`;

export default GlobalStyle;
