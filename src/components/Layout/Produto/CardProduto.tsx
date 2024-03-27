export default function CardProduto() {
    return (
        <div className="w-full h-96 border border-gray-300 hover:shadow-md  rounded-lg flex flex-col p-4 relative transition-transform transition-duration-500 hover:-translate-y-2">

            <div className="border rounded-lg border-gray-300 w-full h-64 text-white flex items-center justify-center">
                IMAGEM AQUI
            </div>
            <div className="w-full py-2 text-base">
                <span>Camisa Masculina Flamengo 2024/25 Home</span>
            </div>
            <div className="flex items-center gap-2 py-2">
                <span className="font-bold text-green-600 text-xl">R$ 139,90</span>
                <span className="text-gray-400 text-md font-regular"><del>159,90</del></span>
            </div>
            <span>em até <span className="font-bold">12x</span> de <span className="font-bold">R$ 17,22</span></span>
            <div className="absolute top-2 right-2 bg-green-600 text-white rounded-full w-12 h-8 flex items-center justify-center text-sm">
                -50%
            </div>
        </div>
    )
}
