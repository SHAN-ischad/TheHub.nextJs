"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "../utils/prisma";

const registerSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido").toLowerCase(),
  password: z.string()
    .min(8, "Senha mínima 8 caracteres")
    .regex(/[A-Z]/, "Senha deve conter maiúscula")
    .regex(/[0-9]/, "Senha deve conter número")
    .regex(/[^A-Za-z0-9]/, "Senha deve conter símbolo especial"),
  telefone: z.string().regex(/^\+55\d{10,11}$/, "Telefone inválido (use +5511999999999)"),
  idade: z.number().min(18, "Idade mínima 18 anos")
});

const handleRegister = async (data: z.infer<typeof registerSchema>) => {
  const parsed = registerSchema.safeParse(data);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  try {
    // Check unique email/telefone
    const existing = await prisma.pessoa.findFirst({
      where: {
        OR: [{ Email: data.email }, { Telefone: data.telefone }]
      }
    });
    if (existing) {
      return { error: "Email ou telefone já cadastrado" };
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const pessoa = await prisma.pessoa.create({
      data: {
        Nome: data.nome,
        Email: data.email,
        Password: hashedPassword,
        Telefone: data.telefone,
        Idade: data.idade,
        DataNasc: new Date(), // Placeholder, improve later
      }
    });

    const user = await prisma.user.create({
      data: {
        PessoaId: pessoa.Id
      }
    });

    return { success: true, userId: user.Id };
  } catch (error) {
    return { error: "Erro interno no servidor" };
  }
};

export { handleRegister };

