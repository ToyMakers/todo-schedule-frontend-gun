import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {margin:0px; padding:0px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box}
    html,body {
        height: 100%;
        font-size:16px;
        color:#202020;
        font-family: 'Noto Sans KR', sans-serif;
    }
    body {
        font-weight:400;
        color:#eee;
        background-color:#000;
        -webkit-text-size-adjust: none;
    }
    img { max-width:100%; max-height:100%;}
    a {text-decoration:none; color:inherit; }
    button{border:0;color:#eee;background:transparent; cursor:pointer;}
`;

export default GlobalStyle;
