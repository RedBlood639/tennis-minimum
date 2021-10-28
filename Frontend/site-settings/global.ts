import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* @font-face {
        font-family: 'Font1';
        src: url('../assests/fonts/font1.ttf');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    } */
    *{
        box-sizing: border-box;
    }
    html, body, #__next{
        height: 100%;
        width: 100%;
    }   
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle
