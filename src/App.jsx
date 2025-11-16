import './App.css';

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Pipeline CI/CD com React + Vite + GitHub Actions</h1>
        <p className="app__subtitle">
          Este projeto demonstra uma pipeline completa de Integração Contínua e Entrega Contínua
          para uma aplicação front-end em React.
        </p>
      </header>

      <section className="app__section">
        <h2>Etapas da Pipeline</h2>
        <ul className="app__list">
          <li>✅ Lint do código com ESLint</li>
          <li>✅ Testes automatizados com Vitest + Testing Library</li>
          <li>✅ Build de produção com Vite</li>
          <li>✅ Deploy automático no GitHub Pages</li>
        </ul>
      </section>

      <section className="app__section">
        <h2>Como Funciona</h2>
        <p>
          A cada push na branch <code>main</code>, os workflows em
          <code>.github/workflows/</code> são executados. Se todas as etapas passarem,
          uma nova versão é publicada automaticamente no GitHub Pages.
        </p>
      </section>

      <footer className="app__footer">
        <p>CI/CD – React + Vite + GitHub Actions</p>
      </footer>
    </main>
  );
}

export default App;
