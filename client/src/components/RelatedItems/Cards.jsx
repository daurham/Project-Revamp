import React, { useState } from 'react';
import AddOutfit from '../SharedComponents/AddOutfit';
import RemoveOutfit from './RemoveOutfit';

function Cards(props) {
  const { item } = props;
  const { view } = props;
  const [relatedView, setRelatedView] = useState(view);

  let render;
  if (relatedView) {
    render = (
      <>
        <div>I am </div>
        <div>related</div>
        <AddOutfit item={item} />
      </>
    );
  } else {
    render = (
      <>
        <div>I am </div>
        <div>outfit</div>
        <RemoveOutfit item={item} />
      </>
    );
  }
  return (
    <>
      <div>beg of card</div>
      {render}
      <div>{item.category}</div>
      <div>{item.name}</div>
      <div>{item.default_price}</div>
      <img src={item.thumbnail} alt="item" />
      <div>end of card</div>
    </>
  );
}

export default Cards;
