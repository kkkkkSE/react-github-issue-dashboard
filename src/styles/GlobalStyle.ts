import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
      
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
      
  html {
    font-size: 62.5%;
  }
      
  body {
    font-family: 'Noto Sans KR';
    color: ${(props) => props.theme.colors.black};
    line-height: 1.5;
    ${(props) => props.theme.texts.regular.medium};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    outline: none;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
