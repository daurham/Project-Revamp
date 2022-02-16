import React from 'react';
// import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItemsParent';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider from './SharedContexts/DataProvider';
import OverviewProvider from './SharedContexts/OverviewProvider';
// import styles from './App.css';

function App() {
  // -- commenting out below functions for possible later use: --
  // const [reviews, setReviews] = useState();
  // const [questions, setQuestions] = useState();
  // const [cart, setCart] = useState();

  // function getReviews() {
  //   axios.get('/reviews', params)
  //     .then((result) => setReviews(result.data));
  // }

  // function getQuestions() {
  //   axios.get('/questions', params)
  //     .then((result) => setQuestions(result.data));
  // }

  // function getCart() {
  //   axios.get('/user-cart', params)
  //     .then((result) => setCart(result.data));
  // }

  return (
    <DataProvider>
      <OverviewProvider>
        <RelatedItems />
      </OverviewProvider>
      <QuestAnswers />
      <RatingsReviews />
    </DataProvider>
  );
}

export default App;
