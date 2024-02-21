import Circulo from "@/components/basicos/Circulo"

export default function PaginaCaixa() {
    return (
        <div className={`
            flex justify-around items-center
            h-screen
        `}>
            <Circulo texto="1"></Circulo>
            <Circulo texto="2"></Circulo>
            <Circulo texto="3"></Circulo>
            <Circulo texto="4" quasePerfeito></Circulo>
        </div>
    )
}