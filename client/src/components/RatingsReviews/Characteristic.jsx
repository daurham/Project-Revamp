import React, { useState, useEffect } from 'react';

function Characteristic({ character, id, sendCharacteristic }) {
  const [characteristic, setCharacteristic] = useState({});

  // NEED TO REPLACE Characteristic WITH NUMBERS
//   Comfort: {id: 135221, value: '3.1200000000000000'}
// Fit: {id: 135219, value: '2.6933333333333333'}
// Length: {id: 135220, value: '2.7600000000000000'}
// Quality: {id: 135222, value: '3.3567251461988304'}

  const handleChange = (e) => {
    setCharacteristic({
      ...characteristic, id: (id), value: Number(e.target.value)
    })
  }
  useEffect(()=>{
    sendCharacteristic(characteristic)
  }, [characteristic])
  return (
    <div className="characteristic">
      <div className="size">
      {character}
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
      </div>
    </div>
  )
};

export default Characteristic;