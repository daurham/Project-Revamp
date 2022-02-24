import React, { useState, useEffect } from 'react';
import Characteristic from './Characteristic';

function Characteristics({ meta, metaIds, sendCharacteristics }) {
  const [characteristics, setCharacteristics] = useState({
    ...metaIds
  });
  const [idArray, setIdArray] = useState([]);
  const getId = () => {
    const tempArr = []
    for (const key in meta.characteristics) {
      tempArr.push(meta.characteristics[key]['id'])
    }
    setIdArray([...idArray], tempArr)
  }

  const sendCharacteristic = (characteristicFrom) => {
    if(characteristicFrom.id !== undefined) {
      const newTodos = Object.assign({}, characteristics);
      newTodos[characteristicFrom.id] = characteristicFrom.value;
      setCharacteristics(newTodos);
    }
  }

  useEffect(()=>{
    getId()
    sendCharacteristics(characteristics)
  }, [characteristics])

  return (
    <>
      {Object.keys(meta.characteristics).map((character, index)=> (
        <Characteristic character={character} id={meta.characteristics[character]['id']} key={index}sendCharacteristic={sendCharacteristic}/>
      ))}
    </>
  )
};

export default Characteristics;