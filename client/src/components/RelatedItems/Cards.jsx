import React, { useState } from 'react';
import AddOutfit from '../SharedComponents/AddOutfit';
import { useData } from '../SharedContexts/DataProvider';
import RemoveOutfit from './RemoveOutfit';
import css from './Carousel.css';
import appcss from '../App.css';
import StarsRating from '../SharedComponents/StarRating';

function Cards(props) {
  const { item } = props;
  const { view } = props;
  const { setProductId } = useData();
  const [relatedView] = useState(view);

  let render;
  if (relatedView) {
    render = (
      <AddOutfit item={item} />
    );
  } else {
    render = (
      <RemoveOutfit item={item} />
    );
  }
  return (
    <div className={css.card_holder}>
      <div className={css.card} role="presentation">
        {render}
        <div className={css.card_itself} role="presentation" onClick={() => setProductId(item.id)}>
          <img className={css.imgsize} src={item.thumbnail} alt="Item" />
          <div className={css.card_info_holder}>
            <div className={appcss.para_sm}>{item.category}</div>
            <div className={css.para_md}>{item.name}</div>
            <div className={appcss.para_sm}>{item.default_price}</div>
            <StarsRating relatedProduct={item.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
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