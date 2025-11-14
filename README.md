# Exemplo de CI/CD com React + Vite e GitHub Actions

Este repositório demonstra uma pipeline completa de **Integração Contínua (CI)** e **Entrega Contínua (CD)** para uma aplicação front-end usando **React + Vite**.

## Tecnologias

- React 18
- Vite 5
- Vitest + Testing Library
- ESLint
- GitHub Actions
- GitHub Pages (deploy)

## Scripts principais

```bash
npm ci          # instala dependências (usado na pipeline)
npm run lint    # roda ESLint
npm run test    # roda testes com Vitest
npm run build   # gera build de produção
npm run dev     # roda o projeto localmente
```

## Workflows

### 1. CI - `.github/workflows/ci.yml`

Executado em todo **push** ou **pull request** na branch `main`:

1. Instala dependências com `npm ci`;
2. Roda `npm run lint`;
3. Roda `npm run test`;
4. Roda `npm run build`.

### 2. Deploy - `.github/workflows/deploy-gh-pages.yml`

Executado em todo **push** na branch `main`:

1. Faz o build da aplicação;
2. Publica o conteúdo da pasta `dist` no **GitHub Pages** usando o `GITHUB_TOKEN` automático.

> ⚠️ No GitHub, você ainda precisa ir em **Settings → Pages** e configurar a publicação a partir de **GitHub Actions**.

## Publicação

Após configurar o repositório no GitHub:

1. Suba o código (incluindo a pasta `.github/workflows`);
2. Faça um push na branch `main`;
3. Acompanhe a aba **Actions** para ver as pipelines rodando;
4. Quando o Pages estiver configurado, coloque aqui o link do site:

**URL do site publicado:** `https://seu-usuario.github.io/seu-repositorio/`
