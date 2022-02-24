import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { addReviews } from '../SharedContexts/RatingProvider';
import { useRatingData } from '../SharedContexts/RatingProvider';
import { useOverview } from '../SharedContexts/OverviewProvider';
import Characteristics from './Characteristics';
import StarClick from './StarClick';
import Button from '../SharedComponents/Button';

function Form() {
  const { addReviews, meta } = useRatingData();
  const { prodDetails } = useOverview();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    summary: '',
    body: '',
    recommend: true,
    photos: [],
    characteristics: {},
    rating: ''
  });

  const handleAddForm = (e) => {
    addReviews(formData);
  }
  const handleChange = (e) => {
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }
  const handleRadio = (e) => {
    const isChecked = e.currentTarget.value === 'true' ? true : false;
    setFormData({
      ...formData, [event.target.name]: isChecked
    })
  }
  const addRating = (rate) => {
    console.log('add rating clicked', rate)
    if (rate) {
      setFormData({
        ...formData, rating: Number(rate)
      })
    }
    console.log('rate updated', formData)
  }

  const sendCharacteristics = (characteristicsFrom) => {
    setFormData({
      ...formData, characteristics: characteristicsFrom
    })
    console.log('form data', formData)
  }

  const getMetaIds = () => {
    const metaIds = {}
    const entries = Object.entries(meta.characteristics);
    for (let [key, val] of entries) {
      metaIds[val.id] = 0
    }
    return metaIds;
  }

  return (
    <>
      <FormStyle >
      <form  onSubmit={handleAddForm}>
        <h1>Write Your Review</h1>
        <p>About {prodDetails.name}</p>
        <GridContainer>
          <Right>
            <Label>
              <LabelTitle>Email: <Required>*</Required></LabelTitle>
              <Input
                name="email"
                type="email"
                value={formData.email}
                placeholder="Example: jackson11@email.com"
                onChange={handleChange}
                required
                 />
            </Label>
            <Label>
              <LabelTitle>Name: <Required>*</Required></LabelTitle>
              <Input
                name="name"
                type="name"
                value={formData.nickname}
                placeholder="Your Name"
                onChange={handleChange}
                required />
            </Label>
            <Label>
              <LabelTitle>Summary: </LabelTitle>
              <TextAreaSummary
                name="summary"
                type="summary"
                value={formData.summary}
                placeholder="“Example: Best purchase ever!”"
                onChange={handleChange}
                maxLength={60}

                required />
            </Label>
            <Label>
              <LabelTitle>Review: <Required>*</Required></LabelTitle>
              <TextAreaReview
                name="body"
                value={formData.body}
                placeholder="Why did you like the product or not?"
                onChange={handleChange}
                maxLength={1000}
                required />
            </Label>
        </Right>
        <Left>
          <StarClick addRating={addRating} />
          <Recommend>
            Do you recommend this product? <Required>*</Required>
            <label>
              <input
                name="recommend"
                type="radio"
                value="true"
                defaultChecked={formData.recommend === true}
                onChange={handleRadio}
              />
            Yes
          </label>
            <label>
              <input
                name="recommend"
                type="radio"
                value="false"
                defaultChecked={formData.recommend === false}
                onChange={handleRadio}
              />
            No
          </label>
          </Recommend>
          <Characteristics meta={meta} metaIds={getMetaIds()} sendCharacteristics={sendCharacteristics} />
        </Left>
        </GridContainer>
        <Button label="POST REVIEW"><input type="submit">Post</input></Button>
        </form>
    </FormStyle>
    </>
  );
}

const FormStyle = styled.div`
  margin: 40px;
  font-size: 12px;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 15px;
  jusify-content: start-end;
`
const Left = styled.div`
  display: grid;
  width: 100%;
  float: left;
  padding: 20px;
  border-left: 1px solid grey;

`
const Right = styled.div`
  display: grid;
  padding-top: 30px;
`
const Input = styled.input`
  width: 200px;
  height: 10px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #d6d1d5;
`
const TextAreaReview = styled.textarea`
  resize: none;
  height: 60px;
  width: 260px;
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #d6d1d5;
`
const TextAreaSummary = styled.textarea`
  resize: none;
  font-size: 12px;
  height: 20px;
  width: 260px;
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #d6d1d5;
`
const LabelTitle = styled.span`
  padding: 5px 5px;
`
const Label = styled.label`
  justify-content: flex-start;
  align-items: center;
  margin: 0;
`
const Recommend = styled.div`
  margin: 10px;
  padding: 20px 10px;
`
const Required = styled.span`
  color: #e32;
  content: ' *';
  display:inline;
  padding-right: 5px;
`
export default Form;