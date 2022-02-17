import React from 'react';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider from './Context/DataProvider';
import OverviewProvider from './Context/OverviewProvider';

function App() {
  // const { productId } = useData();
  return (
    <>

      <DataProvider>
        <OverviewProvider>
          <Overview />
          <RelatedItems />
        </OverviewProvider>
        <QuestAnswers />
        <RatingsReviews />
      </DataProvider>

    </>
  );
}

export default App;
