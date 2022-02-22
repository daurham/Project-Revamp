import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import { useOverview } from '../../SharedContexts/OverviewProvider';

function Style(props) {
  const { setCurrentStyleId } = useOverview();

  // console.log(props)
  // console.log('st', prodStyles)
  // console.log('styles', prodStyles.map((eachStyle) => (eachStyle.photos[0].thumbnail_url)));

  const [styleId] = useState(props.id);

  // console.log('props', props)
  // console.log('styleID', styleId)

  function handleClick(event) {
    event.preventDefault();
    setCurrentStyleId(styleId);
    console.log('clicked')
  }

  return (
    <div className="Styles">
      <StyleImg src={props.eachStyle.photos[0].thumbnail_url} onClick={handleClick} />
    </div>
  );
}

export default Style;

const StyleImg = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 50%;
`;
