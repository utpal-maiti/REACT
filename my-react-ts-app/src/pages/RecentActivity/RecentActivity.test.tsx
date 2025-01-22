import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecentActivity from './RecentActivity';

describe('<RecentActivity />', () => {
  test('it should mount', () => {
    render(<RecentActivity />);

    const recentActivity = screen.getByTestId('RecentActivity');

    expect(recentActivity).toBeInTheDocument();
  });
});