import React from 'react';
import styled from 'styled-components';
import Overview from './Overview/Overview';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider, { useData } from './SharedContexts/DataProvider';
import OverviewProvider from './SharedContexts/OverviewProvider';
import RelatedItemsParent from './RelatedItems/RelatedItemsParent';
import RelatedProvider from './RelatedItems/RelatedProvider';
import QuestionProvider from './QuestAnswers/QAContext/DataProvider';
import GlobalStyle from './GlobalStyle';
import Spinner from './SharedComponents/Spinner';

function App() {
  const { productId } = useData();
  return (
    <>
      {productId ? (
        <Container>
          <DataProvider>
            <AppStyle>
              <Head>
                <Header>Revamped</Header>
              </Head>
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
        </Container>
      ) : (<div><Spinner /></div>)}
    </>
  );
}

export default App;

const AppStyle = styled.div`
 ${GlobalStyle.body};
 box-sizing: border-box;
`;

const Header = styled.h1`
  font-size: 32px;
  font-weight: 400;
  padding-left: 2%;
  padding-bottom: 1px;
  border-bottom: solid;
  border-width: thin;
  margin: 0;
`;

const Container = styled.div`
  display: grid;
  margin: 0 15%;
  margin-bottom: 100px;
  grid-template-rows:
  [row1-start] 2%
  [row1-end] 24%
  [third-line] 24%
  [fourth-line] 24%
  [fifth-line] 24%
  [sixth-line] 2%
  [last-line]
  `;

const Head = styled.div`
  grid-row-start: 1;
  `;

const OverSection = styled.div`
  grid-row-start: 2;
  `;

const RelatedSection = styled.div`
  grid-row-start: 3;
  `;

const QuestionSection = styled.div`
  grid-row-start: 4;
  `;

const RatingsReviewsSection = styled.div`
  grid-row-start: 5;
  `;
