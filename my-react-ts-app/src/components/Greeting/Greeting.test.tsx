import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

describe('<Greeting />', () => {
  test('it should mount', () => {
    render(<Greeting />);

    const greeting = screen.getByTestId('Greeting');

    expect(greeting).toBeInTheDocument();
  });
});