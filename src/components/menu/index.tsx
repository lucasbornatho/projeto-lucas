import '../../estilo.css'
import { Link } from "react-router-dom"

function Menu () {
    return (
        <div className='menu-principal'>
            <div className="menu-botao">
                <Link to='/' className='link-botao-menu'> Home </Link>
            </div>
            <div className="menu-botao">
                <Link to='/eventos' className='link-botao-menu'> Eventos </Link>
            </div>
            <div className="menu-botao">
                <Link to='/sobre' className='link-botao-menu'> Sobre </Link>
            </div>
            <div className="menu-botao">
                <Link to='/cadastro' className='link-botao-menu'> Cadastro e Calc </Link>
            </div>
            <div className="menu-botao">
                <Link to='/requisicoes' className='link-botao-menu'> Requisições </Link>
            </div>
        </div>
    )
}

export default Menu