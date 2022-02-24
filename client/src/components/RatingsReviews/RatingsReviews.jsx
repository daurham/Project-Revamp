import React, { useState, useEffect } from 'react';
import StarRating from '../SharedComponents/StarRating';
import ProgressBar from './ProgressBar';
import RatingProvider from '../SharedContexts/RatingProvider';
import Reviews from './Reviews';
import styled from 'styled-components';
import { useData } from '../SharedContexts/DataProvider';
import OverviewProvider from '../SharedContexts/OverviewProvider';

function RatingsReviews() {
  const { productId } = useData();
  return (
    <>
      <RatingProvider>
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
    </>
  );
}
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 13px;
  grid-template-columns: 3fr 7fr;
  max-width: 1000px;
`
const BoxOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-column: 1/ span 1;
  grid-row: span 1;
  min-width: 150px;
  background-color: #f5f5f5;
  padding: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`
const BoxTwo = styled.div`
  grid-column: 2/ span 4;
  grid-row: span 2;
  background-color: #f6f6f6;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`

export default RatingsReviews;
