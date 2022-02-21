import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import { useOverview } from '../Context/OverviewProvider';

function Style(props) {
  const { currentStyleId, setCurrentStyleId } = useOverview();
  // console.log(props)
  // console.log('st', prodStyles)
  // console.log('styles', prodStyles.map((eachStyle) => (eachStyle.photos[0].thumbnail_url)));

  const [styleId] = useState(props.id)

  // console.log('props', props)
  // console.log('styleID', styleId)

  function handleClick(event) {
    event.preventDefault();
    setCurrentStyleId(styleId);
  }

  return (
    <div>
      <img src={props.eachStyle.photos[0].thumbnail_url} onClick={handleClick}/>
    </div>
  );
}
// prodStyles.length === 0 ? null :
// Object.keys(objKey).length === 0
export default Style;
