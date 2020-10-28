import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

import { showData } from './mockData/index';

// Creating mock before we set up testing
jest.mock('./api/fetchShow');

test('renders show data from API', async () => {
    // ARRANGE
    mockFetchShow.mockResolvedValueOnce(showData);

    // ACT
    const { getAllByText } = render(<App />);

    // ASSERT
    await waitFor(() => expect(getAllByText(/stranger things/i)));
    expect(mockFetchShow).toHaveBeenCalled();
});