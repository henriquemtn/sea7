import Footer from '../../components/Home/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Formulario from '../../components/Formulario';

export const Contato = () => {

    return (
        <>
            <div className='mt-[120px]'>
            <Formulario bg='f4' texto="Entre em contato" descricao="Você pode usar o número (48) 98461-1646 ou se preferir envie uma mensagem:" context="Página de contato"  />
            </div>
            <Footer />
        </>
    )
}