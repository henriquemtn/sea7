import Imagem from "../../assets/vsb.png"
import Footer from "../../components/Home/Footer"
import Modal from "../../components/Modal"

export default function VendaSeuBarco() {
    return (
        <>
            <Modal titulo="Venda seu barco" 
            description={
                <>
                    Aumente as chances de vender seu barco, pois nossos parceiros estão em pontos estratégicos nas principais Marinas e clubes do Brasil: Porto Alegre, Florianópolis, Porto Belo, Balneário Camboriú, Itajaí, Joinville, São Francisco do Sul, Caioba, Guaratuba, Paranaguá, Curitiba, São Vicente, Guarujá, São Paulo, Bertioga, Barra do Una, São Sebastião, Ilha bela, Ubatuba, Laranjeiras, Parati, Angra dos Reis, Rio de Janeiro, Cabo Frio, Búzios, Vitoria, Salvador, Recife, Mato Grosso, Minas, Goiás, Brasília, Manaus, etc.
                    <br /><br />
                    Entre em contato que faremos todo o serviço para você! Fotos, ficha técnica, teste de mar, avaliação, inventário, divulgação e filtramos todas as propostas que chegarem.
                </>
            }
            buttonText="Ver mais" 
            imagem={Imagem}/>
            <Footer />
        </>
    )
}
