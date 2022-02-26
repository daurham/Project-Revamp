import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import { useOverview } from '../../SharedContexts/OverviewProvider';
import Style from './Style';

function StyleSelector() {
  const { prodStyles } = useOverview();
  const { currentStyle } = useOverview();

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
  margin: 0 0 10px 0;
`;

const StyleTitle = styled.h3`
  ${GlobalStyle.para_title};
  margin: 0 0 10px 10px;
`;

const Selectors = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 25px 0;
`;
