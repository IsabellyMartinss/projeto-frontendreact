import styled from "styled-components";

export const EstiloHeader = styled.header`
    background-repeat: no-repeat;
    background-image: none;
    animation: pulsate 0.30s ease-in-out infinite alternate; 
    width: 30vw;
    height: 22vh;
    margin-top: 1vh;
    color: #FFFACD;
    text-align: center;
    font-size: 2.7vh;
    font-family: 'Crete Round', sans-serif;
    font-display: swap;
    position: sticky;
    left: 0.5px;
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
`

