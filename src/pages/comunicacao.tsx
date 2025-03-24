import Filho from "../components/filho"
import Pai from "../components/pai"

function Comunicacao() {
    return(
        <div>
            <Pai />
            {/* <br />
            <Filho texto={'texto enviado ao filho'} /> */}
        </div>
    )
}

export default Comunicacao