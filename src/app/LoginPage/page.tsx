"use client";

import { Button } from "@/src/components/ui/button";
import { EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Bungee, Cal_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "../../components/ui/separator";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter", // Opcional: para usar com Tailwind
});

const callSans = Cal_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter", // Opcional: para usar com Tailwind
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-screen h-screen ">
      {/* Section Main(PC Screen) */}
      <section className="w-screen h-full flex flex-row justify-center items-center max-lg:hidden ">
        {/* LeftSide( Text And animation side) */}
        <div className="w-full h-full flex flex-col p-12.5 gap-[5%]">
          <h1 className={`${bungee.className} text-2xl text-white `}>
            Bem Vindo.
            <br />
            Faça seu login
          </h1>
        </div>

        {/* RigthSide(Login Form) */}
        <div className="w-full h-full flex  items-center bg-white shadow-md rounded-l-md">
          {/* form Div */}
          <div className="h-full w-full flex flex-col items-center">
            {/* Top Content(Logo The Hub) */}
            <div className="w-full flex justify-center  mb-[1%]">
              <Image
                src={"/thehubPurple.png"}
                alt={"Logo The hub"}
                width={150}
                height={150}
                className=""
              />
            </div>

            {/* Form Content */}
            <form
              action=""
              method="Post"
              className="w-full flex justify-center items-center flex-col"
            >
              {/* Top Text */}
              <h1 className={`${callSans.className} text-3xl mb-2`}>
                Faça seu login
              </h1>
              <Separator className="bg-black opacity-10 " />

              {/* inputs */}
              <div className="mt-9 w-full gap-7.5 flex justify-center flex-col items-center">
                <div className="w-full flex justify-center  flex-row-reverse items-center">
                  <Mail className=" relative bottom right-7.5" />
                  <input
                    type="email"
                    className="w-[50%] p-2.5 focus:outline-[3.5px] outline-purple-300 duration-200  border border-black rounded-r-md rounded-l-md  outline-0"
                    placeholder="Digite seu Email"
                  />
                </div>

                <div className="w-full flex justify-center  flex-row-reverse items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="relative right-7.5 text-black cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <LockKeyhole size={20} />
                    )}
                  </button>
                  <input
                    type={showPassword ? "password" : "text"}
                    className="w-[50%] p-2.5 focus:outline-[3.5px]  outline-purple-300 duration-200  border border-black rounded-r-md rounded-l-md  outline-0 [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden"
                    placeholder="Digite sua senha"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="w-full flex justify-center mt-[30px]">
                <Button className="w-[40%] p-[25px] rounded-2xl cursor-pointer hover:scale-102">
                  <span className={`${callSans.className}`}>Login</span>
                </Button>
              </div>
            </form>

            {/* Bottom Form( Cadaster Link, and google login) */}
            <div className="w-full mt-7.5 flex items-center gap-5 flex-col">
              <Button className="bg-white w-[50%] border p-1.25 rounded-full hover:cursor-pointer flex   group/LoginButton ">
                <Image
                  src={"google-icon-logo-svgrepo-com.svg"}
                  alt={""}
                  width={20}
                  height={20}
                  className="group-hover/LoginButton:-rotate-20 duration-200 rotate-0 "
                />
                <span
                  className={`${callSans.className} group-hover/LoginButton:ml-1 duration-200 text-black`}
                >
                  Google
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Main(Mobile Screen) */}
      <section className="lg:hidden overflow-hidden max-lg:block w-screen h-screen">
        <div className="w-full h-full flex  items-center bg-white ">
          {/* form Div */}
          <div className="h-full w-full flex flex-col items-center">
            {/* Top Content(Logo The Hub) */}
            <div className="w-full flex justify-center ">
              <Image
                src={"/thehubPurple.png"}
                alt={"Logo The hub"}
                width={100}
                height={100}
                className=""
              />
            </div>

            {/* Form Content */}
            <form
              action=""
              method="Post"
              className="w-full flex justify-center items-center flex-col"
            >
              {/* Top Text */}
              <h1 className={`${callSans.className} text-3xl `}>
                Faça seu login
              </h1>

              {/* inputs */}
              <div className="mt-15 ml-5.5  w-full  gap-7.5 flex justify-center flex-col items-center">
                <div className="w-full flex justify-center  flex-row-reverse items-center">
                  <Mail className=" relative bottom right-7.5" />
                  <input
                    type="email"
                    className="w-75 p-3 focus:outline-[3.5px] outline-purple-300 duration-200  border border-black rounded-2xl  outline-0"
                    placeholder="Digite seu Email"
                  />
                </div>

                <div className="w-full flex justify-center  flex-row-reverse items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="relative right-7.5 text-black cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <LockKeyhole size={20} />
                    )}
                  </button>
                  <input
                    type={showPassword ? "password" : "text"}
                    className="w-75 p-3 focus:outline-[3.5px]  outline-purple-300 duration-200  border border-black rounded-2xl  outline-0 [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden"
                    placeholder="Digite sua senha"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="w-full flex justify-center mt-[30px]">
                <Button className="w-[40%] p-6.25 rounded-2xl cursor-pointer hover:scale-102">
                  <span className={`${callSans.className}`}>Login</span>
                </Button>
              </div>
            </form>

            {/* Bottom Form( Cadaster Link, and google login) */}
            <div className="w-full mt-7.5 flex items-center gap-5 flex-col">
              <Button className="bg-white w-[20%] border p-1.25 rounded-full hover:cursor-pointer flex   group/LoginButton ">
                <Image
                  src={"google-icon-logo-svgrepo-com.svg"}
                  alt={""}
                  width={20}
                  height={20}
                  className="group-hover/LoginButton:-rotate-20 duration-200 rotate-0 "
                />
                <span
                  className={`${callSans.className} group-hover/LoginButton:ml-1 duration-200 text-black`}
                >
                  Google
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
