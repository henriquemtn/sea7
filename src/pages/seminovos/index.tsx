import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import Footer from '../../components/Home/Footer';
import { BeatLoader } from "react-spinners";

//Criar interface Barco passando as propriedades
interface Barco {
    id: number;
    nomeProduto: string;
    quantidadeProduto: number;
    descricaoCurta: string;
    imagemPrincipal: { type: string; base64Image: string }[];
    precoProduto: number;
}

export const Seminovos = () => {
    const [barcos, setBarcos] = useState<Barco[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            setTimeout(async () => {
                const response = await axios.get('https://www.sea7api.com.br/buscar');
                const sortedItems = response.data.sort((a: Barco, b: Barco) => b.quantidadeProduto - a.quantidadeProduto); // Classifica os dados recebidos da API em ordem decrescente com base na propriedade 'quantidadeProduto'.
                const topItems = sortedItems.slice(0, 22);
                setBarcos(topItems);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    return (
        <>
            <section className='md:p-24 m-4 mt-[15vh] md:mt-[8vh]'>
                {isLoading ? (
                    <div className='flex justify-center items-center h-[50vh]'>
                        <BeatLoader color="#36d7b7" />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {barcos.map((barco) => (
                            <div
                                className='w-full h-[500px] p-4 rounded-[10px] flex flex-col'
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
                )
                }
            </section>
            <Footer />
        </>
    );
};