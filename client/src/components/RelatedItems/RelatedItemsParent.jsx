import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import custom hook created on line 9 of DataProvider
import { useData } from '../DataProvider';
import Carousel from './Carousel';
import RelatedProvider from './RelatedProvider';

function RelatedItemsParent() {
  const { productId } = useData();
  const { updateID } = useData();

  return (
    <div>
      <RelatedProvider>
        <Carousel header="Related Products" />
        <Carousel header="Your outfit" />
      </RelatedProvider>
    </div>
  );
}

export default RelatedItemsParent;
