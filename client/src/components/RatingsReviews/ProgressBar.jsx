import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRatingData } from '../SharedContexts/RatingProvider';

function ProgressBar(props) {
  const { value, max, color, width } = props;
  const { reviews, getReviews, meta } = useRatingData();

  console.log('META from prog', meta)

  function calcPercent() {
    if (meta && typeof meta === 'object') {
      const entries = Object.entries(meta.ratings);
      // console.log('entriesssssssssss', entries)
      let total = 0;
      for (let [key, val] of entries) {
        key = Number(key);
        val = Number(val);
        total += val;
        // console.log(total)
      }
    }
  }

  useEffect(()=>{
    calcPercent();
  }, [meta])

  return(
    <>
    <h4>Rating Breakdown</h4>
    <Container color={color} width={width}>
      <progress value={value} max={max} />
      {/* <span>{(value / max) * 100}%</span> */}
    </Container>
    </>
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
}

ProgressBar.defaultProps = {
  max: 100,
  color: '#ff7979',
  width: '150px'
}

const Container = styled.div`
  progress[value] {
    width: ${props => props.width};
    appearance: none;
  }

  ::webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }

  ::webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
  box-sizing: content-box;
`;

export default ProgressBar;