import Pai from "./Pai"

interface AvoProps {
    nome: string
    sobrenome: string
}

export default function Avo(props: AvoProps) {
    return (
        <div className={`
        flex flex-col gap-5 bg-purple-500
        text-white border border-white
        p-5 rounded-md
        `}>

            <div className="flex justify-center gap-2"> 
            <span className="font-bold">Avo:</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>

            <div className="flex gap-5">
                <Pai nome="Paulo" sobrenome={props.sobrenome}/>
                <Pai nome="Maison" sobrenome={props.sobrenome}/>
                <Pai nome="Carlos" sobrenome={props.sobrenome}/>
            </div>
        </div>
    )
}