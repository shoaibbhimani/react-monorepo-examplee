import React from 'react';
import { render, screen } from '@testing-library/react';
import {AppFromTeamB} from './App';

test('renders learn react link', () => {
  render(<AppFromTeamB />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
