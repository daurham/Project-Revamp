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
          <input
            name={character}
            type="radio"
            value="1"
            // defaultChecked={characteristic.size}
          onClick={handleChange}
          />
            1
          </label>
        <label>
          <input
            name={character}
            type="radio"
            value="2"
            // defaultChecked={characteristic.size}
            onClick={handleChange}
          />
            2
          </label>
        <label>
          <input
            name={character}
            type="radio"
            value="3"
            // defaultChecked={characteristic.size}
            onClick={handleChange}
          />
            3
          </label>
        <label>
          <input
            name={character}
            type="radio"
            value="4"
            // defaultChecked={characteristic.size}
            onClick={handleChange}
          />
            4
          </label>
        <label>
          <input
            name={character}
            type="radio"
            value="5"
            // defaultChecked={characteristic.size}
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
const LabelStyle = styled.label`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 4;
  align-items: center;
`
export default Characteristic;