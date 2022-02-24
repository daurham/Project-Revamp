/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

test('related products header appears', async () => {
  await waitFor(() => {
    expect(getByText('Related Products')).toBeInTheDocument();
  });
});
