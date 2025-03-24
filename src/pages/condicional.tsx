import { useState } from "react";

function Condicional() {
      
    const [show, setShow] = useState(false);

    function handleClickShow() {
        if(show){
            setShow(false);
        } else {
            setShow(true);
        }
    }
    
    
    return(
        <div>
            <h1>Exibição de conteúdo condicional</h1>

            <button onClick={handleClickShow}>
            {show ? 'Ocultar' : 'Mostrar'}
            </button>

            {show === true &&
            <div className='cond-container'>
                Condicional
            </div>
            }

        </div>
    )
}

export default Condicional