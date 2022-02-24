import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Characteristic({ character, id, sendCharacteristic }) {
  const [characteristic, setCharacteristic] = useState({});

  const handleChange = (e) => {
    setCharacteristic({
      ...characteristic, id: (id), value: Number(e.target.value)
    })
  }
  useEffect(()=>{
    sendCharacteristic(characteristic)
  }, [characteristic])

  return (
    <Container>
      <Wrapper>
        <Character>{character}</Character>
        <LabelStyle>
          <label>
          <RadioButton
            name={character}
            type="radio"
            value="1"
          onClick={handleChange}
          />
            1
          </label>
        <label>
          <RadioButton
            name={character}
            type="radio"
            value="2"
            onClick={handleChange}
          />
            2
          </label>
        <label>
          <RadioButton
            name={character}
            type="radio"
            value="3"
            onClick={handleChange}
          />
            3
          </label>
        <label>
          <RadioButton
            name={character}
            type="radio"
            value="4"
            onClick={handleChange}
          />
            4
          </label>
        <label>
          <RadioButton
            name={character}
            type="radio"
            value="5"
            onClick={handleChange}
          />
          5
        </label>
        </LabelStyle>
      </Wrapper>
    </Container>
  )
};

const Container = styled.div`
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  `
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`
const Character = styled.p`
  grid-column-start: 2;
  grid-column-end: 1;
  justify-content: start;
`
const LabelStyle = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 4;
  align-items: center;
`
const RadioButton = styled.input`
  cursor: pointer;
`


export default Characteristic;