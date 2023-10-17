interface CustomProps {
    text: string,
    description: string,
    icon: React.ReactNode,
}

export default function Item({text, description, icon}: CustomProps) {
    return (
        <div className="flex justify-start flex-col max-w-[322px]">
            <div className="flex flex-row text-2xl text-[#B7B7B7]">
                {icon}
                <h1 className="text-base ss:text-[20px] text-[#454545] font-medium ml-5">{text}</h1>
            </div>
            <p className="mt-5 text-[11px] ss:text-[14px] text-[#B6B6B6]">{description}</p>
        </div>
    )
}
