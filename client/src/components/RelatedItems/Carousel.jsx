import React, { useState } from 'react';
import Cards from './Cards';
import { useRelated } from './RelatedProvider';

function Carousel(props) {
  const { view } = props;
  const { header } = props;
  const { relatedItemsInfo, localData } = useRelated();
  const [relatedView] = useState(view);

  return (
    <>
      <div>{ header }</div>
      {relatedView ? (
        <>
          <div>Here begins related view map</div>
          {relatedItemsInfo.map((eachItem) => (
            <Cards
              view
              item={eachItem}
              key={eachItem.id}
            />
          ))}
          <div>Here ends related view map</div>
          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <>
          <div>Hello Outfits</div>
          {Object.values(localData).map((eachItem) => (
            <Cards
              view={false}
              item={eachItem}
              key={eachItem.id}
            />
          ))}
          <div>Bye outfits</div>
        </>
      )}
    </>
  );
}

export default Carousel;
