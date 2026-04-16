# Correções de Segurança - BLACKBOXAI

## Progresso

- [x] 1. Criar handlerRegister.ts
- [x] 2. Editar handlerLogin.ts (erros genéricos)
- [x] 3. Criar src/middleware.ts (auth + rate limit)
- [x] 5. Criar lib/validateEnv.ts
- [x] 8. Criar src/actions/handlerLogout.ts
- [ ] 4. Editar prisma/schema.prisma (índices)
- [ ] 5. Criar lib/validateEnv.ts
- [ ] 6. Editar package.json (limpar deps)
- [ ] 7. Editar next.config.ts (headers)
- [ ] 8. Criar src/actions/handlerLogout.ts

- [ ] 10. Testar app

## Notas

- Usar Zod para senhas fortes.
- Rate limit simples (memory, IP-based).
