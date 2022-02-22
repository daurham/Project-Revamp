import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRatingData } from '../SharedContexts/RatingProvider';
import GlobalStyle from '../GlobalStyle';

function ProgressBar(props) {
  const { value, max } = props;
  const { reviews, getReviews, meta } = useRatingData();
  const [ratingsObj, setRatingsObj] = useState();
  // const isFirstRef = useRef(true);
  // console.log(isFirstRef)
  let recommended = 0;
  let ratingsTot;
  // console.log(reviews)
  if (meta) {
    console.log('META from progress', meta)
    recommended = calcPercent(meta, meta.recommended, 'recommended')
    calcPercent(meta, meta.ratings);

    function calcPercent(metaObj, objNeeded, forReco) {
      if (forReco) {
        if (metaObj && typeof metaObj === 'object') {
          const entries = Object.entries(objNeeded);
          if (objNeeded[true]) {
            const reco = Math.round(100 - (Number(objNeeded[false]) * 100) / Number(objNeeded[true]))
            return (reco)
          }
        };
      } else {
        const entries = Object.entries(objNeeded);
        let total = 0;
        const keys = [];
        const values = [];
        for (let [key, val] of entries) {
          keys.push(Number(key));
          values.push(Number(val));
          total += Number(val);
        }
        return { total, keys, values }
      }
    };
    ratingsTot = calcPercent(meta, meta.ratings);
  };

  return !ratingsTot ? null : (
    <>
      <RatingTitle>Rating Breakdown</RatingTitle>
      <Title> {recommended} % of the reviews recommend this product</Title>
      <Container>
        <BarListBox>
          {ratingsTot.values.map((rating, index) =>
            <BarList key={index}><ProgDetail>{index + 1}</ProgDetail><progress value={rating} max={ratingsTot.total} />
              <ProgDetail>{rating}</ProgDetail>
            </BarList>
          )}
        </BarListBox>
      </Container>
    </>
  )
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
};

const Container = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BarListBox = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
  justify-content: center;
  align-items: center;
`;
const BarList = styled.li`
  progress[value] {
    width: ${props => props.width};
    appearance: none;
    height: 10px;
  }
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
 ${GlobalStyle.para_md};
 font-size: 10px;
 display: flex;
 justify-content: center;
`;
const RatingTitle = styled.h1`
 ${GlobalStyle.sub_title};
`;
const ProgDetail = styled.span`
  font-size: 12px;
  padding: 3px;
`
export default ProgressBar;