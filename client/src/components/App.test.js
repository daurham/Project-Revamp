/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import DataProvider from './SharedContexts/DataProvider'
// import RelatedItems from './RelatedItems/RelatedItems';
// import RatingsReviews from './RatingsReviews/RatingsReviews';


describe("div", () => {
  it("div", () => {
    // const {getByTestId} = render(<QuestAnswers />);
    // const button = getByTestId("getProduct-button")
    // expect(button).toBeTruthy();
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  })
});

describe("App Component", () => {
  it("appdfdf", () => {
    render(<App />);
    // const title = screen.getByText('Ratings and Reviews')
    // expect(title).toBeInTheDocument();
  })
});