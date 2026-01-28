"use client"

import Image from "next/image"
import { HomeHeader } from "../components/homeComponents/header"
import { ChevronRight } from "lucide-react"
import { Bungee } from "next/font/google"

const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter', // Opcional: para usar com Tailwind
});

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-x-hidden ">
      {/*Header*/}
      <HomeHeader />

      {/* Apresentação/Presentation */}
      <section className="w-screen min-h-[300px] max-md:mt-[20%] mt-[15%] justify-center max-h-fit flex flex-row ">

        {/*Text  */}
        <div className="flex w-[40%] rounded-md p-2.5 gap-3.5 flex-col h-full justify-center">
          {/* Top Text */}
          <h1 className={`${bungee.className} text-purple-500 text-[18pt]`}>Bem vindo ao The hub</h1>
          <span className={`${bungee.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum aperiam vel quam nesciunt itaque hic cupiditate. Voluptates debitis maxime ipsum at ullam nobis,
            error aspernatur rerum mollitia ea? Tempora, quidem.</span>
        </div>

        {/* image */}
        <div className="w-1/2 h-full flex justify-center  ">
          <Image width={200} height={200} alt="" src={"/thehubPurple.png"} />
        </div>
      </section>

      {/* Sobre Nós/ About Us */}
      <section className="w-screen  flex justify-center min-h-[300px] max-h-fit mt-[20%] mb-[5%] ">
        <div className="w-[90%] p-[20px] flex flex-row  bg-purple-400 rounded-md ">

          {/* text */}
          <div className="flex-col w-1/2 gap-2.5 h-full justify-center ">

            <h1 className={`text-md text-center font-bold`} >
              Somos uma empresa dedicada a fornecer serviços de oráculo corporativo,{"\n"}
              orientados às necessidades específicas de cada organização.
              Atuamos no apoio à tomada de decisão estratégica, oferecendo análises, direcionamentos e recomendações fundamentadas,
              com o objetivo de aumentar a eficiência operacional,
              reduzir riscos e sustentar o crescimento dos negócios.
            </h1>
            <div className="flex w-full justify-center mt-[20px]">

              <button className="p-[10px] w-fit relative overflow-hidden rounded-md group/testeButton shadow-md bg-white hover:cursor-pointer
                before:content-[''] before:absolute before:inset-0 before:bg-black before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-in-out
                hover:before:scale-x-100">

                <span className="relative group-hover/testeButton:text-white z-10 flex flex-row gap-2 duration-700">Faça o Teste <ChevronRight className="group-hover/testeButton:text-white duration-700" /></span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 h-full flex justify-center items-center ">
            <Image src={"/thehubPurple.png"} alt={""} height={200} width={200} />
          </div>
        </div>
      </section>
    </main>
  )
}