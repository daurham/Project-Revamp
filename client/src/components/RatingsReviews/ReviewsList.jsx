import React from 'react';
// import css from '../App.css';
import StarRating from '../SharedComponents/StarRating';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

function ReviewsList({review}) {
  const isoString = new Date().toISOString();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(review.date);
  const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div>
      <StarRating value={review} currentProduct/>
      <TitleStyle>{review.summary}</TitleStyle>
      <ReviewBody>{review.body}</ReviewBody>
      {review.helpfulness > 0 ? <Helpful>Helpful? Yes: {review.helpfulness} </Helpful>: null }
      {review.recommend ? <Recommend>✔ I recommend this product </Recommend> : null}
      <ReviewerName>{review.reviewer_name}</ReviewerName>
      <DateStyle>{americanDate}</DateStyle>
    </div>
  )
}

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