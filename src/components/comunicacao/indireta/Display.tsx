interface DisplayProps {
    valor: number
}

export default function Display (props: DisplayProps) {
    return (
        <div className={`
            text-5xl font-black bg-zinc-800 rounded-md p-5
            flex justify-center items-center flex-1
        `}>
            {props.valor}
        </div>
    )
}