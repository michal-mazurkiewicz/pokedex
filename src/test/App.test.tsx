import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('app should render pagination', () => {
  render(<App />);
  const linkElement = screen.getByText(/First/i);
  const linkElement1 = screen.getByText(/Last/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
});

test('app should render search', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});