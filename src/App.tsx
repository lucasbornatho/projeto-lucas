import './estilo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notfound'
import Sobre from './pages/sobre'
import Cadastro from './pages/cadastro'
import Lista from './pages/listas'
import Condicional from './pages/condicional'
import Comunicacao from './pages/comunicacao'
import Requisicoes from './pages/requisicoes'
import RequisicoesTypes from './pages/requisicoestypes'
import RequisicoesTypesAsync from './pages/requisicoestypesasync'

function App() {

  return (
    <Routes>
      <Route path='*' element= {<NotFound />} />
      <Route path='/' element= {<Home />} />
      <Route path='/sobre' element= {<Sobre />} />
      <Route path='/cadastro' element= {<Cadastro />} />
      <Route path='/lista' element= {<Lista />} />
      <Route path='/condicional' element= {<Condicional />} />
      <Route path='/comunicacao' element= {<Comunicacao />} />
      <Route path='/requisicoes' element= {<Requisicoes />} />
      <Route path='/requisicoestypes' element= {<RequisicoesTypes />} />
      <Route path='/requisicoestypesasync' element= {<RequisicoesTypesAsync />} />
    </Routes>
  )
}

export default App
