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
      // setIdArray([...idArray], meta.characteristics[key]['id'])
      tempArr.push(meta.characteristics[key]['id'])
      // console.log(tempArr)
    }
    setIdArray([...idArray], tempArr)
    // console.log('idARR', idArray)
  }

  const sendCharacteristic = (characteristicFrom) => {
    if(characteristicFrom.id !== undefined) {
      const newTodos = Object.assign({}, characteristics);
      newTodos[characteristicFrom.id] = characteristicFrom.value;
      setCharacteristics(newTodos);
    }
    // console.log('characteristicFrom', characteristicFrom)

    // const temp = {}
    // characteristics[characteristicFrom.id]=characteristicFrom.value
    // setCharacteristics({...characteristics, temp})

  }

  useEffect(()=>{
    getId()
    sendCharacteristics(characteristics)
  }, [characteristics])

  return (
    <>
      {Object.keys(meta.characteristics).map((character)=> (
        <Characteristic character={character} id={meta.characteristics[character]['id']} sendCharacteristic={sendCharacteristic}/>
      ))}
    </>
  )
};

export default Characteristics;