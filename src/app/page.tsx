"use client"

import Image from "next/image"
import { HomeHeader } from "../components/homeComponents/header"
import { ChevronRight } from "lucide-react"

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-x-hidden ">
      {/*Header*/}
      <HomeHeader />

      {/* Apresentação/Presentation */}
      <section className="w-screen min-h-[300px] max-md:mt-[20%] mt-[15%] justify-center max-h-fit flex flex-row ">

        {/*Text  */}
        <div className="flex w-[40%] shadow-md rounded-md p-2.5 gap-3.5 flex-col h-full justify-center">
          {/* Top Text */}
          <h1 className="animate-typing ">Bem vindo ao The hub</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum aperiam vel quam nesciunt itaque hic cupiditate. Voluptates debitis maxime ipsum at ullam nobis,
            error aspernatur rerum mollitia ea? Tempora, quidem.</span>
        </div>

        {/* image */}
        <div className="w-1/2 h-full flex justify-center  ">
          <Image width={200} height={200} alt="" src={"/thehubPurple.png"} />
        </div>
      </section>

      {/* Sobre Nós/ About Us */}
      <section className="w-screen flex justify-center min-h-[300px] max-h-fit mt-[20%] ">
        <div className="w-[90%] flex flex-row  bg-purple-400 rounded-md ">

          {/* text */}
          <div className="flex-col w-1/2 gap-2.5 h-full justify-center">

            <h1 className="">
              Somos uma empresa dedicada a fornecer serviços de oráculo corporativo,
              orientados às necessidades específicas de cada organização.
              Atuamos no apoio à tomada de decisão estratégica, oferecendo análises, direcionamentos e recomendações fundamentadas,
              com o objetivo de aumentar a eficiência operacional,
              reduzir riscos e sustentar o crescimento dos negócios.
            </h1>
            <span>Faça o Teste <ChevronRight /></span>
          </div>

          {/* Image */}
        </div>
      </section>
    </main>
  )
}