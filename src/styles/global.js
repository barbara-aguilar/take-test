import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap'); */
  body{
    font-family: sans-serif;
    background-color: #e1f2f1;
  }
  a:link{
text-decoration:none;
}
`;
