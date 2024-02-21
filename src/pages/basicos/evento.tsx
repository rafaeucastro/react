import Evento from "@/components/basicos/Evento";

export default function PaginaEvento() {
    return <div className={`
        flex justify-around items-center
    `}>
        <Evento/>
        <Evento/>
        <Evento/>
    </div>
}