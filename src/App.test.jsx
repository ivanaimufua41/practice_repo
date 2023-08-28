import { render, screen } from '@testing-library/react';
import axiosMockAdapter from './testUtils/mockAdapter'
import App from './App';

test('renders learn react link', () => {
  // axiosMockAdapter.onGet
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
