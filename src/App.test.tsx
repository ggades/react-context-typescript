import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app home page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todos/i);
  expect(linkElement).toBeInTheDocument();
});
