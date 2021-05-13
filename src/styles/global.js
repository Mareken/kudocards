import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: local('Plus Jakarta Display Regular'), local('PlusJakartaDisplay-Regular'),
        url('../assets/fonts/PlusJakartaDisplay-Regular.woff2') format('woff2'),
        url('../assets/fonts/PlusJakartaDisplay-Regular.woff') format('woff'),
        url('../assets/fonts/PlusJakartaDisplay-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Plus Jakarta Display';
      src: local('Plus Jakarta Display Medium'), local('PlusJakartaDisplay-Medium'),
          url('../assets/fonts/PlusJakartaDisplay-Medium.woff2') format('woff2'),
          url('../assets/fonts/PlusJakartaDisplay-Medium.woff') format('woff'),
          url('../assets/fonts/PlusJakartaDisplay-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Plus Jakarta Display';
      src: local('Plus Jakarta Display Bold'), local('PlusJakartaDisplay-Bold'),
          url('../assets/fonts/PlusJakartaDisplay-Bold.woff2') format('woff2'),
          url('../assets/fonts/PlusJakartaDisplay-Bold.woff') format('woff'),
          url('../assets/fonts/PlusJakartaDisplay-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Plus Jakarta Display", Arial, Helvetica, sans-serif;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    height: 100%;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .noSelect {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    touch-action: none;
  }
`;

export default GlobalStyle;