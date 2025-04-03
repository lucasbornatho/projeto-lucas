import { Usuario } from "../../types/usuarios"

type Props = {
    data: Usuario
}

function UsuarioItem ({data}: Props) {
    return (
    <div>
        <h1>{data.id}</h1>
        <br />
        <p>{data.title}</p>
        <br />
        <p>{data.body}</p>
        <hr />
    </div>
    )
}

export default UsuarioItem