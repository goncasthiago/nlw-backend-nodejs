# NLW Backend — Node.js + TypeScript

Backend desenvolvido durante a **Next Level Week (NLW)** da [Rocketseat](https://rocketseat.com.br), usando Node.js, TypeScript e Knex como query builder SQL.

## Estrutura

```
src/
├── controllers/   # Lógica de negócio
├── database/      # Configuração e migrations
├── routes.ts      # Definição das rotas
└── server.ts      # Inicialização do servidor
uploads/           # Arquivos enviados
```

## Tecnologias

- **Node.js** + **TypeScript**
- **Knex** — query builder SQL
- **Multer** — upload de arquivos

## Como executar

```bash
npm install
npx knex migrate:latest
npm run dev
```