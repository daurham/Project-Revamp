import React from 'react';
import styled from 'styled-components';
import { useRelated } from './RelatedProvider';
import { ActionButton } from './AddOutfit';

function RemoveOutfit(props) {
  const { item } = props;
  const { setLocalData } = useRelated();

  function removeItem() {
    const storage = JSON.parse(localStorage.items);
    let index;
    for (let i = 0; i < storage.length; i += 1) {
      if (storage[i].id === item.id) {
        index = i;
      }
    }
    storage.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(storage));
    setLocalData(JSON.parse(localStorage.items));
  }

  return (
    <RemoveButtonPadding>
      <ActionButton onClick={() => removeItem()}>
        x
      </ActionButton>
    </RemoveButtonPadding>
  );
}

export default RemoveOutfit;

const RemoveButtonPadding = styled.div`
  padding-left: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
