import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRatingData } from '../SharedContexts/RatingProvider';
import ReviewsList from './ReviewsList';
import Button from '../SharedComponents/Button';
import Modal from './Modal';

function Reviews() {
  const {
    reviews, getReviews, filterRating, sortReviews,
  } = useRatingData();
  const [isOpen, setIsOpen] = useState(false);
  const [limit, setLimit] = useState(2);

  const updateLimit = () => {
    setLimit(limit + 2);
  };
  const handleSortClick = (e) => {
    sortReviews(e.target.value);
  };

  useEffect(() => {
    if (filterRating) {
    }
  }, [filterRating, reviews]);

  return reviews.length !== 0 ? (
    <Container>
      <SortDiv>
        <span>
          {reviews.count}
          reviews
        </span>
        <SortedBy>Sort By</SortedBy>
        <select onClick={handleSortClick}>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
          <option value="relevant">Relevant</option>
        </select>
      </SortDiv>
      <ReviewStyled>
        {reviews.results.slice(0, limit || items.length).map(
          (review, id, summary, rating, recommend, body, date, photos) => (
            <ReviewsList review={review} key={id} />),
        )}
      </ReviewStyled>
      <div>
        <Button label="MORE REVIEWS" handleClick={updateLimit} />
        <Button label="ADD A REVIEW" handleClick={() => setIsOpen(true)} />
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
    </Container>
  ) : <div>Loading</div>;
}

const Container = styled.div`
  display: grid;
  overflow-y: scroll;
  max-height: 800px;

`;
const ReviewStyled = styled.div`
  margin: 0;
`;
const SortDiv = styled.div`
  font-size: 12px;
`;
const SortedBy = styled.span`
  padding: 5px;
`;
export default Reviews;
