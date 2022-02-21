import React, { useState } from 'react';
import css from './Carousel.css';
import appcss from '../App.css';
import { useData } from '../SharedContexts/DataProvider';
import { useRelated } from './RelatedProvider';

function AddOutfitCard(props) {
  const { productId } = useData();
  const { setLocalData } = useRelated();

  // function onButtonClick() {
  //   let storage;
  //   if (!localStorage.items) {
  //     storage = {};
  //   } else {
  //     storage = JSON.parse(localStorage.items);
  //   }
  //   storage[productId] = item;
  //   localStorage.setItem('items', JSON.stringify(storage));
  //   setLocalData(JSON.parse(localStorage.items));
  // }

  return (
    <div className={css.card_holder}>
    {/* <div style={{height: '100vh'}}> */}

      <div className={css.card} role="presentation">
        <div className={css.addoutfitcarditself} role="presentation">
          {/* <img className={css.imgsize} src={item.thumbnail} alt="Item" /> */}
          {/* <div className={css.card_info_holder}> */}
          <div className={css.addoutfitcard}>
            {/* <div className={appcss.para_sm}>Add</div> */}
            {/* <div className={css.para_md}>Me</div> */}
            {/* <div className={appcss.para_sm}>To Outfits</div> */}
            {/* <div style={{fontSize: 21}}>Add To</div> */}
            <div>Add To</div>


            <div>Outfit</div>


            <button type="button" className={`${css.addoutfitcardbutton} ${css.addoutfitcardbutton}:hover`}>+</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddOutfitCard;
// (
// <>
// {render}
// <div role="presentation" onClick={() => setProductId(item.id)}>
//   <div>beg of card</div>
//   <div>{item.category}</div>
//   <div>{item.name}</div>
//   <div>{item.default_price}</div>
//   <img src={item.thumbnail} alt="item" />
//   <div>end of card</div>
// </div>
// </>
// )