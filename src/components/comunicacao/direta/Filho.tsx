
interface FilhoProps {
    nome: string
    sobrenome: string
}

export default function Filho(props: FilhoProps) {
    return (
        <div className={`
            flex justify-center items-center
            bg-green-50 rounded-md p-2
        `}>


        </div>
    )
}