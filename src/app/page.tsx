"use client"

import Image from "next/image"
import { HomeHeader } from "../components/homeComponents/header"
import { ChevronRight } from "lucide-react"
import { Bungee, Google_Sans_Code, Cal_Sans } from "next/font/google"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import { Card, CardContent } from "@/src/components/ui/card"
import { ShaderGradientWrapper } from "@/src/components/ui/shader-gradient"
import { Separator } from "../components/ui/separator"
import { useEffect, useState } from "react"

const tecnologias = [
  { nome: "Next.js", icon: "/next.svg", id: 1 },
  { nome: "React", icon: "/React.svg", id: 2 },
  { nome: "Tailwind CSS", icon: "/Tailwind.svg", id: 3 },
  { nome: "TypeScript", icon: "/Typescript.svg", id: 4 },
  { nome: "Node.js", icon: "/nodejs.svg", id: 5 },
]

const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter', // Opcional: para usar com Tailwind
});

const google = Google_Sans_Code({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter', // Opcional: para usar com Tailwind
});

const calSans = Cal_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter', // Opcional: para usar com Tailwind
});



const descricoes: Record<number, string> = {
  1: 'Next.js é um framework React para produção que oferece renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e otimizações automáticas. Ideal para aplicações web modernas e performáticas.',
  2: 'React é uma biblioteca JavaScript desenvolvida pelo Facebook para construção de interfaces de usuário interativas e componentes reutilizáveis. É a base do desenvolvimento front-end moderno.',
  3: 'Tailwind CSS é um framework CSS utility-first que permite estilização rápida e consistente através de classes utilitárias. Facilita a criação de designs responsivos e customizáveis.',
  4: 'TypeScript é um superset do JavaScript que adiciona tipagem estática opcional, proporcionando maior segurança no código, melhor autocompletar e detecção de erros em tempo de desenvolvimento.',
  5: 'Node.js é um runtime JavaScript construído sobre o motor V8 do Chrome, permitindo executar JavaScript no servidor. Essencial para desenvolvimento backend e construção de APIs modernas.',

}



export default function Page() {
  const [api, setApi] = useState<CarouselApi | undefined>()
  const [slide, setSlide] = useState<number>(1)

  useEffect(() => {
    if (!api) return

    setSlide(tecnologias[api.selectedScrollSnap()]?.id ?? 1)

    const handler = () => {
      const index = api.selectedScrollSnap()
      setSlide(tecnologias[index]?.id ?? 1)
    }

    api.on("select", handler)
    return () => {
      api.off("select", handler)
    }
  }, [api])

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#403C3B]">
      {/* Background Shader Gradient – página inteira (fixed, atrás de tudo) */}
      <ShaderGradientWrapper
        className="fixed inset-0 z-0"
        style={{
          width: "100vw",
          height: "100vh",
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      />
      <HomeHeader />
      {/* Conteúdo acima do gradiente */}
      <div className="relative z-10 min-h-screen ">

        {/* Apresentação/Presentation */}
        <section className="w-screen min-h-[300px]  flex justify-center max-h-fit max-md:mt-[20%] mt-[25%]    ">

          <div className=" justify-center w-[90%] rounded-md  flex flex-row min-h-full max-h-fit    ">

            {/*Text/ Left Content  */}
            <div className="flex w-[40%]  rounded-md p-2.5 gap-3.5 flex-col h-full justify-center">
              {/* Top Text */}
              <h1 className={`${bungee.className} text-purple-500 text-[18pt]`}>Bem vindo ao The hub</h1>

              <span className={`${bungee.className} text-white `}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum aperiam vel quam nesciunt itaque hic cupiditate. Voluptates debitis maxime ipsum at ullam nobis,
                error aspernatur rerum mollitia ea? Tempora, quidem.</span>
            </div>

            {/* image Right Content */}
            <div className="w-1/2 h-full flex justify-center  ">
              <div className="flex flex-row gap-[30px] h-[200px] ">

                <Separator orientation="vertical" className=" max-h-fit min-h-[300px] " />
                <Image width={200} height={200} alt="" src={"/thehubPurple.png"} />
              </div>
            </div>
          </div>

        </section>

        {/* Sobre Nós/ About Us */}
        <section className="relative w-screen py-[120px] rounded-md flex justify-center min-h-[300px] max-h-fit mt-[20%]">
          <div className="relative z-10 w-[90%] p-[50px] flex flex-row rounded-md">

            {/* text */}
            <div className="flex-col w-1/2 gap-2.5 h-full justify-center ">

              <h1 className={`${bungee.className} text-xl text-white text-center font-bold`} >
                Somos uma empresa dedicada a fornecer serviços de oráculo corporativo,{"\n"}
                orientados às necessidades específicas de cada organização.
                Atuamos no apoio à tomada de decisão estratégica, oferecendo análises, direcionamentos e recomendações fundamentadas,
                com o objetivo de aumentar a eficiência operacional,
                reduzir riscos e sustentar o crescimento dos negócios.
              </h1>
              <div className="flex w-full justify-center mt-[20px]">

                <button className={`${calSans.className} p-[10px] w-[50%] justify-center flex relative overflow-hidden 
                rounded-2xl group/testeButton shadow-md bg-white hover:cursor-pointer
                before:content-[''] before:absolute before:inset-0 before:bg-black before:transform 
                before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-in-out
                hover:before:scale-x-100`}>

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



        {/* Tecnologias/Technologies - icons + description */}

        <section className="w-screen mt-[20%] flex justify-center">

          <div className="w-full rounded-md p-[50px] min-h-[350px] mb-[5%] gap-[60px] max-h-fit flex flex-row-reverse items-center justify-center">


            {/*Description/ Right Content  */}

            <div className="w-[30%] h-full shadow-md flex flex-col rounded-md gap-[10px] bg-white p-[20px] ">
              {/* Top Text */}
              <h1 className={`${bungee.className} text-2xl`}>As Tecnologias que usamos</h1>

              <span className={`${calSans.className} text-sm`}>
                {
                  descricoes[slide] || "Error"
                }
              </span>
            </div>

            {/* Carousel/ Left Content */}
            <Carousel setApi={setApi} className="w-full max-w-48 sm:max-w-xs md:max-w-sm lg:max-w-2xl">
              <CarouselContent className="-ml-1">
                {tecnologias.map((tech, index) => (
                  <CarouselItem
                    key={index}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      api?.scrollTo(index)
                      setSlide(tecnologias[index]?.id ?? 1)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        api?.scrollTo(index)
                        setSlide(tecnologias[index]?.id ?? 1)
                      }
                    }}
                    className="carousel-item-btn basis-1/2 pl-1 lg:basis-1/3 cursor-pointer focus:outline-none"
                  >
                    <div className="p-1">
                      <Card className={`bg-white shadow-md relative card-underline ${tecnologias[index]?.id === slide ? "active-card" : ""}`}>
                        <CardContent className="flex aspect-square items-center justify-center p-6 ">
                          <Image
                            src={tech.icon}
                            alt={tech.nome}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </div>
    </main>
  )
}