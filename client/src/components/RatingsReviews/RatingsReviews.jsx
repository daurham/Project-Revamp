import React, { useState, useEffect } from 'react';
import StarRating from '../SharedComponents/StarRating';
import ProgressBar from './ProgressBar';
import RatingProvider from '../SharedContexts/RatingProvider';
import Reviews from './Reviews';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import { useData } from '../SharedContexts/DataProvider';
import OverviewProvider from '../SharedContexts/OverviewProvider';

function RatingsReviews() {
  const { productId } = useData();
  return (
    <RatingProvider>
      <Title>Reviews and Ratings</Title>
        <Container>
          <BoxOne>
            <StarRating showAverage currentProduct />
            <ProgressBar />
          </BoxOne>
          <BoxTwo>
            <OverviewProvider>
              <Reviews />
            </OverviewProvider>
          </BoxTwo>
        </Container>
    </RatingProvider>
  );
}

const Container = styled.div`
  margin-top: 3%;
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 13px;
  grid-template-columns: 1.5fr 3fr;
  max-width: 1200px;
  margin-left: 20px;
`;
const BoxOne = styled.div`
  justify-self: start;
  grid-column: 1/ span 1;
  padding: 5px;

`;
const BoxTwo = styled.div`
  grid-column: 2/ span 5;
  grid-row: span 2;
`;
const Title = styled.h1`
  ${GlobalStyle.sub_title2}
  align-items: center;
`;
export default RatingsReviews;
