import React from 'react'

function App() {
  return (
    <main className="app">
      <section className="card">
        <h1>Pipeline CI/CD - React + Vite</h1>
        <p>
          Este projeto é um exemplo simples de aplicação front-end configurada com
          Integração Contínua (CI) e Entrega Contínua (CD) usando GitHub Actions.
        </p>
        <ul>
          <li>Lint com <code>npm run lint</code></li>
          <li>Testes com <code>npm run test</code> (Vitest)</li>
          <li>Build com <code>npm run build</code></li>
          <li>Deploy automático no GitHub Pages em cada push na branch <code>main</code></li>
        </ul>
        <p className="hint">
          Altere este conteúdo, faça commit e push para ver a pipeline rodando na aba
          <strong> Actions </strong> do seu repositório.
        </p>
      </section>
    </main>
  )
}

export default App
