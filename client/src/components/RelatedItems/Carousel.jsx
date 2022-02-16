import React, { useState } from 'react';
import Cards from './Cards';
import { useRelated } from './RelatedProvider';

function Carousel(props) {
  const { view } = props;
  const { header } = props;
  const { relatedItemsInfo, localData } = useRelated();
  const [relatedView, setRelatedView] = useState(view);

  // function refreshLocalItems(item) {
  //   console.log('refresh local items', localStorage.items);
  //   // JSON.parse(localStorage.items)
  //   setLocalItems(item);
  // }

  // let render;
  // if (relatedView) {
  //   render = (
  //     <>
  //       <div>Here begins related view map</div>
  //       {relatedItemsInfo.map((eachItem) =>
  //         (<Cards item={eachItem} key={eachItem.id} refresh={() => refreshLocalItems()} view />))}
  //       <div>Here ends related view map</div>
  //     </>
  //   );
  // } else {
  //   console.log(Object.values(localItems));
  //   render = (
  //     <>
  //       <div>Hello Outfits</div>
  //       {Object.values(localItems).map((eachItem) =>
  //       (<Cards bools={bools} view={false}
  //         item={eachItem} key={eachItem.id}
  //       refresh={() => refreshLocalItems()}  />))}
  //       <div>Bye outfits</div>
  //     </>
  //   );
  // }

  // (
  //   <>
  //     <div>Hello Outfits</div>
  //     {Object.values(localItems).map((eachItem) =>
  //     (<Cards bools={bools} view={false}
  //       item={eachItem} key={eachItem.id}
  //     refresh={() => refreshLocalItems()}  />))}
  //     <div>Bye outfits</div>
  //   </>
  // )

  //  key={eachItem.id}

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
