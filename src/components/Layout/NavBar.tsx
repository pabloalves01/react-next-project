import { HiOutlineTruck } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";


export default function NavBar() {
    return (
        <div>
            <div className="hidden md:flex justify-center py-2 bg-red-900 text-sm font-semibold gap-2">
                <RiCoupon3Line size={18} />
                Utilize o cupom "PRIMEIRACOMPRA" e receba 5% de desconto em sua primeira compra!
            </div>
            <div className="bg-white flex justify-center items-center">
                <div className="w-full max-w-6xl">
                    <div className="px-4 flex items-center gap-10 pt-8">
                        <img src="/img/logo/train-sports.png" alt="" style={{ width: '200px' }} />
                        <div className="hidden md:block md:flex-grow">
                            <input className="text-black py-2 px-4 w-full rounded-full border border-gray-400" type="text" placeholder="O que você está buscando?" />
                        </div>

                        <div className="hidden md:block">
                            <ul className="flex items-center space-x-6 font-semibold text-sm text-gray-300">
                                <li className="cursor-pointer text-black">Entrar</li>
                                <button className="bg-red-900  rounded-full text-white font-semibold text-sm py-2 px-5 my-1.5">
                                    Cadastrar
                                </button>
                                <button className="flex gap-2 text-black"><MdOutlineShoppingCart size={24} /> Carrinho
                                </button>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-8">
                        <div className="flex items-center gap-2 text-sm text-black">
                            <HiOutlineTruck size={18} />
                            <span><span className="font-bold">Frete grátis</span> para <span className="font-bold">Cricíuma, SC</span> e região</span>
                        </div>
                        <ul className="hidden md:block md:flex space-x-6 font-semibold text-sm text-black">
                            <li className="cursor-pointer hover:text-red-900    ">Mantos Masculinos</li>
                            <li className="cursor-pointer hover:text-red-900    ">Mantos Femininos</li>
                            <li className="cursor-pointer hover:text-red-900    ">Mantos Retrô</li>
                            <li className="cursor-pointer hover:text-red-900    ">Conjuntos Infantis</li>
                            <li className="cursor-pointer hover:text-red-900    ">Perguntas Frequentes</li>
                            <li className="cursor-pointer hover:text-red-900    ">Quem somos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}