import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
import axios from 'axios';
import { useOverview } from '../Context/OverviewProvider';

function ProductDetail() {
  const { prodDetails } = useOverview();
  const { currentStyle } = useOverview();

  return (
    <div>
      {prodDetails && currentStyle && (
        <div>
          {prodDetails.category}
          {prodDetails.name}
          {currentStyle.original_price}
          {currentStyle.style_price && currentStyle.style_price}
          {prodDetails.description}
        </div>
      )}
    </div>
  );
}
// prodStyles.length === 0 ? null :
// Object.keys(objKey).length === 0
export default ProductDetail;
