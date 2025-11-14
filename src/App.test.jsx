import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('renderiza o título da página', () => {
    render(<App />)
    const heading = screen.getByRole('heading', {
      name: /pipeline ci\/cd - react \+ vite/i
    })
    expect(heading).toBeInTheDocument()
  })
})
