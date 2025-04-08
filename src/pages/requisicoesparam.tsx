import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import UsuarioItem from "../components/usuarioitem";
import { api } from "../api";
import { Usuario } from "../types/usuarios";
import FormPost from "../components/formpost";

function RequisicoesParam() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);
  const [paramBusca, setParamBusca] = useState("");

  const carregarUsuarios = async () => {
  
    if (paramBusca) {
      setLoading(true);
      let json = await api.CarregarUsuarioUnico(paramBusca);
      const dataArray = Array.isArray(json) ? json : [json]
      setLoading(false);
      setUsuarios(dataArray);

    } else {
      setLoading(true);
      let json = await api.CarregarTodosUsuarios();
      const dataArray = Array.isArray(json) ? json : [json]
      setLoading(false);
      setUsuarios(dataArray);
    }
}

  const handleAddClick = async (sTitle: string, sBody: string) => {
          
    let json = await api.AdicionarUsuarios(sTitle, sBody, 1);

    if(json.id){
        alert('Post adicionado com sucesso')
        setUsuarios((usuarios) => [...usuarios, json]);
    } else {
        alert('Falha ao adicionar usuário')
    }
      
  }

  const handleParamBuscaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParamBusca(event.target.value);
  };

  return (
    <div>
      <Cabecalho />
      <br />
      <FormPost onAdd={handleAddClick} />
      <br />
      {loading && <div>Carregando conteúdo...</div>}

      {!loading && (
        <>
          <h1>Pagina de Requisições</h1>
          <input type="text" value={paramBusca} onChange={handleParamBuscaChange} />
          <button onClick={carregarUsuarios}>Carregar Usuarios</button>
          <p>Total de produtos: {usuarios.length}</p>
          <hr />

          <div>
            {usuarios.map((item) => (
                <UsuarioItem key={item.id} data={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RequisicoesParam;
