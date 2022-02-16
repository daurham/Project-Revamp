import React from 'react';
import { useRelated } from './RelatedProvider';

function RemoveOutfit(props) {
  const { item } = props;
  const { setLocalData } = useRelated();

  function removeItem() {
    const storage = JSON.parse(localStorage.items);
    delete storage[item.id];
    localStorage.setItem('items', JSON.stringify(storage));
    setLocalData(JSON.parse(localStorage.items));
  }

  return (
    <button type="button" onClick={removeItem}>
      X
    </button>
  );
}

export default RemoveOutfit;
