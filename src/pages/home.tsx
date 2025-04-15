import Rodape from "../components/rodape"
import Cabecalho from "../components/cabecalho"
import { useContext } from "react"
import { UsuarioLogadoContext } from "../contexts/contextAuth"

function Home () {

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    function handleClick() {
        UsuarioLogadoCtx?.setName('LUCASBPIRES');
    }

    return (
        <div>
            <Cabecalho />
            <h1 className='home'>HOME!</h1>
            <br />
            <hr />
            <button onClick={handleClick}>O usuário no contexto é:</button> {UsuarioLogadoCtx?.name}
            <Rodape />
        </div>
    )
}

export default Home