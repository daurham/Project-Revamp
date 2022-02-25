import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import { useOverview } from '../../SharedContexts/OverviewProvider';
import Style from './Style';

function StyleSelector() {
  const { prodStyles } = useOverview();
  const { currentStyle } = useOverview();
  // console.log(props)
  // console.log('st', prodStyles)

  return (
    <div className="StyleSelector">
      <Title>Style</Title>
      <StyleTitle>
        {currentStyle && currentStyle.name}
      </StyleTitle>
      <Selectors>
        {prodStyles.length > 0 && prodStyles.map(
          (eachStyle, index) => (
            <Style eachStyle={eachStyle} id={eachStyle.style_id} key={index} />),
        )}
      </Selectors>
    </div>
  );
}

export default StyleSelector;

const Title = styled.h2`
  ${GlobalStyle.sub_title};
  margin-top: 0;
  margin-bottom: 10px;
`;

const StyleTitle = styled.h3`
  ${GlobalStyle.para_title};
  margin-top: 0;
  margin-bottom: 10px;
`;

const Selectors = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 25px;
`;
