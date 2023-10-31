import Modal from "../../components/Modal";
import Imagem from "../../assets/survey.jpg"
import Footer from "../../components/Home/Footer";

export default function Survey() {
    return (
        <>
            <Modal titulo="Survey"
                description={
                    <>
                        Saiba quando, como e porquê pedir um Survey "vistoria in loco" de uma embarcação seminova!
                        <br /><br />
                        Não compre um barco seminovo sem antes solicitar esses serviços.
                    </>
                }
                url="https://api.whatsapp.com/send?phone=5548984611646"
                buttonText="Mais informações"
                imagem={Imagem} />
            <Footer />
        </>
    )
}
