import { RiSecurePaymentLine } from "react-icons/ri";
import { LuTruck } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";


export default function InfoLoja() {
    return (
        <div className="flex flex-row justify-center bg-white text-black">

            <div className="max-w-6xl w-full gap-5 p-10 flex flex-col md:flex md:flex-row">
                <div className="flex w-full gap-4">
                    <RiSecurePaymentLine   size={48} />
                    <div className="flex flex-col w-full">
                        <span className="font-bold">Compra Segura</span>
                        <span className="text-sm">Loja registrada e com certificado SSL para máxima proteção.</span>
                    </div>
                </div>

                <div className="flex w-full gap-4">
                    <LuTruck   size={48} />
                    <div className="flex flex-col w-full">
                        <span className="font-bold">Frete Grátis</span>
                        <span className="text-sm">Nosso envio é grátis para qualquer lugar do Brasil acompanhada com código de rastreamento.</span>
                    </div>
                </div>

                <div className="flex w-full gap-4">
                    <MdSupportAgent size={48} />
                    <div className="flex flex-col w-full">
                        <span className="font-bold">Suporte Profissional</span>
                        <span className="text-sm">Possuímos uma equipe de suporte de extrema qualidade para atender você da melhor maneira possível.</span>
                    </div>
                </div>

                <div className="flex w-full gap-4">
                    <BsCartCheck size={48} />
                    <div className="flex flex-col w-full">
                        <span className="font-bold">Satisfação ou Reembolso</span>
                        <span className="text-sm">Não recebeu o produto esperado? Devolvemos o seu dinheiro ou trocamos o seu produto..</span>
                    </div>
                </div>

                

            </div>
        </div>
    )
}