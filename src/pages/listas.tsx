import ItemLista from "../components/itemLista";

function Lista() {
    
    let ListaNomes = ['Lucas Bornatho', 'Lindi Ciavolela'];
    let ListaObj = [{nome: 'Lucas', idade: '30'}, {nome: 'Lindi', idade: '25'}]
    
    return(

        <div>
            <h1>Renderização de listas em REACT</h1>
            <ul>
              {ListaNomes.map(
                (posicaoAtual, indexAtual) => (<li key={indexAtual}>{posicaoAtual}</li>)
              )}  
            </ul>

            <h1>Renderizando Objetos</h1>
            <ul>
                {ListaObj.map(
                    (ObjAtual, IndexObj) => (
                <div key={IndexObj}>
                    <hr />
                    Nome: {ObjAtual.nome} <br />
                    Idade: {ObjAtual.idade}
                    <hr />
                </div>
                ))}

            <h1>Renderizando Componentes</h1>
            <ul>
                {ListaObj.map(
                    (objAtual, IndexObj) => (
                        <div key={IndexObj}>
                            <ItemLista />
                        </div>
                    )
                )}
            </ul>
            </ul>
        </div>
    )  
}

export default Lista