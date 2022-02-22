import React, { useState } from 'react';
import css from './Carousel.css';
import appcss from '../App.css';
import { useData } from '../SharedContexts/DataProvider';
import { useRelated } from './RelatedProvider';
import { useOverview } from '../SharedContexts/OverviewProvider';

function AddOutfitCard(props) {
  // const { productId } = useData();
  const { setLocalData } = useRelated();
  const { prodDetails, prodStyles } = useOverview();
  const { item } = props;



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

    // ------- optimized without looping every time -------
    // const item = {
    //   ...prodDetails,
    //   thumbnail: prodStyles[0].photos[0].thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png',
    //   original_price: prodStyles[0].original_price,
    //   sale_price: prodStyles[0].sale_price,
    // };

    // const localItems = localStorage.items;
    // let parsedLocal;

    // if (localItems) {
    //   parsedLocal = JSON.parse(localStorage.items);
    //   let found = false;
    //   for (let i = 0; i < parsedLocal.length; i += 1) {
    //     if (parsedLocal[i].id === item.id) {
    //       found = true;
    //       break;
    //     }
    //   }
    //   if (!found) {
    //     parsedLocal.push(item);
    //   }
    // } else {
    //   parsedLocal = [item];
    // }

    // localStorage.setItem('items', JSON.stringify(parsedLocal));
    // setLocalData(JSON.parse(localStorage.items));

    // --- WORKING DO NOT TOUCH ----
    // if (!localStorage.items) {
    //   storage = [item];
    //   // storage.push(item);
    // } else {
    //   let found = false;
    //   storage = JSON.parse(localStorage.items);
    //   for (let i = 0; i < storage.length; i += 1) {
    //     if (storage[i].id === item.id) {
    //       found = true;
    //       break;
    //     }
    //   }
    //   if (!found) {
    //     storage.push(item);
    //   }
    // }
    // localStorage.setItem('items', JSON.stringify(storage));
    // setLocalData(JSON.parse(localStorage.items));
  }
  let render;
  if (item) {
    render = (
      <div className={css.addbutton_padding}>
        <button type="button" onClick={onButtonClick} className={css.add_button}>
          {/* <div className={css.para_md}> */}
          <div>

            +
          </div>
        </button>
      </div>
    )
  } else {
    render = (
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


                <button type="button" className={`${css.addoutfitcardbutton} ${css.addoutfitcardbutton}:hover`} onClick={onButtonClick}>+</button>
              </div>

            </div>
          </div>
        </div>
    )
  }

  return (
    <>
      {render}
    </>
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