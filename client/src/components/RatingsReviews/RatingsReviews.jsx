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
      <ContainerWrapper>
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
      </ContainerWrapper>
    </RatingProvider>
  );
}
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 13px;
  grid-template-columns: 2fr 4fr;
  max-width: 1000px;
`;
const BoxOne = styled.div`
  // display: fit-content;
  justify-self: start;
  // align-items: center;
  grid-column: 1/ span 1;
  padding: 5px;
  // box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;
const BoxTwo = styled.div`
  grid-column: 2/ span 4;
  grid-row: span 2;
`;
const Title = styled.h1`
  ${GlobalStyle.sub_title2}
  align-items: center;
`;
export default RatingsReviews;
