import React from 'react';
// import custom hook created on line 9 of DataProvider
import { useData } from '../DataProvider';

function RelatedItems() {
  // deconstruct the context object passed into value, DataProvider line 29
  const { productId } = useData();
  const { getProductId } = useData();
  // use these two items below in render:
  // notice that we are accessing a property ".name" of the product object. only render a property,
  // otherwise you'll get an error. only using below example as proof of concept.
  return (
    <div>
      Display Product Name:&nbsp;
      {productId}
      <button type="button" onClick={() => getProductId()}> Get Another Product Name </button>
    </div>
  );
}

export default RelatedItems;
