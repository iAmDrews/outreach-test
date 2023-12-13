import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('#App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});