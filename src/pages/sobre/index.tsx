import Imagem from "../../assets/sobre.png"
import Footer from "../../components/Home/Footer"
import Modal from "../../components/Modal"

export default function Sobre() {
    return (
        <>
            <Modal titulo="Quem somos"
                description={
                    <>
                        Somos um Grupo de Broker´s (corretores náuticos) e trabalhamos num sistema de parceria "business associate", ou seja trocamos (diariamente) informações de clientes que estão em busca, e ou vendendo uma embarcação.
                        <br /><br />
                        ATUAMOS EM QUASE TODAS AS MARINAS DO BRASIL
                    </>
                }
                url="https://api.whatsapp.com/send?phone=5548984611646"
                buttonText="Mais informações"
                imagem={Imagem} />
            <Footer />
        </>
    )
}
