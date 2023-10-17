import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    BiChevronRight,
    BiChevronLeft
} from 'react-icons/bi';

import axios from 'axios';
import Formulario from '../../components/Formulario';
import Footer from '../../components/Home/Footer';

interface Barco {
    id: number;
    nomeProduto: string;
    quantidadeProduto: number;
    descricaoCompleta: string;
    descricaoCurta: string;
    imagemPrincipal: { type: string; base64Image: string }[];
    precoProduto: number;
}

const PaginaSeminovo = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<Barco | null>(null);
    const [imagemP, setImagemP] = useState<{ type: string; base64Image: string }[] | null>(null);

    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStartX, setDragStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const scrollNext = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft += 100;
        }
    };

    const scrollPrev = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft -= 100;
        }
    };

    const openModal = (index: any) => {
        setSelectedImageIndex(index);
    };

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    useEffect(() => {
        fetchImages();
    }, [productId]);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
        setScrollLeft(containerRef.current ? containerRef.current.scrollLeft : 0);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;
        if (containerRef.current) {
            const delta = e.clientX - dragStartX;
            containerRef.current.scrollLeft = scrollLeft - delta;
        }
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        setIsDragging(true);
        setDragStartX(touch.clientX);
        setScrollLeft(containerRef.current ? containerRef.current.scrollLeft : 0);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        if (containerRef.current) {
            const delta = touch.clientX - dragStartX;
            containerRef.current.scrollLeft = scrollLeft - delta;
        }
    };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const handleMouseDown = (e: MouseEvent) => {
                setIsDragging(true);
                setDragStartX(e.clientX);
                setScrollLeft(container.scrollLeft);
            };

            const handleMouseUp = () => {
                setIsDragging(false);
            };

            const handleMouseMove = (e: MouseEvent) => {
                if (!isDragging) return;
                const delta = e.clientX - dragStartX;
                container.scrollLeft = scrollLeft - delta;
            };

            container.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);

            return () => {
                container.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, dragStartX, scrollLeft]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://www.sea7api.com.br/buscarPorId/${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
        }
    };

    const fetchImages = async () => {
        try {
            const response = await axios.get<{ type: string; base64Image: string }[]>(`https://www.sea7api.com.br/grupoImagens/${productId}`);
            setImagemP(response.data);
        } catch (error) {
            console.error('Erro ao buscar imagem:', error);
        }
    };

    if (!product) {
        return <div className=''>Carregando...</div>;
    }

    return (
        <>
            <div className='flex justify-center mt-[120px] md:py-10 md:px-4 '>
                <div className='flex flex-col md:w-[1000px] w-full gap-10 md:flex-row sm:gap-10 py-10 shadow bg-white md:p-12 md:rounded-xl px-4'>

                    {/* Parte esquerda (imagens) */}
                    <div className='flex flex-col items-center'>
                        {imagemP && imagemP.length > 0 ? (
                            <img
                                className='object-cover object-center w-[422px] h-[400px] rounded-[10px]'
                                src={`data:${imagemP[selectedImageIndex].type};base64,${imagemP[selectedImageIndex].base64Image}`}
                                alt={`Secondary Preview ${selectedImageIndex}`}                                
                            />
                        ) : (
                            <p>Loading..</p>
                        )}

                        <div
                            className='imgs-container mt-2 flex space-x-2 max-w-[420px] overflow-hidden cursor-grab'
                            ref={containerRef}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onTouchMove={handleTouchMove}
                        >
                            {imagemP && imagemP.length > 0 ? (
                                imagemP.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`data:${image.type};base64,${image.base64Image}`}
                                        alt={`Secondary Preview ${index}`}
                                        className={`w-[100px] h-[120px] object-cover object-center ${index === selectedImageIndex ? 'border-2 border-s7green' : ''}`}
                                        onClick={() => openModal(index)}
                                        draggable="false"
                                    />
                                ))
                            ) : (
                                <p>Loading..</p>
                            )}
                        </div>

                        {/* Botões de navegação do carrossel */}
                        <div className='flex w-full text-s7 justify-between mt-2'>
                            <button onClick={scrollPrev}>
                                <BiChevronLeft size={24} />
                            </button>
                            <button onClick={scrollNext}>
                                <BiChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Parte direita (detalhes do produto) */}
                    <div className='sm:w-[500px] mb-10 bg-white p-8 rounded-md'>
                        <h1 className='text-2xl font-bold mb-2'>{product.nomeProduto}</h1>
                        <p className='mb-5'>{product.descricaoCurta}</p>
                        <div className='bg-gray-300 h-[1px] w-full mb-5' />
                        <div className='flex justify-between'>
                            <p>R$ {product.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                            <div className='bg-s7 px-2 w-[65px] h-[25px] rounded-[5px] text-white relative flex justify-center items-center'>
                                <h1 className='text-[12px]'>{product.quantidadeProduto} pés</h1>
                            </div>
                        </div>
                        <p className='mt-5 text-justify'>
                            {product.descricaoCompleta.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line.trim()}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
            <Formulario bg='white' texto="Entre em contato" descricao="Você pode usar o número (48) 9 8461-1646 ou se preferir mande um email:" context={product.nomeProduto} />
            <Footer />
        </>
    );
};

export default PaginaSeminovo;