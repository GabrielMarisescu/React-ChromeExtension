import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders a button with the correct text', () => {
    const { getByText } = render(<Button title='Click me' />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick prop when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button title='Click me' onClick={onClick} />);
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });

  it('displays the disabled styles when the disabled prop is there', () => {
    const { getByText } = render(<Button title='Click me' disabled />);
    expect(getByText('Click me')).toHaveClass(
      'disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50'
    );
  });
});
