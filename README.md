🚀 Pipeline CI/CD com React + Vite + GitHub Actions
Otimização de Performance com Lighthouse / PageSpeed Insights

Este projeto demonstra uma pipeline completa de CI/CD utilizando React + Vite com GitHub Actions, incluindo:

✔ Lint automatizado
✔ Testes automatizados com Vitest
✔ Build de produção minificado
✔ Deploy automático no GitHub Pages
✔ Otimização de performance analisada com PageSpeed Insights

Além disso, o projeto passou por um processo de otimização de performance, com análise antes/depois, correção de gargalos e documentação detalhada.

📌 1. Descrição Geral do Projeto

Framework: React 18

Bundler: Vite

CI/CD: GitHub Actions

Deploy: GitGitHub Pages

Testes: Vitest + Testing Library

Qualidade: ESLint configurado e sem erros

Otimizações: Minificação, limpeza de CSS/JS, build enxuto

Análise: PageSpeed Insights (mobile + desktop)

🌐 URL publicada:
https://rodrigo117-ops.github.io/CI-CD/

📁 Relatórios de análise antes/depois:
Localizados em: ./docs/

🔍 2. Gargalos Identificados (Antes da Otimização)

Relatórios completos:

docs/antescelular.pdf
docs/antescomputador.pdf
docs/depoiscelular.pdf
docs/depoiscomputador.pdf

📱 Mobile — Antes
Métrica	Nota
Performance	65
Acessibilidade	98
Boas práticas	100
SEO	100

Principais problemas encontrados:

JavaScript acima do necessário

CSS com estilos não utilizados

LCP e FCP lentos devido ao bundle pesado

Layout mais robusto que o necessário

Alertas do Lighthouse sobre Unused JS/CSS

🖥️ Desktop — Antes
Métrica	Nota
Performance	97
Acessibilidade	98
Boas práticas	100
SEO	100
Principais problemas:

Bundle maior que o necessário

Estilos sobrando no CSS

Componente React mais complexo que o necessário

🛠️ 3. Melhorias Aplicadas
🔹 3.1 Simplificação do React

Remoção de useState, useEffect e lógica desnecessária

Componente principal transformado em estático

Remoção de imports mortos

Exclusão de componentes não usados

📌 Impacto: Menos JS → renderização mais rápida.

🔹 3.2 Otimização do CSS

Revisão completa do App.css

Remoção de estilos não utilizados

Uso de fontes nativas (system-ui)

CSS final extremamente pequeno

📌 Impacto: Menos bytes → melhor FCP/LCP.

🔹 3.3 Build de Produção Otimizado

Trecho do vite.config.js:

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
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Exemplo CI/CD com React + Vite</title>


Sem:

Google Fonts

CSS externo

Scripts remotos

Recursos bloqueadores

🔹 3.5 Garantia de Qualidade
npm run lint


✔ 0 warnings
✔ 0 errors
✔ Código padronizado

📊 4. Comparativo Antes vs Depois

## 📱 Comparação Mobile (Antes vs Depois)

| 🔍 Métrica        | ❌ Antes | ✅ Depois |
|------------------|:--------:|:---------:|
| **Performance**   | 65       | **99**    |
| **Acessibilidade**| 98       | **100**   |
| **Boas práticas** | 100      | **100**   |
| **SEO**           | 100      | **90**    |

## 🖥️ Comparação Desktop (Antes vs Depois)

| 🔍 Métrica        | ❌ Antes | ✅ Depois |
|------------------|:--------:|:---------:|
| **Performance**   | 97       | **100**   |
| **Acessibilidade**| 98       | **100**   |
| **Boas práticas** | 100      | **100**   |
| **SEO**           | 100      | **90**    |

## ⚠️ Gargalos Antes da Otimização

| Gargalo                       | Impacto no Desempenho |
|------------------------------|------------------------|
| JS acima do necessário       | Lentidão no FCP/LCP    |
| CSS com estilos não usados   | Renderização mais lenta|
| Bundle maior que o ideal     | Piora no carregamento  |
| Layout mais pesado           | Performance reduzida   |
| Unused JS/CSS no Lighthouse  | Notas menores          |

## 🚀 Melhorias Aplicadas

| Otimização                       | Resultado                                   |
|----------------------------------|---------------------------------------------|
| Simplificação do React           | Menos JS → renderização mais rápida         |
| Limpeza completa do CSS          | CSS menor → melhoria no FCP/LCP             |
| Minificação do build (JS/CSS)    | Bundle final muito mais leve                |
| HTML sem recursos bloqueadores   | FCP muito mais rápido                       |
| Ajuste de configurações do Vite  | Build mais eficiente e otimizado            |

## ⭐ Impacto das Otimizações

| Área              | Ganho Obtido                           |
|-------------------|-----------------------------------------|
| **Mobile**        | 65 → **99** (+34 pontos)                |
| **Desktop**       | 97 → **100** (+3 pontos)                |
| **JS reduzido**   | Carregamento mais rápido                |
| **CSS limpo**     | Renderização mais eficiente             |
| **Sem bloqueios** | Página exibida mais rapidamente         |


🧠 4.3 Melhorias de Maior Impacto

✔ Redução agressiva do JavaScript

✔ CSS extremamente enxuto

✔ Minificação completa do bundle

✔ HTML sem recursos bloqueadores

✔ Arquitetura simplificada do React

📌 Resultados finais:

Mobile: 65 → 99

Desktop: 97 → 100

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

A cada push para main:

CI

Lint → npm run lint

Testes → npm run test

Build → npm run build

CD

Se tudo passar:

Deploy automático no GitHub Pages

Workflows em:

.github/workflows/
  ├── ci.yml
  └── deploy.yml

📁 7. Documentos Incluídos

Localizados na pasta /docs/:

📄 Relatórios antes (mobile + desktop)

📄 Relatórios depois (mobile + desktop)

🖼️ Prints (opcionais)

🎉 Conclusão

Após todas as otimizações:

O projeto ficou extremamente leve

A performance atingiu 99–100

Acessibilidade e boas práticas foram para 100

Pipeline CI/CD funcionando perfeitamente

Código limpo, minificado e pronto para produção

✔ Projeto concluído com sucesso e pronto para avaliação! 🚀