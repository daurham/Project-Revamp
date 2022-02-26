import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useOverview } from '../../SharedContexts/OverviewProvider';

function Style(props) {
  const { currentStyleId, setCurrentStyleId } = useOverview();

  const [styleId] = useState(props.id);

  function handleClick(event) {
    event.preventDefault();
    setCurrentStyleId(styleId);
  }

  if (!currentStyleId) {
    return null;
  }

  return (
    <div className="Styles">
      {currentStyleId === props.id
        ? (
          <FaCheck style={{
            position: 'absolute', height: '15px', width: '15px', color: 'black', paddingLeft: '45px',
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
margin: 0 10px;
border-radius: 50%;
object-fit: cover;
&:hover{
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
}
`;
