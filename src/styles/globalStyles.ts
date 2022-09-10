import { createGlobalStyle } from 'styled-components'

const theme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bgColor);
    color: white;
    --bgColor: #1d1e26;
    --bgContrast: #282a36;
    --headingSize: calc(32px + (48 - 32) * ((100vw - 300px) / (1440 - 300)));
    --buttonColor: #21222c;
    --buttonBg: #9580ff;
    --disabledBg: #6c7393;
  }
`

export default theme
