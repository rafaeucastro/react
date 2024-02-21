import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import IfElse from "./If-Else"

interface PerguntaProps {
    id: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (id: number) => void
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <div className={`
            border border-zinc-600 rounded-md overflow-hidden
            
        `}>
            <div
                className="bg-zinc-800 p-5 cursor-pointer flex justify-between"
                onClick={()=> props.alternarVisibilidade(props.id)}
            >
                <span>{props.texto}</span>
                {/* <IfElse teste={props.aberta}>
                    <IconChevronUp/>
                    <IconChevronDown/>
                </IfElse> */}
                {props.aberta ? <IconChevronUp/> : <IconChevronDown/>}
            </div>
            <If teste={props.aberta}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}