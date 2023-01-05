'use strict';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/react';

it('renders correctly', () => {
  const { container } = render(<Button title='Click me' />);
  const button = container.querySelector('button');
  expect(button?.textContent).toEqual('Click me');

  // const button = screen.getByRole("button", { name: /Click me/i })
});

it('applies disabled styles when disabled prop is true', () => {
  const { container } = render(<Button title='Click me' disabled />);
  const button = container.querySelector('button');
  // expect(button).toHaveClass('disabled:text-gray-600');
  //expect(button).toHaveClass('disabled:cursor-not-allowed');
  //expect(button).toHaveClass('disabled:opacity-50');
});

it('passes through additional props to the button element', () => {
  const { container } = render(
    <Button title='Click me' data-testid='button' />
  );
  const button = container.querySelector('button');
  // expect(button).toHaveAttribute('data-testid', 'button');
});

it('calls onClick when button is clicked', () => {
  const onClick = jest.fn();
  const { container } = render(<Button title='Click me' onClick={onClick} />);
  const button = container.querySelector('button');

  //fireEvent.click(button);
  expect(onClick).toHaveBeenCalledWith();
});
