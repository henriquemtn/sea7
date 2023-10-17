import Imagem from "../../assets/slider.png"
import Button from "../../components/Button"
import Footer from "../../components/Home/Footer"

export default function Sobre() {
    return (
        <>
        <section className="bg-f4 text-gray-600 body-font mt-[8vh]">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Quem somos</h1>
                    <p className="leading-relaxed">
                        Somos um Grupo de Broker´s (corretores náuticos) e trabalhamos num sistema de parceria "business associate", ou seja trocamos (diariamente) informações de clientes que estão em busca, e ou vendendo uma embarcação.
                        <br /><br />
                        ATUAMOS EM QUASE TODAS AS MARINAS DO BRASIL
                        <br /><br />
                        Saiba também quando, como e porquê pedir uma vistoria "in loco" de uma embarcação seminova!
                        Não compre barco usado sem antes solicitar esses serviços
                    </p>
                    <div className="flex w-full md:justify-start justify-center items-end mt-7">
                        <Button text="Ver mais" fontType="regular" fontSize="16" px="12" py="2"/>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={Imagem} />
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
