/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionList from './QuestionList';
// import { useQAData } from './QAContext/DataProvider';

// const { searchResults } = useQAData();
// const QuestionData = [];

// import { render, screen } from "./custom-render";

// describe("div", () => {
//   it("div", () => {
//     render(<QuestionList />);
//     // const element = document.createElement('div');
//     // expect(element).not.toBeNull();
//     // expect(element).not.toBeNull();
//     expect(
//       screen.getByText(/test/i)
//     ).toBeInTheDocument();
//   })
// });

// describe('renders the correct list items', () => {
//   it('should have a matching filtered array length with the list length', () => {
//     // const component = render(<QuestionList />);
//     // const data =
//     const element2 = document.getElementById('QuestionList');
//     const element = document.getElementsByClassName('QuestionListContainer');
//     console.log(element.children);
//     expect(element.children.length).toBe(searchResults.length);
//   })
// });
