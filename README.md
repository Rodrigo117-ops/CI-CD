🚀 Pipeline CI/CD com React + Vite + GitHub Actions
Otimização de Performance com Lighthouse / PageSpeed Insights

Este projeto demonstra uma pipeline completa de CI/CD utilizando React + Vite com GitHub Actions para integração contínua, testes automatizados, build de produção e deploy automático no GitHub Pages.

Além disso, o projeto passou por um processo de otimização de performance, com análise antes/depois, correção de gargalos e documentação detalhada.

📌 1. Descrição Geral do Projeto

Front-end em React 18 com Vite

Pipeline completa via GitHub Actions (CI → CD)

Deploy automático no GitHub Pages

Testes automatizados com Vitest + Testing Library

ESLint configurado para manter código limpo

Código otimizado e minificado para alta performance

Análise de desempenho via PageSpeed Insights

🌐 URL publicada:
https://rodrigo117-ops.github.io/CI-CD/

📁 Relatórios de análise antes/depois estão em:
/docs/

🔍 2. Gargalos Identificados (Antes da Otimização)

Relatórios completos:
docs/antes-mobile.pdf
docs/antes-desktop.pdf

📱 Mobile — Antes

Performance: 65

Acessibilidade: 98

Boas práticas: 100

SEO: 100

Principais problemas:

JavaScript acima do necessário para uma página estática

CSS contendo estilos não utilizados

LCP e FCP prejudicados por bundle desnecessariamente grande

Layout mais pesado do que o ideal

Alertas do Lighthouse sobre unused JS/CSS

🖥️ Desktop — Antes

Performance: 97

Acessibilidade: 98

Boas práticas: 100

SEO: 100

Principais problemas:

Bundle maior do que o necessário

Estilos sobrando no CSS

Componentes React mais pesados do que a demanda real do projeto

🛠️ 3. Melhorias Aplicadas
🔹 3.1 Simplificação do React

Remoção de useState, useEffect e lógicas desnecessárias

Componente principal transformado em estático e leve

Remoção de imports não usados

Exclusão de componentes não renderizados

📍 Resultado: menos JS enviado ao navegador → renderização mais rápida

🔹 3.2 Otimização do CSS

Revisão total do App.css

Remoção de classes não utilizadas

Padronização visual com poucos estilos essenciais

Substituição de fontes externas por fontes nativas (system-ui)

📍 Resultado: CSS menor → menor tempo de bloqueio → Lighthouse mais alto

🔹 3.3 Build de Produção Otimizado

Ajustes no vite.config.js:

build: {
  minify: 'esbuild',
  cssMinify: true
}


📦 Resultados:

JS minificado

CSS minificado

HTML otimizado

Bundle final extremamente leve

🔹 3.4 HTML limpo e sem bloqueios

index.html contém APENAS o essencial:

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Exemplo CI/CD com React + Vite</title>


Sem:

Google Fonts

CSS externo

Scripts remotos

Recursos bloqueadores (render-blocking)

🔹 3.5 Garantia de Qualidade (Lint + Testes)

Lint executado:

npm run lint


Resultado:

✔ Nenhum aviso (0 warnings)

✔ Nenhum erro (0 errors)

✔ Código padronizado

📊 4. Comparativo Antes vs Depois
📱 Mobile
Métrica	Antes	Depois
Performance	65	99
Acessibilidade	98	100
Boas práticas	100	100
SEO	100	90
🖥️ Desktop
Métrica	Antes	Depois
Performance	97	100
Acessibilidade	98	100
Boas práticas	100	100
SEO	100	90
🧠 4.3 Melhorias de Maior Impacto
✔️ Redução massiva de JavaScript

Página passou a utilizar apenas o essencial → carregamento muito mais rápido.

✔️ CSS limpo e sem estilos mortos

Reduziu o peso total do CSS e melhorou o tempo de renderização.

✔️ Build minificado do Vite

Bundle final extremamente leve e otimizado.

✔️ HTML sem bloqueios

Nada externo atrasando FCP ou LCP.

🚀 5. Como Rodar o Projeto Localmente
Instalar dependências:
npm install

Rodar o projeto:
npm run dev


A aplicação estará em:
👉 http://localhost:5173/

Gerar build de produção:
npm run build

Testar o build:
npm run preview

🤖 6. CI/CD — Fluxo Completo
A cada push na branch main:
CI

Lint → npm run lint

Testes → npm run test

Build → npm run build

CD

Se tudo passar:

Deploy automático no GitHub Pages

Workflows em:

.github/workflows/
  ci.yml
  deploy.yml

📁 7. Documentos Incluídos

Localizados em /docs/:

🔍 Relatórios antes de otimizar (mobile & desktop)

⚡ Relatórios depois de otimizar (mobile & desktop)