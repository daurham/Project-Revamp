/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App';
// import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider from './SharedContexts/DataProvider';
// import DataProvider from './SharedContexts/DataProvider'
// import RatingsReviews from './RatingsReviews/RatingsReviews';

// describe("div", () => {
//   it("div", () => {
//     // const {getByTestId} = render(<QuestAnswers />);
//     // const button = getByTestId("getProduct-button")
//     // expect(button).toBeTruthy();
//     const element = document.createElement('div');
//     expect(element).not.toBeNull();
//   })
// });

describe('App Component', () => {
  it("appdfdf", async () => {
    // render(<App />);
    render(
      <DataProvider>
        <RelatedItems />
      </DataProvider>
    );
    await waitFor(() => screen.getByText(/Related Items/i));
    expect(screen.getByText(/Related Items/i)).toBeInTheDocument();
  })
});

// expect(element).toBe();
// expect(element).toBeTruthy();
// render(<RatingsReviews />);
  // const element = screen.getByText('Related Items');
  // const element = screen.getByText(/Related Items/i);
  // const element = getByText(/Related Items/i);
  // const element = document.getElementsByClassName('test');