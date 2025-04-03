import { ChangeEvent, useState } from "react"
import Cabecalho from "../components/cabecalho";
import { Usuario } from "../types/usuarios";
import FormPost from "../components/formpost";
import UsuarioItem from "../components/usuarioitem";

function RequisicoesPostRefact() {
 
    // useEffect(() => {carregarProdutos()})


    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const[loading, setLoading] = useState(false);
 
    const carregarUsuarios = async () => {
        setLoading(true)

        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
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

    const[addTitleText, setAddTitleText] = useState('');
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }

    const[addBodyText, setAddBodyText] = useState('');
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }

    const handleAddClick = async (sTitle: string, sBody:string) => {

        if (addTitleText && addBodyText) {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    title: sTitle,
                    body: sBody,
                    userId: 1}),                
                
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();

            console.log(json);

            if(json.id){
                alert('Post adicionado com sucesso')
                setUsuarios((usuarios) => [...usuarios, json]);
            } else {
                alert('Ocorreu alguma falha')
            }
        } else {
            alert('Preencha as informações.')
        }

    }

 
    return (
        <div>
            <Cabecalho />
            <br />
            <FormPost onAdd={handleAddClick} />
            <div>
            <button onClick={carregarUsuarios}>Carregar Usuários</button>
            <br />
            <br />
            <h2>Total de Usuários: {usuarios.length}</h2>
            <hr />
            <br />
            </div>
            <h2>Lista de Usuários:</h2>
            {usuarios.map((item) => (
                <UsuarioItem data={item} />
        ))}
        </div>
    )
}
 
export default RequisicoesPostRefact