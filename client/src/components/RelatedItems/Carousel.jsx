import React, { useState } from 'react';
import Cards from './Cards';
import { useRelated } from './RelatedProvider';

function Carousel(props) {
  const { view } = props;
  const { header } = props;
  const { relatedItemsInfo } = useRelated();
  const [relatedView, setRelatedView] = useState(view);
  const [localItems, setLocalItems] = useState(
    localStorage.items ? JSON.parse(localStorage.items) : {},
  );
  const [bools, setBools] = useState(true);
  function refreshLocalItems(item) {
    console.log('refresh local items', localStorage.items);
    setBools(!bools);
    // JSON.parse(localStorage.items)
    setLocalItems(item);
  }

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
        {relatedItemsInfo.map((eachItem) =>
          (<Cards item={eachItem} key={eachItem.id} refresh={() => refreshLocalItems()} view setItems={setLocalItems}/>))}
        <div>Here ends related view map</div>
      </>
    ) : (
      <>
        <div>Hello Outfits</div>
        {Object.entries(localItems).map(([key, eachItem]) =>
        {
          console.log('trigger me', eachItem);
          return (<Cards bools={bools} view={false}
          item={eachItem}
          refresh={() => refreshLocalItems()} setItems={setLocalItems}/>)
        })
        }
        <div>Bye outfits</div>
      </>
    )}
    </>
  );
}

export default Carousel;
