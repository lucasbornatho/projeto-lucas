
type Props = {
    texto: string,
    FN_Acao: () => void
}

function Filho (valores: Props) {
    return(
        <div className='filho-container'>
            {valores.texto}

            <button onClick={valores.FN_Acao}>Clique aqui e receba a mensagem do pai</button>
        </div>
    )
}

export default Filho;