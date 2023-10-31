import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {
    const whatsappURL = "https://api.whatsapp.com/send?phone=5548984611646";

    return (
        <a href={whatsappURL} target="_blank" className="h-16 w-16 z-40 fixed bottom-5 right-5 rounded-full flex justify-center items-center bg-s7 hover:scale-125 duration-200 cursor-pointer">
            <div className="flex justify-center text-white items-center text-3xl">
                <FaWhatsapp />
            </div>
        </a>
    )
}