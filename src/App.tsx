import BarcosPrincipais from "./components/Home/BarcosPrincipais";
import Footer from "./components/Home/Footer";
import Hero from "./components/Home/Hero";
import TodosSeminovos from "./components/Home/TodosSeminovos";

export default function App() {
  return (
    <>
      <div className="flex bg-f4 w-full flex-col items-center justify-between md:px-24">
        <Hero text="Brokerage, Survey e Skipper" description="Venda, Vistoria e Transportes de embarcações (via mar)." buttonText="Entre em contato" />
      </div>
      <div className="flex justify-center bg-f4 w-full items-center md:px-24">
        <BarcosPrincipais />
      </div>
      <div className="flex bg-f4 w-full flex-col justify-center md:px-24">
        <TodosSeminovos text="Barcos Seminovos" description="Confira todos os barcos disponíveis no Sea7 Group" buttonText="Ver todos os barcos" />
      </div>
      <Footer />
    </>
  )
}
