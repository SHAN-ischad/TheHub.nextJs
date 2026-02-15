"use client"


import { Bungee, Cal_Sans } from "next/font/google"
import Image from "next/image";
import { Separator } from "../../components/ui/separator"
import { Mail, LockKeyhole } from "lucide-react"
import { Button } from "@/src/components/ui/button";

const bungee = Bungee({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inter', // Opcional: para usar com Tailwind
});

const callSans = Cal_Sans({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inter', // Opcional: para usar com Tailwind
});
export default function LoginPage() {




    return (

        <main className="w-screen h-screen">

            {/* Section Main */}
            <section className="w-screen h-full flex flex-row justify-center items-center ">
                {/* LeftSide( Text And animation side) */}
                <div className="w-full h-full flex flex-col p-[50px] gap-[5%]">
                    <h1 className={`${bungee.className} text-2xl text-white `}>
                        Bem Vindo.<br />Faça seu login
                    </h1>
                </div>

                {/* RigthSide(Login Form) */}
                <div className="w-full h-full flex  items-center bg-white shadow-md rounded-l-md">
                    {/* form Div */}
                    <div className="h-full w-full flex flex-col items-center">

                        {/* Top Content(Logo The Hub) */}
                        <div className="w-full flex justify-center mt-[10px] mb-[5%]">
                            <Image src={"/thehubPurple.png"} alt={"Logo The hub"} width={100} height={100} className="" />

                        </div>

                        {/* Form Content */}
                        <form action="" method="Post" className="w-full flex justify-center items-center flex-col">
                            {/* Top Text */}
                            <h1 className={`${callSans.className} text-3xl mb-[20px]`}>Faça seu login</h1>
                            <Separator className="bg-black opacity-10 " />

                            {/* inputs */}
                            <div className="mt-[60px] w-full gap-[30px] flex justify-center flex-col items-center">
                                <div className="w-full flex justify-center  flex-row-reverse items-center">
                                    <Mail className=" relative bottom right-[30px]" />
                                    <input type="email" className="w-[50%] p-[10px] focus:outline-5 outline-purple-300 duration-200  border border-black rounded-r-md rounded-l-md  outline-0" placeholder="agora ou nunca" />
                                </div>


                                <div className="w-full flex justify-center  flex-row-reverse items-center">
                                    <LockKeyhole className=" relative bottom right-[30px]" />
                                    <input type="email" className="w-[50%] p-[10px] focus:outline-5 outline-purple-300 duration-200  border border-black rounded-r-md rounded-l-md  outline-0" placeholder="agora ou nunca" />
                                </div>
                            </div>


                            {/* Button */}
                            <div className="w-full flex justify-center mt-[30px]">

                                <Button className="w-[40%] p-[25px] rounded-2xl cursor-pointer" ><span className={`${callSans.className}`}>Login</span></Button>
                            </div>
                        </form>
                        <Separator className="bg-black opacity-10 mt-[50px] " />

                        {/* Bottom Form( Cadaster Link) */}
                        <div className="w-full mt-[20px]">

                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}