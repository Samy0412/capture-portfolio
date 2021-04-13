import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  background:#1b1b1b;
  font-family: 'Inter', sans-serif;

}

button{
  font-weight:bold;
  font-size:1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 2px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;

  &:hover{
    color:white;
    background:#23d997;
  }
}
h2{
  font-weight:lighter;
  font-size: 4rem;
}

h3{
  color:white;
}
p{
  padding: 3rem 0rem;
  color:#ccc;
  font-size: 1.4rem;
  line-height:150%;
}
h4 {
  font-weight:bold;
}
span {
  font-weight:bold;
  color:#23d997
}
a {
  font-size:1.1rem;
}
`;

export default GlobalStyle;
