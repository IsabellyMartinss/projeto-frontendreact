import styled from "styled-components";

export const EstiloHeader = styled.header`
    width: 35vw;
    color: #FFFACD;
    height: 13vh;
    text-align: center;
    font-size: 2.7vh;
    font-family: 'Crete Round';
    font-display: swap;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #5271ff,
      0 0 82px #5271ff,
      0 0 92px #5271ff,
      0 0 102px #5271ff,
      0 0 151px #5271ff;
    @keyframes pulsate {
    100% {
  
        text-shadow:
        0 0 2px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #5271ff,
        0 0 80px #5271ff,
        0 0 90px #5271ff,
        0 0 100px #5271ff,
        0 0 150px #5271ff;
    
    }
    0% {
      text-shadow:
      0 0 4px #fff,
      0 0 10px #fff,
      0 0 18px #fff,
      0 0 38px #5271ff,
      0 0 73px #5271ff,
      0 0 80px #5271ff,
      0 0 94px #5271ff,
      0 0 140px #5271ff;
  }}
    h1{
    margin: 2vh;
    border: 0.4vh solid #fff;
    border-radius: 7vw;
    animation: pulsate 0.39s ease-in-out infinite alternate;    
    padding: 0.8em;
    box-shadow: 0 0 .1rem #fff,
              0 0 .2rem #fff,
              0 0 0.8rem #5271ff,
              0 0 0.8rem #5271ff,
              0 0 2.8rem #5271ff,
              inset 0 0 1.3rem #5271ff;
    }
`

