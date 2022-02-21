import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import { useOverview } from '../Context/OverviewProvider';
import Style from './Style';

function StyleSelector(props) {
  const { prodStyles } = useOverview();
  // console.log(props)
  // console.log('st', prodStyles)

  return (
    <div>
      {prodStyles.length > 0 && prodStyles.map(
        (eachStyle, index) => (
          <Style eachStyle={eachStyle} id={eachStyle.style_id} key={index} />),
      )}
    </div>
  );
}
// prodStyles.length === 0 ? null :
// Object.keys(objKey).length === 0
export default StyleSelector;
