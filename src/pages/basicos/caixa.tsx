import Caixa from "@/components/basicos/Caixa"

export default function PaginaCaixa() {
    return (
        <div className={`
            flex justify-around items-center
            h-screen
        `}>
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>
                <ul className={`list-disc`}>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </Caixa>
        </div>
    )
}