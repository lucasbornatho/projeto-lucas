import { useEffect, useState } from "react"
import Cabecalho from "../components/cabecalho";
import { Produto } from "../types/produtos";

function RequisicoesTypes() {
 
    // useEffect(() => {carregarProdutos()})


    const [produtos, SetProdutos] = useState<Produto[]>([]);
 
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
            <h1>PAGINA EXEMPLO DE PRODUTOS</h1>
            <br />
            <button onClick={carregarProdutos}>Carregar Produtos</button>
            <br />
            <br />
            <h2>Total de produtos: {produtos.length}</h2>
            <br />
            <br />
            <h2>Produtos: </h2>
            <h2>Lista de Produtos:</h2>
            <ul>
            {produtos.map((item, index) => (
                <li key={index}>
                    <img src={item.image} alt="image" style={{width: '150px'}}></img>
                    <br />
                    <h1>{item.title}</h1>
                    <br />
                    <p>{item.description}</p>
                    <br />
                    <p>${item.price}</p>
                <hr />
            </li>
        ))}
      </ul>
           
        </div>
    )
}
 
export default RequisicoesTypes