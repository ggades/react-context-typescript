import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app home page linkk', () => {
  render(<App />);
  const linkElement = screen.getByText(/todo list/i);
  expect(linkElement).toBeInTheDocument();
});
