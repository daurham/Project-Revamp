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
  console.log(reviews)
  if (meta) {
    console.log('META from prog', meta)
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
        return {total, keys, values}
      }
    };
    ratingsTot = calcPercent(meta, meta.ratings);
    console.log('ratingsTot', ratingsTot)
  };

  return !ratingsTot ? null : (
    <>
      <RatingTitle>Rating Breakdown</RatingTitle>
      <Title> {recommended} % of the reviews recommend this product</Title>
      <Container>
        <BarListBox>
        {ratingsTot.values.map((rating, index)=>
            <BarList  key={index}><p>{index + 1}</p><progress value={rating} max={ratingsTot.total}/>
            <span>{rating}</span>
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
  // width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
};

const Container = styled.div`
  progress[value] {
    width: ${props => props.width};
    appearance: none;
  }
  ::webkit-progress-bar {
    height: 5px;
    border-radius: 10px;
    background-color: #eee;
  }
  ::webkit-progress-value {
    height: 5px;
    border-radius: 10px;
    background-color: ${props => props.color};
  }
  box-sizing: content-box;
`;
const BarListBox = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
`;
const BarList = styled.li`
  flex: 0 0 auto;
`;
const Title = styled.h1`
 ${GlobalStyle.para_md};
`;
const RatingTitle = styled.h1`
 ${GlobalStyle.sub_title};
`;
export default ProgressBar;