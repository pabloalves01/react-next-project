import CardProduto from "./Produto/CardProduto";
import { MdGridView } from "react-icons/md";


export default function DestaquesHome() {
    return (
        <div className={`
        flex justify-center
        bg-white text-black`}>
            <div className="max-w-6xl w-full h-full">
                <div className=" py-10">
                    <div className="flex justify-between pb-10 px-10">
                        <span className="text-2xl font-semibold">Em destaque</span>
                        <div className="flex gap-1 items-center cursor-pointer">
                            <MdGridView />
                            <span className="font-semibold">Ver todos</span>
                        </div>
                    </div>
                    <div className="flex-col flex md:flex-row justify-center gap-4 px-10">
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                    <div className="flex-col flex md:flex-row justify-center gap-4 px-10 mt-10">
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>

                </div>
            </div>
        </div>
    )
}