import '../../estilo.css'
import { Link } from "react-router-dom"

function Menu () {
    return (
        <div className='menu-principal'>
            <div className="menu-botao">
                <Link to='/' className='link-botao-menu'> Home </Link>
            </div>
            <div className="menu-botao">
                <Link to='/sobre' className='link-botao-menu'> useStateBasico </Link>
            </div>
            <div className="menu-botao">
                <Link to='/cadastro' className='link-botao-menu'> Cadastro e Calc </Link>
            </div>
            <div className="menu-botao">
                <Link to='/requisicoes' className='link-botao-menu'> Requisições </Link>
            </div>
            <div className="menu-botao">
                <Link to='/requisicoestypes' className='link-botao-menu'> RequisiçõesTypes </Link>
            </div>
            <div className="menu-botao">
                <Link to='/requisicoestypesasync' className='link-botao-menu'> RequisiçõesTypesAsync </Link>
            </div>
            <div className="menu-botao">
                <Link to='/requisicoespost' className='link-botao-menu'> RequisiçõesPost </Link>
            </div>
            <div className="menu-botao">
                <Link to='/requisicoespostRefact' className='link-botao-menu'> RequisiçõesPostRefact </Link>
            </div>
            <div className="menu-botao">
                <Link to='/requisicoesParam' className='link-botao-menu'> RequisiçõesParam </Link>
            </div>
        </div>
    )
}

export default Menu