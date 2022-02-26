import React from 'react';
import styled from 'styled-components';
import { useRelated } from './RelatedProvider';
import { useOverview } from '../SharedContexts/OverviewProvider';
import { CardContainer } from './RelatedItemsCSS';

function AddOutfitCard(props) {
  const { setLocalData } = useRelated();
  const { prodDetails, prodStyles } = useOverview();
  const { item } = props;

  function onButtonClick() {
    const itemDetails = item || {
      ...prodDetails,
      thumbnail: prodStyles[0].photos[0].thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png',
      original_price: prodStyles[0].original_price,
      sale_price: prodStyles[0].sale_price,
    };
    const localItems = localStorage.items;
    let parsedLocal;
    if (localItems) {
      parsedLocal = JSON.parse(localStorage.items);
      let found = false;
      for (let i = 0; i < parsedLocal.length; i += 1) {
        if (parsedLocal[i].id === itemDetails.id) {
          found = true;
          break;
        }
      }
      if (!found) {
        parsedLocal.push(itemDetails);
      }
    } else {
      parsedLocal = [itemDetails];
    }
    localStorage.setItem('items', JSON.stringify(parsedLocal));
    setLocalData(JSON.parse(localStorage.items));
  }
  let render;
  if (item) {
    render = (
      <AddButtonPadding>
        <ActionButton onClick={() => onButtonClick()}>
          +
        </ActionButton>
      </AddButtonPadding>
    );
  } else {
    render = (
      <div>
        <CardContainer>
          <AddCardContainer>
            <AddCard>
              <div>Add To</div>
              <div>Outfit</div>
              <AddOutfitButton onClick={() => onButtonClick()}>
                +
              </AddOutfitButton>
            </AddCard>
          </AddCardContainer>
        </CardContainer>
      </div>
    );
  }

  return (
    <>
      {render}
    </>
  );
}

export default AddOutfitCard;

const AddButtonPadding = styled.div`
  padding-left: 5%;
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const ActionButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 6%;
  background-color: rgb(255, 255, 255);
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 50vh;
  height: 20px;
  width: 20px;
  padding: 0px;
  border: 0px;
  font-size: 13px;
  font-weight: 300;
  font-family: inherit;
  &:hover {
    background-color: #e0e1e0c9;
  }
`;

const AddCardContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #eaeaeac9;
  &:hover{
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }
`;

const AddCard = styled.div`
  object-fit: cover;
  width:230px;
  height:311px;
  overflow: clip;
  font-size: 27px;
  font-weight: 100;
  font-style:oblique;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const AddOutfitButton = styled.div`
  background-color: #ffffffc9;
  border-style: solid;
  border-width: 1px;
  border-color: #c3c4c3c9;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: 200;
  border-radius: 15%;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    background-color: #e0e1e0c9;
  }
`;
