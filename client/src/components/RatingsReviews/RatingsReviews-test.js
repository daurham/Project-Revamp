/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from "@testing-library/react";
import RatingsReviews from './RatingsReviews';

describe("Ratings Component", () => {
  it("ratings", () => {
    render(<RatingsReviews />);
    // const title = screen.getByText('Ratings and Reviews')
    // expect(title).toBeInTheDocument();
  })
});