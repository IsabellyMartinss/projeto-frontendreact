import { Aside } from "./Components/Aside/Aside";
import { Carrinho } from "./Components/Carrinho/Carrinho";
import { EstiloCard, EstiloMain, EstiloUl, SeparadorCard, EstiloButton, BotaoCarrinho } from "./styled";
import React, { useEffect, useState } from "react";
import discovery from "../../images/discovery.jpg"
import shenzhou from "../../images/shenzhou.jpg"
import yeager from "../../images/yeager.jpeg"
import glenn from "../../images/glenn.jpg"

export function Main({ nome, setNome, valorMinimo, setValorMinimo, valorMaximo, setValorMaximo, buscaNome, setBuscaNome, mudaTela, setMudaTela }) {

    const [produtos, setProdutos] = useState([
        {
            nave: "USS Discovery - Classe: CrossField NCC-1031",
            img: discovery,
            quantidade: 1,
            valor: 5000,
            lancamento: "Ano 2256",
            propulsao: "Motores: Impulso, Dobra e Esporos",
        },
        {
            nave: "USS Shenzhou - Classe: Walker NCC-1227",
            img: shenzhou,
            quantidade: 1,
            valor: 3500,
            lancamento: "Ano 2249",
            propulsao: "Motores: Impulso e Dobra",
        },
        {
            nave: "USS Glenn - Classe: CrossField NCC-1030",
            img: glenn,
            quantidade: 1,
            valor: 4500,
            lancamento: "Ano 2256",
            propulsao: "Motores: Impulso, Dobra e Esporos",
        },
        {
            nave: "USS Yeager - Classe: Yeager NCC-1437",
            img: yeager,
            lancamento: "Ano 2250",
            quantidade: 1,
            valor: 4000,
            propulsao: "Motores: Impulso, Ablative Generators e dobra",
        },
    ])
    const [total, setTotal] = useState(0)
    
    //estado que guarda o value do select
    const [ordenaPreco, setOrdenaPreco] = useState()
    console.log(ordenaPreco)

    //função criada para somar os valores dos produtos do carrinho através de um if ternário
    //reduce: método js usado para somar valores dentro de um array
    // const somaTotal = (item) => {
    //     item?.length > 0
    //         ? setTotal(
    //             item.reduce(
    //                 (x, y) => Number(x + y.valor * item.valor),
    //                 []
    //             )
    //         )
    //         : setTotal(0)
    // }
    const somaTotal = (array) => {
        // função criada para somar o valor total dos produtos dentro do carrinho
        array?.length > 0 // ternário para verificar se tem algum item no carrinho
            ? setTotal(
                array.reduce(
                    // Se tiver ele faz o reduce q é um metodo do JS para somar valores escolhidos de um array
                    (carro, item) => Number(carro + item.valor * item.quantidade),
                    []
                )
            )
            : setTotal(0); // Se não tiver o valor sera igual a zero
    };

    //função criada para guardar um item no localStorage e dentro da função foi criada uma variável que guarda e transforma tudo que estiver no carrinho em string, através da sintaxe JSON.stringify(item a ser guardado). O comando que guarda a variavel transformada em string é o localStorage.setItem("nome de onde será guardado", variavel que guarda o item transformado em string)
    const setItem = () => {
        const guardaItem = JSON.stringify(carrinho);
        localStorage.setItem("itensSalvos", guardaItem);
    };

    //função feita para buscar o item no localStorage sempre que atualizar a página
    const buscaItem = () => {
        const pegaItem = JSON.parse(localStorage.getItem("itensSalvos"));
        if (pegaItem?.length > 0) {
            return setCarrinho(pegaItem);
        }
    };


    const [carrinho, setCarrinho] = useState([])

    //Função criada para adicionar o item clicado ao carrinho, dentro da função o parâmetro(item) recebe o valor do item que está sendo clicado na tela.
    //Foi feita uma cópia do estado carrinho para armazenar e comparar temporariamente a informação do item procurado com o item clicado. 
    //Foi criada uma variável que guarda o valor da comparação do item clicado com o item que já existe na cópia do carrinho ou se false ou true, dentro da verificação se varificaCopiadoCarrinho for False será feito um .push para dentro copiaDoCarrinho com as propriedades que serão renderizadas no carrinho exemplo: nave, valor e quantidade. Se na verificaCopiadoCarrinho o resultado for true significa que dentro do carrinho já existe o item que foi clicado.
    //Quando o item clicado já existir no carrinho a verificação não entrará na criação e fará direto o else, que é a somatória do valor "quantidade" + 1 ou seja verificaCopiadoCarrinho.quantidade é igual a verificaCopiadoCarrinho.quantidade +1
    const adicionaCarrinho = (item) => {

        //Cópia do carrinho usando spread operator
        const copiaDoCarrinho = [...carrinho];

        //Variavel utilizando find para encontrar se existe dentro do carrinho um produto com o mesmo nome "O nome é a propriedade do objeto, mas podemos usar outras, como por exemplo Nave"
        const verificaCopiadoCarrinho = copiaDoCarrinho.find(
            (produto) => produto.nave === item.nave
        );

        //Condição para criar o item no carrinho caso a váriavel acima não encontre "e retorne False"
        if (!verificaCopiadoCarrinho) {
            copiaDoCarrinho.push({
                nave: item.nave,
                valor: item.valor,
                img: item.img,
                quantidade: item.quantidade,
            });
            setCarrinho(copiaDoCarrinho);
        }

        //Condição para alterar apenas a quantidade do objeto quando a Váriavel encontrar o objeto no carrinho.
        else {
            verificaCopiadoCarrinho.quantidade = verificaCopiadoCarrinho.quantidade + 1;
            setCarrinho(copiaDoCarrinho);
        }
    }

    // useEffect -> impede atualização/renderização automática da tela, a renderização fica atrelada a uma condição vazia.
    // getItem -> método do localStorage, que entra dentro do localStorage sempre que a página é atualizada e pega o item que estiverem lá. 
    // setItem -> cada vez que algo é alterado no carrinho a renderização é feita/atualizada 

    useEffect(() => {
        buscaItem();
    }, []);
    useEffect(() => {
        setItem();
        somaTotal(carrinho);
    }, [carrinho]);

    const trocaTela = () => {
        if (mudaTela === 0) {
            setMudaTela(1)
        } else {
            setMudaTela(0)
        }
    }

    if (mudaTela === 0) {
        return (
            <EstiloMain>
                <Aside
                    nome={nome}
                    setNome={setNome}
                    valorMinimo={valorMinimo}
                    setValorMinimo={setValorMinimo}
                    valorMaximo={valorMaximo}
                    setValorMaximo={setValorMaximo}
                    buscaNome={buscaNome}
                    setBuscaNome={setBuscaNome}
                    mudaTela={mudaTela}
                    setMudaTela={setMudaTela}
                    ordenaPreco={ordenaPreco}
                    setOrdenaPreco={setOrdenaPreco}
                />
                <div>
                    <div>
                        <SeparadorCard>
                            {/* Código entra dentro do estado produtos e filtra usando um parâmetro X se a propriedade X(aqui valor ou nave) de algum objeto dentro desse array de objetos é maior ou igual ao valor que está sendo inputado pelo usuário e que está guardado dentro do estado X(aqui valorMinino, maximo ou buscaNome). Após esse filtro ele retorna para .map o resultado a ser renderizado na tela (ou seja o filtro retorna para o map tudo o que for maior ou igual ao valor inputado pelo usuário) */}
                            {/* No filtro nome o código contém um toLowerCase para evitar diferenciações na comparação do filtro */}
                            {produtos
                                .sort((a, b)=> {
                                    //comparação entre os valores dos parâmetros a x b, o que for menor será colocado para trás, ficando na ordem de menor valor
                                    if(ordenaPreco==="Preço Mínimo"){
                                        if(a.valor < b.valor){
                                            return -1
                                        }
                                    }
                                    //comparação entre os valores dos parâmetros a x b, o que for maior será colocado para trás, ficando na ordem de menor valor
                                    if(ordenaPreco==="Preço Máximo"){
                                        if(a.valor > b.valor){
                                            return -1
                                        }
                                    }
                                })
                                .filter((produto) => {
                                    return produto.valor >= valorMinimo
                                })
                                .filter((produto) => {
                                    return produto.valor <= valorMaximo || valorMaximo === ""
                                })
                                .filter((produto) => {
                                    return produto.nave
                                        .toLowerCase()
                                        .includes(buscaNome.toLowerCase());
                                })
                                .map((produto, index) => {
                                    return (
                                        <EstiloCard key={index}>
                                                <EstiloUl>
                                                    <li>{produto.nave}</li>
                                                    <li>{produto.propulsao}</li>
                                                    <li>{produto.valor}</li>
                                                </EstiloUl>
                                                <img src={produto.img}/>
                                            <EstiloButton onClick={() => adicionaCarrinho(produto)}>Adicionar ao carrinho</EstiloButton>
                                        </EstiloCard>
                                    )
                                })}
                        </SeparadorCard>
                    </div>
                    <BotaoCarrinho onClick={trocaTela}>Carrinho</BotaoCarrinho>
                </div>
            </EstiloMain>
        )
    }
    if (mudaTela === 1) {
        return (
            <EstiloMain>
                <Aside
                    nome={nome}
                    setNome={setNome}
                    valorMinimo={valorMinimo}
                    setValorMinimo={setValorMinimo}
                    valorMaximo={valorMaximo}
                    setValorMaximo={setValorMaximo}
                    buscaNome={buscaNome}
                    setBuscaNome={setBuscaNome}
                    mudaTela={mudaTela}
                    setMudaTela={setMudaTela}
                    ordenaPreco={ordenaPreco}
                    setOrdenaPreco={setOrdenaPreco}
                />
                <div>
                    <div>
                        <SeparadorCard>
                            {/* Código entra dentro do estado produtos e filtra usando um parâmetro X se a propriedade X(aqui valor ou nave) de algum objeto dentro desse array de objetos é maior ou igual ao valor que está sendo inputado pelo usuário e que está guardado dentro do estado X(aqui valorMinino, maximo ou buscaNome). Após esse filtro ele retorna para .map o resultado a ser renderizado na tela (ou seja o filtro retorna para o map tudo o que for maior ou igual ao valor inputado pelo usuário) */}
                            {/* No filtro nome o código contém um toLowerCase para evitar diferenciações na comparação do filtro */}
                            {produtos
                                .sort((a, b)=> {
                                    //comparação entre os valores dos parâmetros a x b, o que for menor será colocado para trás, ficando na ordem de menor valor
                                    if(ordenaPreco==="Preço Mínimo"){
                                        if(a.valor < b.valor){
                                            return -1
                                        }
                                    }
                                    //comparação entre os valores dos parâmetros a x b, o que for maior será colocado para trás, ficando na ordem de menor valor
                                    if(ordenaPreco==="Preço Máximo"){
                                        if(a.valor > b.valor){
                                            return -1
                                        }
                                    }
                                })
                                .filter((produto) => {
                                    return produto.valor >= valorMinimo
                                })
                                .filter((produto) => {
                                    return produto.valor <= valorMaximo || valorMaximo === ""
                                })
                                .filter((produto) => {
                                    return produto.nave
                                        .toLowerCase()
                                        .includes(buscaNome.toLowerCase());
                                })
                                .map((produto, index) => {
                                    return (
                                        <EstiloCard key={index}>
                                                <EstiloUl>
                                                    <li>{produto.nave}</li>
                                                    <li>{produto.propulsao}</li>
                                                    <li>{produto.valor}</li>
                                                </EstiloUl>
                                                <img src={produto.img}/>
                                            <EstiloButton onClick={() => adicionaCarrinho(produto)}>Adicionar ao carrinho</EstiloButton>
                                        </EstiloCard>
                                    )
                                })}
                        </SeparadorCard>
                    </div>
                    <BotaoCarrinho><button onClick={trocaTela}>Carrinho</button></BotaoCarrinho>
                </div>
                <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} total={total} />
            </EstiloMain>
        )
    }
}
