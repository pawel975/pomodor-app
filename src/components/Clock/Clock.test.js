import { render, screen } from '@testing-library/react';
import Clock from './Clock';

test('Renders <Clock/> properly', () => {
  render(<Clock />);
  const clockComponent = screen.getByTestId('clock');
  expect(clockComponent).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });