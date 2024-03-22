interface CirculoProps {
    text: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    console.log(props)
    return (
        <div className={`
        flex items-center justify-center
        h-64 w-64 bg-cyan-500
        text-black text-2xl

        ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}

        `}>
            {props.text}
        </div>
    )
}