import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowcaseMemeImage from './ShowcaseMemeImage';

describe('ShowcaseMemeImage', () => {
  it('renders the image', () => {
    render(<ShowcaseMemeImage src='example.jpg' alt='Example meme' />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'example.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Example meme');
  });
});
