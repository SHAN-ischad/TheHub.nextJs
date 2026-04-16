import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET deve ter pelo menos 32 chars'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});

export const env = envSchema.parse(process.env);

// Use in app bootstrap
console.log('Ambiente validado:', { nodeEnv: env.NODE_ENV });

