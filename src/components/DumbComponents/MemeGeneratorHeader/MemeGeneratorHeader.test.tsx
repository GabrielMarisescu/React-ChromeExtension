import React from 'react';
import { render } from '@testing-library/react';
import MemeGeneratorHeader from './MemeGeneratorHeader';

describe('MemeGeneratorHeader', () => {
  it('renders the header with the given title', () => {
    const title = 'Meme Generator';
    const { getByText } = render(<MemeGeneratorHeader title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });
});
