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
  console.log('going rogue!');
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
  font-size: 30px;
  font-weight: 400;
  padding-left: 2%;
  padding-bottom: 1px;
  border-bottom: solid;
  border-width: thin;
  margin: 0;
`;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  margin-bottom: 2%;
  grid-template-columns: 60%;
  justify-content: center;
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
