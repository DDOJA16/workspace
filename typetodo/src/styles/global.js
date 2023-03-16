import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
    *{
      box-sizing: border-box;
      margin: 0;

    }
    body {
      font-family: 'TTTtangsbudaejjigaeB';
    }
    button {
      border: none;
      background-color: white;
      font-family: 'TTTtangsbudaejjigaeB';
    }
    a {
      text-decoration: none;
      color: black;
    }
    input {
      border: none;
      outline: none;
      font-family: 'TTTtangsbudaejjigaeB';
      
      ::placeholder {
        border: none;
        font-family: 'TTTtangsbudaejjigaeB';
        color: gray;
      }
    }

    @font-face {
      font-family: 'TTTtangsbudaejjigaeB';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    }
    

`;

export default GlobalStyles;
