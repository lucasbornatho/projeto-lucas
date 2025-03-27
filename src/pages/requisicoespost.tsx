import { useState } from "react"
import Cabecalho from "../components/cabecalho";
import { Usuario } from "../types/usuarios";

function RequisicoesPost() {
 
    // useEffect(() => {carregarProdutos()})


    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const[loading, setLoading] = useState(false);
 
    const carregarUsuarios = async () => {
        setLoading(true)

        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            let json = await response.json();

            const dataArray = Array.isArray(json) ? json : [json];
            setLoading(false);

            setUsuarios(dataArray);
        } catch (erro) {
            setLoading(false);

            alert('Falha ao carregar os produtos. Tente novamente mais tarde.');
            console.error(erro)
        }
    }
 
    return (
        <div>
            <Cabecalho />
            {loading &&
                <div> Carregando Conteúdo...</div>}
            <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>
            <br />
            <h1>Adicionar Novo Post</h1>
            <input type='text' placeholder='Digite um Título'></input>
            <br />
            <textarea></textarea>
            <br />
            <button>Adicionar!</button>
            <br />
            <br />
            <br />
            <br />
            {!loading &&
            <div>
            <button onClick={carregarUsuarios}>Carregar Usuários</button>
            <br />
            <br />
            <h2>Total de Usuários: {usuarios.length}</h2>
            <hr />
            <br />
            </div>
            }
            <h2>Lista de Usuários:</h2>
            <ul>
            {usuarios.map((item, index) => (
                <li key={index}>
                    <h1>{item.id}</h1>
                    <br />
                    <p>{item.title}</p>
                    <br />
                <hr />
            </li>
        ))}
      </ul>
           
        </div>
    )
}
 
export default RequisicoesPost