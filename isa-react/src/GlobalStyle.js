import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    background-image: url("https://bit.ly/3GlxIKx");
    background-position: top-right;
    color: white;
    background-repeat: no-repeat;
    font-family: 'Crete Round', serif, 'Arial Narrow Bold';
    list-style-type: none;
    background-size: 100%;
}
ul{
    background-image: none;
    background-repeat: no-repeat
}
li{
    background-image: none;
    background-repeat: no-repeat
}
button:active{
    background-color: lightyellow;
    text-align: center;
}
button{
    background-repeat: no-repeat;
    background-image: none;
    color: gray;
    background-color: lightgrey;
    text-align: center;
    border: none;
}
input{
    background-repeat: no-repeat;
    background-image: none;
    background-color: lightgrey;
    border: none;
    color: black;
    max-width: 5vw;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
p{
    background-repeat: no-repeat;
    background-image: none;
}
div{
    background-repeat: no-repeat;
    background-image: none;
    color: gray;
}
header{
    background-image: none;
    background-repeat: no-repeat;
}
h1{
    background-image: none;
    background-repeat: no-repeat;
}
img{
    width: 10vw;
    height: 20vh;
    border-radius: 100%;
}
select{
    text-align: center;
    background-color: gray;
}
`