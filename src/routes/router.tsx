import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//importar as paginas
import Sobre from "../pages/sobre"
import PaginaSeminovo from "../pages/pagina-seminovo"
import VendaSeuBarco from "../pages/venda-seu-barco"
import App from "../App"
import { Contato } from "../pages/contato"
import { Seminovos } from "../pages/seminovos"

export default function RouterManager() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/seminovos" element={<Seminovos />}/>
            <Route path='/seminovos/:productId' element={<PaginaSeminovo />}/>
            <Route path="/venda-seu-barco" element={<VendaSeuBarco />}/>
            <Route path="/contato" element={<Contato />}/>
        </Routes>
    </Router>
  )
}
