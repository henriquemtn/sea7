//Importar dependencias e axios para conexão da api
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Button from "../../Button";
import { BeatLoader } from "react-spinners";
import FadeInOnScroll from "../../../scripts/fadeInOnScroll";

//Criar interface Barco passando as propriedades
interface Barco {
    id: number;
    nomeProduto: string;
    quantidadeProduto: number;
    descricaoCurta: string;
    imagemPrincipal: { type: string; base64Image: string }[];
    precoProduto: number;
}

// exportar como padrão a função 'BarcosPrincipais'
export default function BarcosPrincipais() {
    const [barcos, setBarcos] = useState<Barco[]>([]); // Define uma variável de estado 'barcos' e uma função 'setBarcos' para atualizá-la.
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const getItems = async () => { // Define uma função assíncrona 'getItems'.
        try {
            setTimeout(async () => {
                const response = await axios.get('https://www.sea7api.com.br/buscar');
                const sortedItems = response.data.sort((a: Barco, b: Barco) => b.quantidadeProduto - a.quantidadeProduto);
                const topItems = sortedItems.slice(0, 4);
                setBarcos(topItems);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    useEffect(() => {  // Usa o hook 'useEffect' para executar 'getItems' quando o componente é montado (o array de dependências vazio [] significa que ele é executado uma vez).
        getItems(); // Chama a função fetchItems ao montar o componente
    }, []);

    return (
        <section className='p-10'>
            {isLoading ? (
                <BeatLoader color="#36d7b7" />
            ) : (
                <FadeInOnScroll>
                    <div className='grid grid-cols-1 ss:grid-cols-2 ds:grid-cols-4 gap-4 mt-[12em] md:mt-44 ss:mt-0'>

                        {barcos.map((barco) => (
                            <div
                                className='w-full h-[500px] p-4 flex flex-col'
                                key={barco.id}
                            >
                                <div
                                    className='h-[300px] rounded-[10px] hover:bg-gray-300 duration-200'
                                    style={{
                                        backgroundImage: `url(data:${barco.imagemPrincipal[0].type};base64,${barco.imagemPrincipal[0].base64Image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                ></div>

                                <div className='flex justify-between my-2'>
                                    <h1 className='text-[15px] font-bold'>{barco.nomeProduto}</h1>
                                    <div className="w-1/3 flex justify-end">
                                        <div className='bg-s7 px-2 w-[55px] h-[25px] rounded-[5px] text-white relative flex items-center'>
                                            <h1 className='text-[13px]'>{barco.quantidadeProduto} pés</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <p className='text-[14px]'>{barco.descricaoCurta}</p>
                                </div>
                                <div className='h-[1px] w-full bg-gray-300'></div>
                                <div className='flex justify-between mt-4 items-center'>
                                    <h1>R$ {barco.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h1>
                                    <div onClick={() => navigate(`/seminovos/${barco.id}`)}>
                                        <Button text="Ver mais" fontType="regular" fontSize="16" px="4" py="1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeInOnScroll>
            )}
        </section>
    )
}
