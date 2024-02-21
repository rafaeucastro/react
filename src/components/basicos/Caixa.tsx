export default function Caixa(props: any) {
    return (<div className={`
        flex justify-center items-center
        bg-purple-400 m-2 rounded-md p-2
        h-64 w-64 text-5xl font-thin
    `}> {props.children}
    </div>)
}