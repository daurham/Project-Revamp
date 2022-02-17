import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
import axios from 'axios';
import { useOverview } from '../Context/OverviewProvider';

function ProductDetail() {
  return (
    <div>
      {/* {prodStyles.map( (eachStyle) => <div>{eachStyle.name}</div>)} */}
      {/* {prodStyles[0]} */}
    </div>
  );
}
// prodStyles.length === 0 ? null :
// Object.keys(objKey).length === 0
export default ProductDetail;
