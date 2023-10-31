import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

//importar as paginas
import Sobre from "../pages/sobre"
import PaginaSeminovo from "../pages/pagina-seminovo"
import VendaSeuBarco from "../pages/venda-seu-barco"
import App from "../App"
import { Contato } from "../pages/contato"
import { Seminovos } from "../pages/seminovos"
import ErrorPage from "../pages/404"
import Survey from "../pages/survey"

export default function RouterManager() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/survey" element={<Survey />}/>
            <Route path="/seminovos" element={<Seminovos />}/>
            <Route path='/seminovos/:productId' element={<PaginaSeminovo />}/>
            <Route path="/venda-seu-barco" element={<VendaSeuBarco />}/>
            <Route path="/entre-em-contato" element={<Contato />}/>
            <Route path="/404" element={<ErrorPage />}/>
            <Route path="*" element={<Navigate to="/404" />}/>
        </Routes>
    </Router>
  )
}
