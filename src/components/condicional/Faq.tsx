import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)
    
    function alternarVisibilidade(indice: number) {
        if(indice === ativo){
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return(
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta alternarVisibilidade={alternarVisibilidade} id={0} aberta={ativo === 0} texto="Qui a découvert la radioactivité ?" resposta="La radioactivité a été découverte par le physicien français Henri Becquerel en 1896."/>
            <Pergunta alternarVisibilidade={alternarVisibilidade} id={1} aberta={ativo === 1} texto="Qu'est-ce que la théorie de la relativité restreinte ?" resposta=" La théorie de la relativité restreinte, développée par Albert Einstein en 1905, stipule que les lois de la physique sont les mêmes pour tous les observateurs inertiels et que la vitesse de la lumière dans le vide est la même pour tous les observateurs, indépendamment de leur mouvement relatif."/>
            <Pergunta alternarVisibilidade={alternarVisibilidade} id={2} aberta={ativo === 2} texto="Quel est le composé chimique responsable de la couleur verte des feuilles ?" resposta=" La chlorophylle est le composé chimique responsable de la couleur verte des feuilles. C'est un pigment essentiel à la photosynthèse des plantes."/>
            <Pergunta alternarVisibilidade={alternarVisibilidade} id={3} aberta={ativo === 3} texto="Qu'est-ce que la théorie de l'évolution ?" resposta="La théorie de l'évolution, proposée par Charles Darwin dans son ouvrage 'De l'origine des espèces' en 1859, est une explication scientifique de la diversité des organismes vivants sur Terre. Elle postule que les espèces évoluent au fil du temps par le biais de processus tels que la sélection naturelle et la mutation génétique."/>
        </div>
    )
}