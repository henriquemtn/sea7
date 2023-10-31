import Button from "../../components/Button";

export default function ErrorPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex items-center flex-col gap-4">
                <h1 className="font-medium">Não encontramos a página que você está buscando</h1>
                <a href="/"><Button text="Voltar para a página inicial" fontType="regular" fontSize="16" px="12" py="2" /></a>
            </div>
        </div>
    )
}
