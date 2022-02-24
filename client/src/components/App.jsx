import React from 'react';

import Overview from './Overview/Overview';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider, { useData } from './SharedContexts/DataProvider';
import OverviewProvider from './SharedContexts/OverviewProvider';
import RelatedItemsParent from './RelatedItems/RelatedItemsParent';
import RelatedProvider from './RelatedItems/RelatedProvider';
import QuestionProvider from './QuestAnswers/QAContext/DataProvider';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import Spinner from './SharedComponents/Spinner';

function App() {
  const { productId } = useData();
  return (
    <>
      {productId ? (
        <DataProvider>
          <AppStyle>
          <Header>Revamped</Header>
          <OverviewProvider>
            <OverSection>
              <Overview />
            </OverSection>
            <RelatedProvider>
              <RelatedSection>
              <RelatedItemsParent />
              </RelatedSection>
            </RelatedProvider>
          </OverviewProvider>
          <QuestionProvider>
            <QuestionSection>
            <QuestAnswers />
            </QuestionSection>
          </QuestionProvider>
          <RatingsReviewsSection>
            <RatingsReviews />
          </RatingsReviewsSection>
          </AppStyle>
        </DataProvider>
     ) : (<div><Spinner /></div>)}
    </>
  );
}

export default App;

const AppStyle = styled.div`
 ${GlobalStyle.body};
 box-sizing: border-box;
`
const Header = styled.h1`
  font-size: 32px;
  font-weight: 400;
  padding-left: 10%;
`

const Container = styled.div`
  display: grid;
  grid-template-rows:
  [row1-start] 25%
  [row1-end] 25%
  [third-line] 25%
  [fourth-line] 25%
  [last-line]
  `;

  const OverSection = styled.div`
  grid-row-start: 1;
  `;

  const RelatedSection = styled.div`
  grid-row-start: 2;
  `;

  const QuestionSection = styled.div`
  grid-row-start: 3;
  `;

  const RatingsReviewsSection = styled.div`
  grid-row-start: 4;
  `;
