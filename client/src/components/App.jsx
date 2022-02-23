import React from 'react';
// import Overview from './Overview/Overview';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider, { useData } from './SharedContexts/DataProvider';
import OverviewProvider from './SharedContexts/OverviewProvider';
import RelatedItemsParent from './RelatedItems/RelatedItemsParent';
import RelatedProvider from './RelatedItems/RelatedProvider';

// import styles from './App.css';

function App() {
  const { productId } = useData();

  return (
    <>
      {productId ? (
        <DataProvider>
          <OverviewProvider>
            {/* <Overview /> */}
            <RelatedProvider>
              <RelatedItemsParent />
            </RelatedProvider>
          </OverviewProvider>
          <QuestAnswers />
          <RatingsReviews />
        </DataProvider>
      ) : (<div>loading</div>)}
    </>
  );
}

export default App;
