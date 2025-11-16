// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renderiza o título da página', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      // aceita qualquer título que contenha essas palavras
      name: /pipeline ci\/cd .*react .*vite/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
