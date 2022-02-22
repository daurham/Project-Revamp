import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import { useOverview } from '../../SharedContexts/OverviewProvider';
import Style from './Style';

function StyleSelector(props) {
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
// prodStyles.length === 0 ? null :
// Object.keys(objKey).length === 0
export default StyleSelector;

const Title = styled.h2`
  ${GlobalStyle.sub_title};
`;

const StyleTitle = styled.h3`
  ${GlobalStyle.para_title};
`;

const Selectors = styled.div`
  display: flex;
  flex-direction: row;
`;
