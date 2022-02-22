import React, { useState } from 'react';
// import css from '../App.css';
import StarRating from '../SharedComponents/StarRating';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import { updateHelpful, useRatingData } from '../SharedContexts/RatingProvider';

function ReviewsList({review}) {
  const { updateHelpful } = useRatingData();
  const [count, setCount] = useState(0);

  const isoString = new Date().toISOString();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(review.date);
  const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

  const handleClick = () => {
    // console.log('click yes button')
    updateHelpful(review.review_id);
    // setCount(count + 1)
  }
  return (
    <div>
      <StarRating value={review.rating} />
      <TitleStyle>{review.summary}</TitleStyle>
      <ReviewBody>{review.body}</ReviewBody>
     <Helpful>Was this review helpful?<YesButton onClick={handleClick}>Yes</YesButton> {review.helpfulness} </Helpful>
      {review.recommend ? <Recommend>✔ I recommend this product </Recommend> : null}
      <ReviewerName>{review.reviewer_name}</ReviewerName>
      <DateStyle>{americanDate}</DateStyle>
    </div>
  )
}
const YesButton = styled.button`
  width: auto;
  font-size: 10px;
  border-radius: 50%;
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  transition-duration: 0.2s;
  &:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }
`

const TitleStyle = styled.h1`
  ${GlobalStyle.sub_title};
`
const Helpful = styled.p`
  ${GlobalStyle.para_sm};
`
const ReviewBody = styled.p`
  ${GlobalStyle.para_md};
`
const Recommend = styled.p`
  ${GlobalStyle.para_sm};
`
const ReviewerName = styled.p`
  ${GlobalStyle.para_sm};
`
const DateStyle = styled.p`
  ${GlobalStyle.para_sm};
`

export default ReviewsList;