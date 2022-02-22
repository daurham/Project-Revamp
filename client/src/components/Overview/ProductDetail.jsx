import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import StarRating from '../SharedComponents/StarRating';
import { useOverview } from '../SharedContexts/OverviewProvider';

function ProductDetail() {
  const { prodDetails } = useOverview();
  const { currentStyle } = useOverview();

  return (
    <div className="ProductDetails">
      {prodDetails && currentStyle && (
        <div className="ProductDetails">
          <Category>{prodDetails.category}</Category>
          <Title>{prodDetails.name}</Title>
          <Price>
            {currentStyle.sale_price
              ? (
                <P>
                  <s>{`$${currentStyle.original_price}`}</s>
                  {` $${currentStyle.sale_price}`}
                </P>
              )
              : (
                <P>
                  {`$${currentStyle.original_price}`}
                </P>
              )}
          </Price>
          {/* <StarRating currentProduct /> */}
        </div>
      )}
    </div>
  );
}
// prodStyles.length === 0 ? null :
// Object.keys(objKey).length === 0
export default ProductDetail;

const Title = styled.h1`
  ${GlobalStyle.title};
  margin: 0;
`;

const Category = styled.h2`
  ${GlobalStyle.para_sm};
  margin: 10px 0;
`;

const Price = styled.div`
  ${GlobalStyle.para_title};
`;

const P = styled.div`
  ${GlobalStyle.para_title};
  margin: 10px 0;
`;
