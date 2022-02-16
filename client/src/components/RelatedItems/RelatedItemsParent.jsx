import React from 'react';
import Carousel from './Carousel';
import RelatedProvider from './RelatedProvider';

function RelatedItemsParent() {
  return (
    <div>
      <RelatedProvider>
        <Carousel header="Related Products" view />
        <Carousel header="Outfit" view={false} />
      </RelatedProvider>
    </div>
  );
}

export default RelatedItemsParent;
