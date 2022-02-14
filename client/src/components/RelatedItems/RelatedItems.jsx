import React from 'react';
// import custom hook created on line 9 of DataProvider
import { useData } from '../DataProvider';

function RelatedItems() {
  // deconstruct the context object passed into value, DataProvider line 29
  const { product } = useData();
  const { getProduct } = useData();
  console.log('related:', product);
  // use these two items below in render:
  // notice that we are accessing a property ".name" of the product object. only render a property,
  // otherwise you'll get an error. only using below example as proof of concept.
  return (
    <div>
      Display Product Name:&nbsp;
      {product.name}
      <button type="button" onClick={() => getProduct(40345)}> Get Another Product Name </button>
    </div>
  );
}

export default RelatedItems;
