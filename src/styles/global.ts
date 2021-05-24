import { createGlobalStyle } from 'styled-components'; 
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles =  createGlobalStyle`
  :root {
    --primary: #4CA8FD; 
    --secondary: #F6CCAD; 
    --dark: #827F7F; 
    --white: #fff; 
    --background: #F0F0F0 ;
    --gray: #ccc;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; 
  }

  body, input, textarea, button {
    font-family: 'Montserrat';
    font-weight: 400;
  }

  h1, h2, h3 ,h4 , h5 ,h5, strong {
      font-weight: 600;
  }

  button {
    cursor: pointer; 
  }
  
  [disabled] {
      opacity: 0.6; 
      cursor: not-allowed;
    }
  

`; 
