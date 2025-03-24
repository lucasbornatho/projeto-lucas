import { useState } from "react"
import Cabecalho from "../components/cabecalho";
 
function Requisicoes() {
 
    const [produtos, SetProdutos] = useState([]);
 
    const carregarProdutos = () => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
 
        .then((json) => {
            SetProdutos(json);
        })
    }
 
    return (
        <div>
            <Cabecalho />
            <h1>QUANTIDADE DE PRODUTOS</h1>
            <br />
            <button onClick={carregarProdutos}>Carregar Produtos</button>
            <br />
            <br />
            <h2>Total de produtos: {produtos.length}</h2>
            <br />
        </div>
    )
}
 
export default Requisicoes