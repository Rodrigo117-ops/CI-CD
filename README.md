🌐 Projeto CI/CD – React + Vite + GitHub Actions

Este projeto demonstra a implementação completa de uma pipeline de Integração Contínua (CI) e Entrega Contínua (CD) utilizando GitHub Actions, aplicada em uma aplicação front-end criada com React + Vite.

A pipeline foi configurada para validar, testar, compilar e publicar automaticamente o projeto no GitHub Pages sempre que houver um push para a branch main.

📌 Objetivo do Projeto

Implementar um fluxo profissional de CI/CD contendo:

✔️ Validação de código com ESLint

✔️ Execução de testes automatizados com Vitest

✔️ Build da aplicação

✔️ Deploy automático no GitHub Pages

✔️ Execução automática a cada push no repositório

Este fluxo garante qualidade contínua do código e publicação imediata de novas versões.

🚀 Tecnologias Utilizadas
Frontend

React 18

Vite

CSS puro

Ferramentas de Qualidade

ESLint

Testing Library

Vitest

CI/CD

GitHub Actions

GitHub Pages

🔧 Scripts Principais

No terminal:

npm install       # instala dependências
npm run dev       # roda o servidor local de desenvolvimento
npm run lint      # executa o ESLint
npm run test      # executa os testes Vitest
npm run build     # gera build de produção

🤖 Integração Contínua (CI)

Todo push ou pull request para a branch main dispara o workflow:

📄 .github/workflows/ci.yml

Esse workflow executa:

✔️ 1. Instalação das dependências
npm ci

✔️ 2. Lint do código
npm run lint

✔️ 3. Testes automatizados
npm run test

✔️ 4. Build da aplicação
npm run build


Se qualquer etapa falhar, a pipeline é interrompida e o commit é marcado como ❌.

📦 Entrega Contínua (CD)

Sempre que um push é feito na main, ocorre o deploy automático através do workflow:

📄 .github/workflows/deploy-gh-pages.yml

Ele executa:

✔️ Build da aplicação
✔️ Publicação automática em GitHub Pages
✔️ Deploy sem intervenção manual
🌍 Site Publicado

A versão mais recente da aplicação pode ser acessada em:

👉 https://rodrigo117-ops.github.io/CI-CD/

(Deploy automático via GitHub Actions.)

🗂️ Estrutura do Projeto
CI-CD/
 ├── src/
 │    ├── App.jsx
 │    ├── App.css
 │    ├── main.jsx
 │    ├── App.test.jsx
 │    └── setupTests.js
 ├── public/
 ├── index.html
 ├── vite.config.js
 ├── package.json
 ├── package-lock.json
 ├── .eslintignore
 ├── .eslintrc.cjs
 └── .github/
      └── workflows/
            ├── ci.yml
            └── deploy-gh-pages.yml

🧪 Testes Automatizados

Os testes utilizam:

Vitest

React Testing Library

jest-dom (versão compatível com Vitest)

O teste atual verifica se o título principal da página é renderizado corretamente.

📥 Como Rodar Localmente

Clonar o repositório:

git clone https://github.com/Rodrigo117-ops/CI-CD.git


Entrar na pasta:

cd CI-CD


Instalar dependências:

npm install


Rodar o projeto:

npm run dev


A aplicação estará no ar em:

👉 http://localhost:5173/

✅ Status Atual da Pipeline

🟩 CI funcionando (lint → test → build)

🟩 Deploy funcionando

🟩 GitHub Pages ativo

🟩 Site acessível

Projeto concluído com sucesso e pronto para avaliação ✔️