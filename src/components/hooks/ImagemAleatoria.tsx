import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria(){
    const [pesquisa, alterarPesquisa] = useState<string>('vehicle')
    const [tamanho, alterarTamanho] = useState<number>(300);
    // let pesquisa: string = 'abstract'
    const url= 'https://source.unsplash.com/featured/'

    function urlImagem(){
        return `${url}${tamanho}x${tamanho}?${pesquisa}`
    }

    function renderizarBotao(valor: string){
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                alterarPesquisa(valor)
            }}>
                {valor}
            </button>
        )
    }

    return <div className='flex flex-col items-center gap-3 border border-zinc-500 p-7 rounded-md'>
        <div className="flex justify-center gap-7 mb-5">
            <span>{pesquisa}</span>
            <span>{tamanho}x{tamanho}</span>
        </div>
        <img src={urlImagem()} height={200} width={200} alt="Imagem"
            className="rounded-md"
        />
        <div className='flex justify-between gap-5'>
            {renderizarBotao('abstract')}
            {renderizarBotao('person')}
            {renderizarBotao('vehicle')}
        </div>
        <div>
            <input type="number" value={tamanho}
                className="bg-zinc-800 p-2 rounded-none outline-none w-full"
                onChange={e => {
                    alterarTamanho(+e.target.value)
                }}/>
        </div>
    </div>
}