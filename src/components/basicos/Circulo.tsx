interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    return (<div className={`
        flex justify-center items-center
        bg-cyan-400 m-2 p-2
        h-64 w-64 text-5xl font-thin text-black
        ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
    `}>
        {props.texto}
    </div>)
}