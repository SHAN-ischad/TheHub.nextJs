"use server";

import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "../utils/prisma";

const loginSchema = z.object({
  email: z.string().email("email inválido").transform((val) => val.toLowerCase()),
  password: z.string().min(8, "Senha mínima 8 caracteres"),
});

const handleLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const parsed = loginSchema.safeParse({ email, password });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  try {
    const user = await prisma.pessoa.findUnique({
      where: {
        Email: email,
      },
      select: {
        Id: true,
        Email: true,
        Password: true,
        Nome: true,
      },
    });

    if (!user) {
      return { error: "Credenciais inválidas" };
    }

    const passwordMatch = await bcrypt.compare(password, user.Password);
    if (!passwordMatch) {
      return { error: "Credenciais inválidas" };
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não configurado");
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
      id: user.Id,
      email: user.Email,
      name: user.Nome,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("6h")
      .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 6, // 6 horas
      path: "/",
    });
  } catch (error) {
    throw error;
  }

  redirect("/dashboard");
};

export { handleLogin };

