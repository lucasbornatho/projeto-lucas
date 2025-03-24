import { useEffect, useState } from "react"
import Cabecalho from "../components/cabecalho";
import { Produto } from "../types/produtos";

function RequisicoesTypesAsync() {
 
    // useEffect(() => {carregarProdutos()})


    const [produtos, setProdutos] = useState<Produto[]>([]);

    const[loading, setLoading] = useState(false);
 
    const carregarProdutos =async () => {
        setLoading(true);
        try {
            let response = await fetch('https://fakestoreapi.com/products');
            let json = await response.json();

            const dataArray = Array.isArray(json) ? json : [json];
            setLoading(false);

            setProdutos(dataArray);
        } catch (erro) {
            setLoading(false);

            alert('Falha ao carregar os produtos. Tente novamente mais tarde.');
            console.error(erro)
        }
    }
 
    return (
        <div>
            <Cabecalho />
            <br />
            {loading &&
                <div> Carregando Conteúdo...</div>}
            <h1>PAGINA EXEMPLO DE PRODUTOS</h1>
            <br />
            {!loading &&
            <div>
            <br />
            <button onClick={carregarProdutos}>Carregar Produtos</button>
            <br />
            <br />
            <h2>Total de produtos: {produtos.length}</h2>
            </div>
            }
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
 
export default RequisicoesTypesAsync