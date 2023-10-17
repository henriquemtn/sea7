import { FaHandshakeAngle } from 'react-icons/fa6'
import { FaMapMarkerAlt, FaEnvelopeOpenText } from 'react-icons/fa'
import Item from '../../Item'
import Button from '../../Button'
import imagem from '../../../assets/slider.png'
import FadeInOnScroll from '../../../scripts/fadeInOnScroll'

interface CustomProps {
    text: string,
    description: string,
    buttonText: string,
}

export default function Hero({ text, description, buttonText }: CustomProps) {

    const containerStyle = {
        background: `url(${imagem}) center/cover`,
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-[881px] relative mt-[100px] lg:mb-0" >
            <div className="bg-gray-500 w-full h-[726px] md:rounded-[25px] lg:mx-[150px] flex-col justify-center" style={containerStyle}>
                <FadeInOnScroll>
                    <div className="flex flex-col mt-40 md:mt-20 md:items-start items-center justify-center md:justify-start md:ml-20 md:z-10">
                        <h1 className="md:max-w-[470px] text-center md:text-start font-bold text-5xl md:text-6xl text-white mb-4">{text}</h1>
                        <p className="text-xl text-white mb-4">{description}</p>
                        <a href="/seminovos">
                            <Button text={buttonText} fontType="regular" fontSize="16" px="12" py="2" />
                        </a>
                    </div>
                </FadeInOnScroll>
                <div className="w-full ss:h-[220px] flex justify-center absolute rounded-b-lg px-6 lg:px-12 bottom-[-12em] md:bottom-[-12em] ss:bottom-[-2em]">
                    <div className="bg-white w-full h-full rounded-3xl flex flex-col ss:flex-row justify-around items-center p-12 gap-7">
                        <FadeInOnScroll>
                            <div className='flex flex-col ss:flex-row justify-around items-center gap-7'>
                                <Item
                                    text="Todas as Marinas"
                                    description="Atualmente, o Sea7 Group está atuando com parceiros presentes em quase todas as marinas e clubes do Brasil."
                                    icon={<FaMapMarkerAlt />}
                                />
                                <div className="bg-gray-200 h-[1px] w-2/3 ss:h-[62px] ss:w-[1px]" />
                                <Item
                                    text="Venda seu barco"
                                    description="Venda seu barco com tranquilidade, controle total de anúncios e proteção contra propostas indevidas e especuladores."
                                    icon={<FaHandshakeAngle />}
                                />
                                <div className="bg-gray-200 h-[1px] w-2/3 ss:h-[62px] ss:w-[1px]" />
                                <Item
                                    text="Contrato de Exclusividade"
                                    description="Maximizando a Segurança na Negociação, Evitando Leilões Desvantajosos, Garantindo Transparência e Qualidade na Venda"
                                    icon={<FaEnvelopeOpenText />}
                                />
                                <a href="/venda-seu-barco">
                                    <Button text="Venda seu barco" fontType="regular" fontSize="16" px="12" py="2" />
                                </a>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>

        </div>
    )
}