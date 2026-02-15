
"use client"

import { ChevronRight, Menu, X } from "lucide-react"
import Image from "next/image";
import { useState } from "react"
import { Cal_Sans } from "next/font/google"
import { useRouter } from "next/navigation"



const calSans = Cal_Sans({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inter', // Opcional: para usar com Tailwind
});



export const HomeHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter()



    return (

        <section className="w-screen mt-[3%] flex justify-center">
            <header className="max-2xl:w-[70%]  fixed z-50 flex justify-center  ">
                <div className="flex items-center justify-baseline p-1 rounded-xl shadow-md bg-white/20 backdrop-blur-md border border-white/10 w-[90%] pr-[20px] max-[790px]:w-1/2 duration-300 max-md:transition-width ">
                    {/* Logo */}
                    <div className="shrink-0 ">
                        <Image src={"/thehubPurple.png"} alt={"Logo The hub"} width={80} height={80} className="" />
                    </div>

                    {/* Navigation Links for larger screens */}
                    <nav className="hidden min-[790px]:flex grow w-full justify-center space-x-8 ">
                        <a href="#" >
                            <span className={`${calSans.className} hover:text-purple-500 duration-200 flex items-center min-[950px]:hidden `}>Sobre </span>
                            <span className={`${calSans.className} hover:text-purple-500 duration-200 flex items-center max-[950px]:hidden `}>Sobre Nós</span>
                        </a>

                        <a href="#" >
                            <span className={`${calSans.className} hover:text-purple-500 duration-200 flex items-center`}>Tecnologias</span>
                        </a>

                        <a href="#" >
                            <span className={`${calSans.className} hover:text-purple-500 duration-200 flex items-center`}>Pagamentos</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button and Dropdown */}
                    <div className="min-[790px]:hidden relative flex z-20 inset-0 items-center">
                        <button className={`cursor-pointer duration-200`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <Menu size={24} />
                        </button>
                        {/* Mobile Dropdown Menu */}
                        {isMobileMenuOpen && (
                            <div className="absolute top-full left-0 mt-2 p-4 rounded-xl shadow-md bg-[#ffffff] w-48 dropdown-animate">
                                <nav className="flex flex-col space-y-2">
                                    <a href="#" className={`${calSans.className} hover:text-purple-500 duration-200`} onClick={() => setIsMobileMenuOpen(false)}>
                                        Sobre Nós
                                    </a>
                                    <a href="#" className={`${calSans.className} hover:text-purple-500 duration-200`} onClick={() => setIsMobileMenuOpen(false)}>
                                        Tecnologias
                                    </a>
                                    <a href="#" className={`${calSans.className} hover:text-purple-500 duration-200`} onClick={() => setIsMobileMenuOpen(false)}>
                                        Pagamentos
                                    </a>
                                </nav>
                            </div>
                        )}
                    </div>

                    {/* Login Button */}
                    <div className="flex justify-center max-md:mx-[10px] w-[300px] ">
                        <button onClick={() => {
                            router.push('/LoginPage')
                        }} className="bg-black group/Login cursor-pointer
                     text-white px-6 py-3 rounded-full flex items-center">
                            <span className={`${calSans.className}  max-[900px]:hidden  text-[10pt]`}>Faça seu login</span>
                            <span className={`${calSans.className}  min-[900px]:hidden text-[10pt]`}>Login</span>
                            < ChevronRight size={20} className="group-hover/Login:left-2 group-hover/Login:ml-2.5 relative left-0 duration-300" />
                        </button>
                    </div>
                </div>
            </header>
        </section>
    );
};