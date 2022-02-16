import React from 'react';
import { useRelated } from '../RelatedItems/RelatedProvider';

function AddOutfit(props) {
  const { item } = props;
  const { setLocalData } = useRelated();

  function onButtonClick() {
    let storage;
    if (!localStorage.items) {
      storage = {};
    } else {
      storage = JSON.parse(localStorage.items);
    }
    storage[item.id] = item;
    localStorage.setItem('items', JSON.stringify(storage));
    setLocalData(JSON.parse(localStorage.items));
  }

  return (
    <button type="button" onClick={onButtonClick}>
      +
    </button>
  );
}

export default AddOutfit;
