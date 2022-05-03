import { render, screen } from '@testing-library/react';
import Clock from './Clock';

describe("<Clock/> component should", () => {

  test('be rendered properly', () => {
    render(<Clock />);
    const clockComponent = screen.getByTestId('clock');
    expect(clockComponent).toBeInTheDocument();
  });

})

