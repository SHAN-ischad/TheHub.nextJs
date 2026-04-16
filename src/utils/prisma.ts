import { PrismaClient } from "@/client/generated/prisma/client";
import { env } from "@/lib/validateEnv";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)


const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const prisma =
    globalForPrisma.prisma ?? new PrismaClient({
        adapter,
        log: ['error', 'warn']
    })

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma


