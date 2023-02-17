import { Main } from "./Components/Main/Main";
import { GlobalStyle } from "./GlobalStyle";
import React, { useState } from "react";
import { Header } from "./Components/Header/Header";

function App() {
  const [nome, setVerificaNome] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [buscaNome, setBuscaNome] = useState("")
  const [mudaTela, setMudaTela] = useState(0)

  return (
    <div className="App">
      <GlobalStyle />
      <Header/>
      <Main
        nome={nome}
        setVerificaNome={setVerificaNome}
        valorMinimo={valorMinimo}
        setValorMinimo={setValorMinimo}
        valorMaximo={valorMaximo}
        setValorMaximo={setValorMaximo}
        buscaNome={buscaNome}
        setBuscaNome={setBuscaNome}
        mudaTela={mudaTela}
        setMudaTela={setMudaTela}
      />
    </div>
  );
}

export default App;
