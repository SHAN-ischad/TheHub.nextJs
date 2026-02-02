
import { ChevronRight, Menu, X } from "lucide-react"
import Image from "next/image";
import { useState } from "react"

export const HomeHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



    return (
        <header className="w-full flex justify-center  absolute mt-[5%]">
            <div className="flex items-center justify-between p-1 rounded-xl shadow-md bg-[#ffffff] w-[90%] pr-[20px] max-w-[1200px]">
                {/* Logo */}
                <div className="shrink-0">
                    <Image src={"/thehubPurple.png"} alt={"Logo The hub"} width={80} height={80} className="" />
                </div>

                {/* Navigation Links for larger screens */}
                <nav className="hidden md:flex grow justify-center space-x-8 ">
                    <a href="#" className=" hover:text-purple-500 duration-200 flex items-center">
                        Sobre Nós <span className="ml-1 text-xs">{/* &#9662; */}</span>
                    </a>

                    <a href="#" className=" hover:text-purple-500 duration-200 flex items-center">
                        Tecnologias <span className="ml-1 text-xs">{/* &#9662; */}</span>
                    </a>

                    <a href="#" className=" hover:text-purple-500 duration-200 flex items-center">
                        Pagamentos <span className="ml-1 text-xs">{/* &#9662; */}</span>
                    </a>
                </nav>

                {/* Mobile Menu Button and Dropdown */}
                <div className="md:hidden relative flex z-20 inset-0 items-center">
                    <button className="cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <Menu size={24} />
                    </button>
                    {/* Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 mt-2 p-4 rounded-xl shadow-md bg-[#ffffff] w-48">
                            <nav className="flex flex-col space-y-2">
                                <a href="#" className="hover:text-purple-500 duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                    Sobre Nós
                                </a>
                                <a href="#" className="hover:text-purple-500 duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                    Tecnologias
                                </a>
                                <a href="#" className="hover:text-purple-500 duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                    Pagamentos
                                </a>
                            </nav>
                        </div>
                    )}
                </div>

                {/* Login Button */}
                <div className="flex items-center space-x-4 ">
                    <button className="bg-black group/Login cursor-pointer
                     text-white px-6 py-3 rounded-full flex items-center">
                        Faça seu login <span className="ml-2 text-yellow-400">{/* &#8594; */}</span>
                        < ChevronRight size={20} className="group-hover/Login:left-2 group-hover/Login:ml-2.5 relative left-0 duration-300" />
                    </button>
                </div>
            </div>
        </header>
    );
};