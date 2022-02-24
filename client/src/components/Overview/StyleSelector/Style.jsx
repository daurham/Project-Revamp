import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import GlobalStyle from '../../GlobalStyle';
import { useOverview } from '../../SharedContexts/OverviewProvider';

function Style(props) {
  const { currentStyleId, setCurrentStyleId } = useOverview();

  // console.log('styles', prodStyles.map((eachStyle) => (eachStyle.photos[0].thumbnail_url)));

  const [styleId] = useState(props.id);

  // console.log('props', props);
  // console.log('current', currentStyleId);
  // console.log('styleID', styleId)

  function handleClick(event) {
    event.preventDefault();
    setCurrentStyleId(styleId);
    console.log('clicked');
  }

  if (!currentStyleId) {
    return null;
  }

  return (
    <div className="Styles">
      {currentStyleId === props.id
        ? (
          <FaCheck style={{
            position: 'absolute', height: '15px', width: '15px', color: 'black', paddingLeft: '38px',
          }}
          />
        ) : null}
      <StyleImg src={props.eachStyle.photos[0].thumbnail_url} onClick={handleClick} />
    </div>
  );
}

export default Style;

const StyleImg = styled.img`
  height: 50px;
  width: 50px;
  padding: 5px;
  border-radius: 50%;
  object-fit: cover;
`;
