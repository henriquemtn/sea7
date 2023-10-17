import Logo from "../../../assets/logo.png"
import FadeInOnScroll from "../../../scripts/fadeInOnScroll"

export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font bg-[#EBEBEB]">
                <FadeInOnScroll>
                    <div className="container px-12 pt-10 pb-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <div className="flex flex-row title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <a href="/">
                                    <img src={Logo} className="w-[42px]" alt='logo sea7' />
                                </a>
                                <span className="ml-3 text-[14px]">Sea7 Group</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Somos um Grupo de Brokers (corretores náuticos) e trabalhamos num sistema de parceria "business associate", ou seja trocamos (diariamente) informações de clientes que estão em busca, e ou vendendo uma embarcação. </p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SEMINOVOS</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a href='/seminovos' className="text-gray-600 hover:text-gray-800">Ver todos os barcos</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">VENDA SEU BARCO</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a href="/venda-seu-barco" className="text-gray-600 hover:text-gray-800">Saiba mais</a>
                                    </li>

                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">REDES SOCIAIS</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Instagram</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Facebook</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Twitter</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Linkedin</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTATO</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Entre em contato</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
                <div className="bg-[#1E1E1E]" >
                    <FadeInOnScroll>
                        <div className="container mx-auto py-12 px-12 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-white text-sm text-center sm:text-left">Todos os direitos reservados Sea7 Group © 1999/2023
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-white" href="https://www.facebook.com/Sea7G/">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white" href="https://www.twitter.com/">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white" href="https://www.instagram.com/sea7_group/">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </FadeInOnScroll>
                </div>
            </footer >
        </>
    )
}
