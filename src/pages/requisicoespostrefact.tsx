import { ChangeEvent, useState } from "react"
import { Usuario } from "../types/usuarios";
import FormPost from "../components/formpost";
import UsuarioItem from "../components/usuarioitem";
import Cabecalho from "../components/cabecalho";
import { api } from "../api";

function RequisicoesPostRefact() {
 
    // useEffect(() => {carregarProdutos()})

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(false);
 
    const carregarUsuarios = async () => {
        setLoading(true)

        let json = await api.CarregarTodosUsuarios();

        const dataArray = Array.isArray(json) ? json : [json];
        setLoading(false);
        setUsuarios(dataArray);
    }

    // const [addTitleText, setAddTitleText] = useState('');
    // const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setAddTitleText(e.target.value)
    // }

    // const [addBodyText, setAddBodyText] = useState('');
    // const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setAddBodyText(e.target.value)
    // }

    const handleAddClick = async (sTitle: string, sBody: string) => {
        
        let json = await api.AdicionarUsuarios(sTitle, sBody, 1);

        if(json.id){
            alert('Post adicionado com sucesso')
            setUsuarios((usuarios) => [...usuarios, json]);
        } else {
            alert('Falha ao adicionar usuário')
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
                <UsuarioItem key={item.id} data={item} />
            ))}
        </div>
    )
}

export default RequisicoesPostRefact;
