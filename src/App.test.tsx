import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'

test('renders application', () => {
  render(<App />)
  expect(screen.getByText(/hello world/i)).toBeInTheDocument()
})
