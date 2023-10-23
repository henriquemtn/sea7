import Button from "../../Button"
import imagem from "../../../assets/slider2.png"
import FadeInOnScroll from "../../../scripts/fadeInOnScroll";

interface CustomProps {
    text: string,
    description: string,
    buttonText: string,
}

export default function TodosSeminovos({ text, description, buttonText }: CustomProps) {

    const containerStyle = {
        background: `url(${imagem}) center/cover`,
    };

    return (
        <div className="w-full px-[3rem] mb-14" >
            <div className="bg-gray-300 w-full h-[1px] mb-12" />
            <div className="bg-gray-500 w-full h-[368px] rounded-[25px] relative z-10" style={containerStyle}>
                <div className="flex justify-center h-full relative">
                    <FadeInOnScroll>
                        <div className="flex flex-col items-center justify-center h-full relative z-20">
                            <h1 className="font-bold text-2xl md:text-6xl text-white mb-2 md:mb-4 p-2">{text}</h1>
                            <p className="text-[13px] md:text-xl text-center text-white mb-4 ">{description}</p>
                            <a href="/seminovos">
                                <Button text={buttonText} fontType="medium" fontSize="20px" px="12" py="2" />
                            </a>
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
    )
}
