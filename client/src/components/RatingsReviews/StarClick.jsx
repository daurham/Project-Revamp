import React, {useState} from 'react';
import css from './StarClick.css';

function StarClick({ addRating }) {
  const [star, setStar] = useState(0);
  const handleClick = (e) => {
    const newRating = e.target.value;
    setStar(e.target.value)
    addRating(newRating);
  }
  const starObject = {
    0: "Rate Me !",
    1: "Poor",
	  2: "Fair",
	  3: "Average",
	  4: "Good",
	  5: "Great",
  }

  return (
    <>
    <div>{starObject[star]}</div>
    <div className={css.stars} onClick={handleClick}>
      <input type="radio" id="star1" name="rating" value="1" /><input type="radio" id="star2" name="rating" value="2" /><input type="radio" id="star3" name="rating" value="3" /><input type="radio" id="star4" name="rating" value="4" /><input type="radio" id="star5" name="rating" value="5" />

      <label htmlFor="star1" aria-label="Banana">1 star</label><label htmlFor="star2">2 stars</label><label htmlFor="star3">3 stars</label><label htmlFor="star4">4 stars</label><label htmlFor="star5">5 stars</label>
    </div>
    </>
  );
};

export default StarClick;