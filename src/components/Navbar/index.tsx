import { useState } from "react";
import Logo from '../../assets/logo.png'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center w-full z-20'>
            <nav className="w-full bg-f4 z-40 fixed top-0 left-0 right-0">
                <div className="justify-between px-4 mx-[20px] md:mx-[145px] ms:items-center ms:flex ms:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 ms:py-5 ms:block">
                            <a href="/">
                                <div className="flex justify-center items-center gap-2">
                                    <img src={Logo} className="w-[100%]" />
                                </div>
                            </a>
                            <div className="ms:hidden">
                                <button
                                    className="p-2 text-[#454545] rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 ms:block ms:pb-0 ms:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 ms:flex ms:space-x-6 ms:space-y-0">
                                <li className="text-[#454545] hover:text-[#159688]">
                                    <a href="/">Início</a>
                                </li>

                                <li className="text-[#454545] hover:text-[#159688]">
                                    <a href="/sobre">Sobre</a>
                                </li>
                                
                                <li className="text-[#454545] hover:text-[#159688]">
                                    <a href="/survey">Survey</a>
                                </li>

                                <li className="text-[#454545] hover:text-[#159688]">
                                    <a href="/seminovos">Seminovos</a>
                                </li>

                                <li className="text-[#454545] hover:text-[#159688]">
                                    <a href="/venda-seu-barco">Venda seu barco</a>
                                </li>

                                <li className="text-[#454545] hover:text-[#159688]">
                                    <a href="/entre-em-contato">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>                   
                </div>
            </nav>
        </div>
    );
}