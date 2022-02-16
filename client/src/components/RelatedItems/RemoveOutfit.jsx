import React from 'react';

function RemoveOutfit(props) {
  const { item } = props;
  const { refresh } = props;
  const { setItems } = props;

  function removeItem() {
    const storage = JSON.parse(localStorage.items);
    delete storage[item.id];
    localStorage.setItem('items', JSON.stringify(storage));
    const l = JSON.parse(localStorage.items);
    // refresh(l);
    setItems(l);
  }

  return (
    <button type="button" onClick={removeItem}>
      X
    </button>
  );
}

export default RemoveOutfit;
