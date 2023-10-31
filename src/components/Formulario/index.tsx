import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import FadeInOnScroll from '../../scripts/fadeInOnScroll';

interface CustomProps {
    texto: string,
    descricao: string,
    context: string,
    bg: string,
}


export default function Formulario({ texto, descricao, context, bg }: CustomProps) {
    const [mensagem, setMensagem] = useState({
        nome: '',
        telefone: '',
        email: '',
        contexto: `${context}`,
        mensagem: ''
    });

    const initialFormData = {
        nome: '',
        telefone: '',
        email: '',
        contexto: `${context}`,
        mensagem: ''
    };

    const resetForm = () => {
        setMensagem(initialFormData);
    };

    const isValidFormData = () => {
        return mensagem.nome && mensagem.telefone && mensagem.email && mensagem.mensagem;
    };

    const fetchMensagem = async (event: any) => {
        event.preventDefault();

        if (isValidFormData()) {
            try {
                const response = await axios.post('https://www.sea7api.com.br/mensagem/salvar', mensagem);
                console.log('Status da resposta:', response.status);
                toast.success("Mensagem enviada com sucesso!");
                resetForm();
            } catch (error) {
                toast.error("Preencha todos os campos obrigatórios.");
                console.error('Erro ao enviar a mensagem:', error);
            }
        } else {
            toast.error("Preencha todos os campos obrigatórios.");
        }
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setMensagem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <section className={`bg-${bg} flex justify-center first-letter:text-gray-600 body-font relative`}>
            <FadeInOnScroll>
                <div className="container px-5 py-14 mx-auto rounded-2xl">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{texto}</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{descricao}</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                        <div className="flex flex-wrap -m-2">
                            <form className='space-y-4 px-2 pr-4'>
                                <label htmlFor='nome' className='text-gray-900 font-semibold'>
                                    Nome:
                                </label>
                                <input
                                    type='text'
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='nome'
                                    name='nome'
                                    value={mensagem.nome}
                                    onChange={handleChange}
                                />

                                <label htmlFor='email' className='text-gray-900 font-semibold'>
                                    Email:
                                </label>
                                <input
                                    type='text'
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='email'
                                    name='email'
                                    value={mensagem.email}
                                    onChange={handleChange}
                                />

                                <label htmlFor='telefone' className='text-gray-900 font-semibold'>
                                    Telefone:
                                </label>
                                <input
                                    type='text'
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='telefone'
                                    name='telefone'
                                    value={mensagem.telefone}
                                    onChange={handleChange}
                                />
                                <label htmlFor='mensagem' className='text-gray-900 font-semibold'>
                                    Mensagem:
                                </label>
                                <textarea
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='mensagem'
                                    name='mensagem'
                                    value={mensagem.mensagem}
                                    onChange={handleChange}
                                />

                                <button onClick={fetchMensagem} className='bg-s7 hover:bg-s72 text-white font-semibold py-2 px-4 rounded-md'>
                                    Enviar mensagem
                                </button>
                            </form>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-s7green">contato@sea7.com.br</a>
                                <p className="leading-normal my-5">Ney Broker,
                                    <br />Florianópolis, Santa Catarina
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    )
}
