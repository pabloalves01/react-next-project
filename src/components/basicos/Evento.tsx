export default function Eventos() {

    let contador = 0

    function incrementar() {
        console.log(contador++)
    }

    return (
        <button className={`
        h-72 w-72
        bg-indigo-800
        flex justify-center items-center
        text-4xl font-thin
        hover:bg-indigo-600
        `} onClick={incrementar}>
            <h1>Evento</h1>
        </button>
    )
}