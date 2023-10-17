interface CustomProps {
    text: string,
    fontType: string,
    fontSize: string,
    px: string,
    py: string,
}

export default function Button({text, fontType, fontSize, px, py}: CustomProps) {
    return (
      <button className={`bg-s7 min-w-[100px] flex items-center justify-center text-white hover:bg-s72 duration-200 font-${fontType} text-${fontSize} px-${px} py-${py} rounded-[10px]`}>
          {text}
      </button>
    )
  }
