import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  padding: 2rem 2rem;
  
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

button{
  border: none;
  cursor: pointer;
  font-family:inherit;
}
`;

export default GlobalStyles;
