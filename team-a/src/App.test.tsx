import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello from Team A/i);
  expect(linkElement).toBeInTheDocument();
});
