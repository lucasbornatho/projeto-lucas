import Rodape from "../components/rodape"
import Cabecalho from "../components/cabecalho"

function Home () {
    return (
        <div>
            <Cabecalho />
            <h1 className='home'>HOME!</h1>
            <Rodape />
        </div>
    )
}

export default Home