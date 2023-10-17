import Imagem from "../../assets/slider.png"
import Button from "../../components/Button"
import Footer from "../../components/Home/Footer"

export default function VendaSeuBarco() {
    return (
        <>
            <section className="bg-f4 text-gray-600 body-font mt-[8vh]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Venda seu Barco</h1>
                        <p className="leading-relaxed">
                            Aumente as chances de vender seu barco, pois nossos parceiros estão em pontos estratégicos nas principais Marinas e clubes do Brasil: Porto Alegre, Florianópolis, Porto Belo, Balneário Camboriú, Itajaí, Joinville, São Francisco do Sul, Caioba, Guaratuba, Paranaguá, Curitiba, São Vicente, Guarujá, São Paulo, Bertioga, Barra do Una, São Sebastião, Ilha bela, Ubatuba, Laranjeiras, Parati, Angra dos Reis, Rio de Janeiro, Cabo Frio, Búzios, Vitoria, Salvador, Recife, Mato Grosso, Minas, Goias, Brasilia, Manaus, etc.
                            <br /><br />
                            Entre em contato que faremos todo o serviço para você! Fotos, ficha técnica, teste de mar, avaliação, inventario, divulgação e filtramos todas as propostas que chegarem.
                        </p>
                        <div className="flex w-full md:justify-start justify-center items-end mt-7">
                            <Button text="Entre em contato" fontType="regular" fontSize="16" px="12" py="2" />
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
