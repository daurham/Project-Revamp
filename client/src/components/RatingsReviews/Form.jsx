import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { addReviews } from '../SharedContexts/RatingProvider';
import { useRatingData } from '../SharedContexts/RatingProvider';
import Characteristics from './Characteristics';

function Form() {
  const { addReviews } = useRatingData();
  const { meta } = useRatingData();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    summary: '',
    body: '',
    recommend: true,
    photos: [],
    characteristics: {}
  });

  const handleSubmit = (e) => {
    event.preventDefault();
    addReviews(formData);
    console.log('form data from handlesubmit', formData)
  }
  const handleChange = (e) => {
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }
  const handleRadio = (e) => {
    const isChecked = e.currentTarget.value === 'true' ? true : false;
    // formData.recommend = isChecked;
    setFormData({
      ...formData, [event.target.name]: isChecked
    })
  }

  const sendCharacteristics = (characteristicsFrom) => {
    console.log('Form', characteristicsFrom)
    setFormData({
      ...formData, characteristics: characteristicsFrom
    })
    console.log('Form data', formData)
  }

  const getMetaIds = () => {
    const metaIds = {}
    const entries = Object.entries(meta.characteristics);

    for (let [key, val] of entries) {
      metaIds[val.id] = 0
    }
    return metaIds;
  }

  useEffect(()=>{

  }, [formData])

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h1>Write Your Review</h1>
      <p>About the product</p>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="Example: jackson11@email.com"
          onChange={handleChange}
          required />
      </label>

      <label>
        Name:
        <input
          name="name"
          type="name"
          value={formData.nickname}
          placeholder="Example: jackson11!"
          onChange={handleChange}
          required />
      </label>

      <label>
        Review Summary
        <input
          name="summary"
          type="summary"
          value={formData.summary}
          onChange={handleChange}
          required />
      </label>
      <label>
        Review
        <input
          name="body"
          value={formData.body}
          placeholder="Why did you like the product or not?"
          onChange={handleChange}
          required>
        </input>
      </label>
      <div className="radio">
        Do you recommend this product?
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
      </div>
      <div className="radio">
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
      </div>
      <Characteristics meta={meta} metaIds={getMetaIds()} sendCharacteristics={sendCharacteristics}/>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={getMetaIds}>Submit1</button>
    </FormStyle>
  );
}

const FormStyle = styled.div`
  position: relevant;
  height: 500px;
`

export default Form;