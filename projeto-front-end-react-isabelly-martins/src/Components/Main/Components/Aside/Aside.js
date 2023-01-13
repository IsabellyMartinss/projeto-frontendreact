import React from "react";
import { EstiloAside } from "./styled";

export function Aside({ valorMinimo, setValorMinimo, valorMaximo, setValorMaximo, buscaNome, setBuscaNome, ordenaPreco, setOrdenaPreco }) {
    //Função feita para pegar o valor do input valorMinimo
    const getValorMinimo = (event) => {
        setValorMinimo(event.target.value)
    }
    console.log(valorMinimo)

    //Função feita para pegar o valor do input valorMaximo
    const getValorMaximo = (event) => {
        setValorMaximo(event.target.value)
    }
    console.log(valorMaximo)

    //Função feita para pegar o valor do input buscaNome    
    const getBuscaNome = (event) => {
        setBuscaNome(event.target.value)
    }
    console.log(buscaNome)

    //Função feita para guardar o valor do filtro de ordenação, através do target.value
    const getOrdenacao = (event) => {
        setOrdenaPreco(event.target.value)
    }

    return (
        <EstiloAside>
            <h1>Filtros</h1>
            <div>
                <p>Valor mínimo</p>
                <input type="number" value={valorMinimo} onChange={getValorMinimo} />
            </div>
            <div>
                <p>Valor máximo</p>
                <input type="number" value={valorMaximo} onChange={getValorMaximo} />
            </div>
            <div>
                <p>Busca por nome</p>
                <input type="text" value={buscaNome} onChange={getBuscaNome} />
            </div>
            <div>
                <p>Ordenar</p>
                <select value={ordenaPreco} onChange={getOrdenacao}>
                    <option></option>
                    <option>Preço Mínimo</option>
                    <option>Preço Máximo</option>
                </select>
            </div>
        </EstiloAside>
    )
};