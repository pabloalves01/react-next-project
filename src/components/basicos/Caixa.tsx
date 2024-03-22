export default function Caixa(props: any) {
    return (
        <div className={`
        flex items-center justify-center
        bg-indigo-800 rounded-md
        px-4 w-64 h-64
        text-3xl font-thin
        `}>
                {props.children}
        </div>
    )
}