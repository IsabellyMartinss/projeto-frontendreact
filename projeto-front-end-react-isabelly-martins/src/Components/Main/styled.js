import styled from "styled-components";

export const EstiloMain = styled.main`
    background-color: none;
    background-image: none;
    height: 75vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
`
export const SeparadorCard = styled.div`
    background-image: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 1.4%;
    text-align: start;
`
export const EstiloCard = styled.div`
    display: flex;
    background-color: black;
    padding: 10px;
    font-size: 0.8rem;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2%;
    background-image: none;
    height: 25vh;
    width: 33vw;
    border: 0.3vh solid #fff;
    border-radius: 10vw; 
    box-shadow: 0 0 .1rem #fff,
              0 0 .1rem #fff,
              0 0 0.5rem #5271ff,
              0 0 0.8rem #5271ff,
              0 0 2.8rem #5271ff,
              inset 0 0 1.3rem #5271ff;
img{
    width: 10vw;
    height: 20vh;
    border-radius: 100%;
}              
`
export const EstiloUl = styled.ul`
    display: flex;
    font-size: 1.2em;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    flex-wrap: wrap;
`
export const EstiloButton = styled.button`
    border-radius: 10px;
    width: 12vw;
    height: 4vh;
    border: 2px solid rgba(12, 24, 71, 0.83);
    text-align: center;
`
export const BotaoCarrinho = styled.button`
    display: flex;
    position: fixed;
    right: 10px;
    top: 1vh;
    border-radius: 10px;
    width: 10vw;
    height: 4vh;
    border: 2px solid rgba(12, 24, 71, 0.83);
    color: gray;
    justify-content: center;
    align-items: center;
`