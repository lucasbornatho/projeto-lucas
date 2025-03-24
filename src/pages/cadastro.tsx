import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

function Cadastro (){

    const [nomeCliente, setNomeCliente] = useState('');

    function changeNomeCliente(event: React.ChangeEvent<HTMLInputElement>){
        setNomeCliente(event.target.value);
    }

    const [n1, setN1] = useState<number>(0);
    const [n2, setN2] = useState<number>(0);
    let [resultado, setResultado] = useState<number>(0);

    function changeN1(event: React.ChangeEvent<HTMLInputElement>){
        setN1(Number(event.target.value));
    }

    function changeN2(event: React.ChangeEvent<HTMLInputElement>){
        setN2(Number(event.target.value));
    }

    function somar() {
        return(
            setResultado(n1 + n2)
        )
    }

    function subtrair() {
        return(
            setResultado(n1 - n2)
        )
    }
    function dividir() {
        return(
            setResultado(n1 / n2)
        )
    }
    function multiplicar() {
        return(
            setResultado(n1 * n2)
        )
    }

    function limpar() {
        return(
            setN1(0),
            setN2(0),
            setResultado(0)
        )
    }

    return (
        <div>
            <Cabecalho />
            <h1>Pagina de Cadastro</h1>
            <br />
            <label>Nome do Usuário:</label>
            <br />
            <input type='text' onChange={changeNomeCliente}></input>
            <p>O valor digitado é:{nomeCliente}</p>
            <br />
            <br />
            <br />
            <label>Calculadora:</label>
            <br />
            <div className="calculadora">
                <input className="inputn1" type="number" placeholder="Numero 1" value={n1} onChange={changeN1}></input>
                <br />
                <input className="inputn2" type="number" placeholder="Numero 2" value={n2} onChange={changeN2}></input>
                <br />
                <div className="botoes">
                    <button className="btSum" onClick={somar}>+</button>
                    <br />
                    <button className="btSub"  onClick={subtrair}>-</button>
                    <br />
                    <button className="btDiv" onClick={dividir}>/</button>
                    <br />
                    <button className="btMult" onClick={multiplicar}>*</button>
                    <br />
                    <button className="btL" onClick={limpar}>LIMPAR</button>
                    <br />
                </div>
                <div className="resultado">
                    <p>Resultado:{resultado}</p>
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default Cadastro