// src/MyComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ApiDemo from './index';
import fetchData from '../../utils/api';

jest.mock('../../utils/api');

describe('MyComponent', () => {
  it('fetches data correctly', async () => {
    const fakeData = 'Fake data';
    fetchData.mockResolvedValue(fakeData);

    render(<ApiDemo />);
    
    // Wait for useEffect to complete
    await screen.findByText('Data: ' + fakeData);

    expect(screen.getByText('Data: ' + fakeData)).toBeInTheDocument();
  });

  it('displays loading message while fetching data', async () => {
    fetchData.mockResolvedValueOnce(new Promise(() => {})); // Simulate a pending promise

    render(<ApiDemo />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Wait for useEffect to complete
   // await screen.findByText('Data:');
  });
});
