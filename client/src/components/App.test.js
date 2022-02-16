"@jest-environment jsdom"
import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import RelatedItems from './RelatedItems/RelatedItems';



describe("Related Items Component", () => {
  it("rendered related items", () => {
    const {getByTestId} = render(<RelatedItems />);
    const button = getByTestId("getProduct-button")
    expect(button).toBeTruthy();
  })
});
