import Filho from "../filho"

function Pai(){

    function HandleClick(){
        alert('mensagem disparada no pai')
    }

    return(
        <div className='pai-container'>
            <Filho texto={'Origem do texto = Pai'} FN_Acao={HandleClick} />
            <br />
            {/* <button onClick={HandleClick}>Clique Aqui!</button> */}
        </div>
    )
}

export default Pai