import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRatingData } from '../SharedContexts/RatingProvider';
import GlobalStyle from '../GlobalStyle';

function ProgressBar(props) {
  const { value, max } = props;
  const {
    reviews, getReviews, meta, filterRatingFunc,
  } = useRatingData();
  const [ratingsObj, setRatingsObj] = useState();

  let recommended = 0;
  let ratingsTot;

  const handleClick = () => {
    const filterRatingNum = Number(event.target.id) + 1;
    filterRatingFunc(filterRatingNum);
  };

  console.log(meta);
  if (meta) {
    recommended = calcPercent(meta, meta.recommended, 'recommended');
    calcPercent(meta, meta.ratings);

    function calcPercent(metaObj, objNeeded, forReco) {
      if (forReco) {
        if (metaObj && typeof metaObj === 'object') {
          const entries = Object.entries(objNeeded);
          if (objNeeded.true) {
            const reco = Math.round(100 - (Number(objNeeded.false) * 100) / Number(objNeeded.true));
            return (reco);
          }
        }
      } else {
        const entries = Object.entries(objNeeded);
        let total = 0;
        const keys = [];
        const values = [];
        for (const [key, val] of entries) {
          keys.push(Number(key));
          values.push(Number(val));
          total += Number(val);
        }
        return { total, keys, values };
      }
    }
    ratingsTot = calcPercent(meta, meta.ratings);
  }

  return !ratingsTot ? null : (
    <>
      <RatingTitle>Rating Breakdown</RatingTitle>
      <Title>
        {' '}
        {recommended}
        {' '}
        % of the reviews recommend this product
      </Title>
      <Container>
        <BarListBox>
          {ratingsTot.values.map((rating, index) => (
            <BarList key={index}>
              <ProgDetail>{index + 1}</ProgDetail>
              <ProgButton onClick={handleClick}>
                <progress value={rating} max={ratingsTot.total} id={index} />
              </ProgButton>
              <ProgDetail>{rating}</ProgDetail>
            </BarList>
          ))}
        </BarListBox>
      </Container>
    </>
  );
}

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
    width: 200px;
    appearance: none;
    height: 20px;
  }
  display: flex;
  align-items: center;
  &:hover {
    transition: all .3s ease-in-out;
  }
`;
const Title = styled.h1`
 ${GlobalStyle.para_md};
 font-size: 10px;
 display: flex;
 justify-content: center;
`;
const RatingTitle = styled.h1`
  font-size: 17px;
  font-weight: 300;
  justify-content: center;
  display: flex;
`;
const ProgDetail = styled.span`
  font-size: 12px;
  padding: 3px;
`;
const ProgButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
`;
export default ProgressBar;
