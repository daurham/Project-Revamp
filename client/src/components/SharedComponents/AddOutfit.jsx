import React from 'react';

function AddOutfit(props) {
  const { item } = props;
  const { refresh } = props;
  const { setItems } = props;

  function onButtonClick() {
    let storage;
    if (!localStorage.items) {
      storage = {};
    } else {
      storage = JSON.parse(localStorage.items);
    }
    storage[item.id] = item;
    localStorage.setItem('items', JSON.stringify(storage));
    console.log('add item', localStorage.items);
    const l = JSON.parse(localStorage.items);
    // refresh(l);
    setItems(l);
  }

  return (
    <button type="button" onClick={onButtonClick}>
      +
    </button>
  );
}

export default AddOutfit;
