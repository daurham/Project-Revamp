import React from 'react';
// import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider, { useData } from './SharedContexts/DataProvider';
import OverviewProvider from './SharedContexts/OverviewProvider';
import QuestionProvider from './QuestAnswers/QAContext/DataProvider';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

function App() {
  // const { productId } = useData();

  return (
    <>
      {/* {productId ? ( */}
        <DataProvider>
          <AppStyle>
          <OverviewProvider>
            {/* <Overview /> */}
            <RelatedItems />
          </OverviewProvider>
          <QuestionProvider>
            <QuestAnswers />
          </QuestionProvider>
          <RatingsReviews />
          </AppStyle>
        </DataProvider>
     {/* ) : (<div>loading</div>)} */}
    </>
  );
}

export default App;

const AppStyle = styled.div`
 ${GlobalStyle.body}
`