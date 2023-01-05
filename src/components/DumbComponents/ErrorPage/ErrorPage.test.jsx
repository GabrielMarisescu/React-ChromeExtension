import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('renders the error message and title', () => {
    const { getByText } = render(<ErrorPage />);
    expect(getByText('Oops!')).toBeInTheDocument();
    expect(
      getByText('Sorry, an unexpected error has occurred.')
    ).toBeInTheDocument();
  });
});
