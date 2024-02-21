export default function Evento() {
    let contador = 0

    function incrementar() {
        console.log(contador++);
    }

    return <button className={`
        h-72 w-72 bg-green-400
        text-xl flex justify-center items-center
        gap-5
    `} onClick={incrementar}>
        Evento
    </button>
}