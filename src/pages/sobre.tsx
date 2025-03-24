import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import { useState } from "react";

function Sobre () {

        function handleMensagem(){
            alert('Palmeiras não tem mundial!')
        }

        let [numero, setnumero] = useState(0);
        const [nome, setnome] = useState('');

        function mudarNome() {
            setnome('Jhonny');
        }

        function contadorSomar() {
            setnumero(numero += 1)
        }

        function contadorSubtrair() {
            setnumero(numero -= 1)
        }

        return(
            <div>
                <Cabecalho/>
                <button onClick={handleMensagem}>CLIQUE AQUI</button>
                <br />
                <p>Meu nome não é {nome} </p>
                <button onClick={mudarNome}>Nome?</button>
                <br/>
                <p>Contador:{numero}</p>
                <button onClick={contadorSomar}>Somar 1</button>
                <button onClick={contadorSubtrair}>Subtrair 1</button>
                <Rodape/>
                
            </div>
        )


}

export default Sobre