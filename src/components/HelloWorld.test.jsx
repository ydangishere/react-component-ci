import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders hello world text', () => {
  render(<HelloWorld />);
  const helloElement = screen.getByText(/hello world/i);
  expect(helloElement).toBeInTheDocument();
});
