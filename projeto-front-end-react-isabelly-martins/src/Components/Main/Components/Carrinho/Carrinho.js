import React from "react";
import { EstiloCarrinho } from "./styled";

export function Carrinho({ carrinho, setCarrinho, total }) {
    // função criada para excluir o item clicado do carrinho. Foi feita para uma cópia do carrinho original para comparação através do .find, na função verificaExclusao é verificado se o valor do parâmetro produto.propriedade(nave) é igual ao valor do parâmetro item.nave da função excluiItem, a partir disso foi criada uma verificação condicional onde se verificaExclusao.quantidade é maior que 1, se true será diminuído 1 da propriedade quantidade. E caso a verificação da propriedade.quantida seja false (igual ou menos que 1) ele cai no else e é executado um .filter, onde há a comparação entre o parâmetro produto(parâmetro do filter) com o parâmetro da função removeItem que é item, caso produto.quantidade seja igual ou menor que 1 o filter fará a renderização de todos os itens que forem diferentes do comparado (comparação: produto x !== produto y)
    const excluiItem = (item) => {
        const copiaDoCarrinho = [...carrinho]
        const verificaExclusao = copiaDoCarrinho.find((produto) => produto.nave === item.nave)

        if (verificaExclusao.quantidade > 1) {
            verificaExclusao.quantidade = verificaExclusao.quantidade - 1
            setCarrinho(copiaDoCarrinho)
        } else {
            const removeItem = carrinho.filter((produto) => produto.nave !== item.nave)
            setCarrinho(removeItem)
        }
    }
    console.log(carrinho)
    return (
        <EstiloCarrinho>
            {carrinho.map((item, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <img src={item.img}/>
                            <li>{item.nave}</li>
                            <li>{item.valor}</li>
                            <li>{item.quantidade}</li>
                        </ul>
                        <button onClick={() => excluiItem(item)}>Excluir item</button>
                    </div>
                )
            })}
            <h2>Total:{total}</h2>
        </EstiloCarrinho>
    )
};
