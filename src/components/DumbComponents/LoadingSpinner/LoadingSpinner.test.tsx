import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders the loading spinner', () => {
    const { getByTestId } = render(<LoadingSpinner />);
    const statusElement = getByTestId('status');
    const svgElement = getByTestId('svg');
    expect(statusElement).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
    expect(statusElement).toContainElement(svgElement);
  });
});
