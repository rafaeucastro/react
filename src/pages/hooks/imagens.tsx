import ImagemAleatoria from "@/components/hooks/ImagemAleatoria"

export default function PaginaImagens(){
    return <div className={`
        flex justify-around items-center
        h-screen
    `}>
        <ImagemAleatoria/>
        <ImagemAleatoria/>
        <ImagemAleatoria/>
    </div>
}