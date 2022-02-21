import React from 'react';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider, { useData } from './Context/DataProvider';
import OverviewProvider from './Context/OverviewProvider';

// import styles from './App.css';

function App() {
  const { productId } = useData();

  return (
    <div>
      {productId ? (
        <DataProvider>
          <OverviewProvider>
            <Overview />
            <RelatedItems />
          </OverviewProvider>
          <QuestAnswers />
          {/* <RatingsReviews /> */}
        </DataProvider>
      ) : (<div>loading</div>)}
    </div>
  );
}

export default App;
