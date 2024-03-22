dddt default function NavBar() {
    return (
        <div className="bg-black border-b border-zinc-800/50 flex justify-center">
            <div className="w-full max-w-6xl">
                <div className="px-4 flex justify-between items-center py-1">
                    <div className="font-semibold">Logo</div>
                    <ul className="hidden md:block md:flex space-x-6 font-semibold text-sm text-gray-400">
                        <li className="cursor-pointer hover:text-gray-200">Sobre</li>
                        <li className="cursor-pointer hover:text-gray-200">Blog</li>
                        <li className="cursor-pointer hover:text-gray-200">Lojas</li>
                        <li className="cursor-pointer hover:text-gray-200">Customize</li>
                        <li className="cursor-pointer hover:text-gray-200">Dashboard</li>
                        <li className="cursor-pointer hover:text-gray-200">Ajuda</li>
                        <li className="cursor-pointer hover:text-gray-200">Documentos</li>
                    </ul>
                    <div>
                        <ul className="flex items-center space-x-6 font-semibold text-sm text-gray-300">
                            <li className="cursor-pointer hover:text-gray-200">Sign in</li>
                            <button className="bg-white rounded-full text-black font-semibold text-sm py-2 px-5 my-1.5">Get Started</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}