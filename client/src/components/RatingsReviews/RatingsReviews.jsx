import React from 'react';
import StarRating from '../SharedComponents/StarRating';
import RatingProvider from '../SharedContexts/RatingProvider';
import Reviews from './Reviews';
import styled from 'styled-components';
import { useData } from '../SharedContexts/DataProvider';

function RatingsReviews() {
  const { productId } = useData();
  return (
    <>
      <RatingProvider>
        <Container>
          <BoxOne>
            <StarRating currentProduct showAverage/>
          </BoxOne>
          <BoxTwo>
            <Reviews />
          </BoxTwo>
        </Container>
      </RatingProvider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(130px, 1fr);
  grid-gap: 13px;
  grid-template-columns: 3fr 7fr;
  max-width: 1000px;
`
const BoxOne = styled.div`
  grid-column: 1/ span 1;
  grid-row: span 1;
  min-width: 150px;
  background-color: rgba(40, 40, 236, 0.801);
  padding: 5px;
`
const BoxTwo = styled.div`
  grid-column: 2/ span 4;
  grid-row: span 2;
  background-color: rgba(243, 243, 62, 0.507);
`
const BoxThree = styled.div`
  grid-column: 2/ span 4;
  grid-row: span 2;
  background-color: rgba(216, 191, 216, 0.644);
`

export default RatingsReviews;
