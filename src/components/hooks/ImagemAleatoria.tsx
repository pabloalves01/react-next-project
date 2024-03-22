import { useState } from "react"

export default function ImagemAleatoria() {

    const url = 'https://source.unsplash.com/featured/'

    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)

    function urlImagem() {
        return `${url}${tamanho}x${tamanho}?${pesquisa}`
    }

    function renderizarBotao(value: string) {
        return (
            <button className={`
            bg-blue-500 px-4 py-2 text-white rounded-md
            `} onClick={() => {
                    setPesquisa(value)
                    console.log(urlImagem())
                }
                }
            >
                {value}
            </button>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center gap-3 border border-zinc-300 p-7 rounded-md">
            <h1>Tamanhos da imagem: {tamanho} </h1>
            <h1>Pesquisa: {pesquisa} </h1>
            <img src={urlImagem()} height={300} width={300} alt="Imagem" className="rounded-md" />
            <div className="flex w-full justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
            <div className="w-full">

                <input
                    type="number"
                    value={tamanho}
                    className="bg-zinc-800"
                    onChange={e => {
                        setTamanho(+e.target.value)
                    }}
                />
            </div>
        </div>
    )
}