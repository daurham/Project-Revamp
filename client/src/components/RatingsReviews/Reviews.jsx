import React, { useState, useEffect } from 'react';
import { useRatingData } from '../SharedContexts/RatingProvider';
import { useData } from '../SharedContexts/DataProvider';
import ReviewsList from './ReviewsList';
import Button from '../SharedComponents/Button';
import styled from 'styled-components';
import Modal from './Modal';

function Reviews() {
  const { productId } = useData();
  const { reviews, getReviews } = useRatingData();
  const [isOpen, setIsOpen] = useState(false);

  const [limit, setLimit] = useState(2);
  // console.log('reviews', reviews)

  const updateLimit = () => {
    setLimit(reviews.results.length);
  }

  return reviews.length !== 0 ? (
    <Container>
      <div>
        {reviews.results.slice(0, limit ? limit : items.length).map((review, id, summary, rating, recommend, body, date, photos) => (
          <ReviewsList review={review} key={id} />))}
      </div>
      <div>
        <Button label="MORE REVIEWS" handleClick={updateLimit}></Button>
        <Button label="ADD A REVIEW" handleClick={() => setIsOpen(true)}></Button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
    </Container>
  ) : <div>Loading</div>
}

const Container = styled.div`
  display: grid;
  margin: 10px;
  padding: 10px;
`
export default Reviews;