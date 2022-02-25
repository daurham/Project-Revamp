import React from 'react';
import styled from 'styled-components';
import {
  FaInstagram, FaFacebookF, FaTwitter, FaPinterestP,
} from 'react-icons/fa';
import GlobalStyle from '../GlobalStyle';
import ImageGallery from './ImageGallery/ImageGallery';
import ProductDetail from './ProductDetail';
import StyleSelector from './StyleSelector/StyleSelector';
// import Test from './Test';
import Cart from './Cart';
import OverviewProvider, { useOverview } from '../SharedContexts/OverviewProvider';

function Overview() {
  const { prodDetails } = useOverview();
  // const { prodStyles } = useOverview();
  // const { currentStyleId } = useOverview();
  // const { currentStyle } = useOverview();

  // console.log('prodD', prodDetails)
  // console.log('prodS', prodStyles)
  // console.log('ID', currentStyleId)
  // console.log('Styles', currentStyle)

  if (Object.keys(prodDetails).length === 0) {
    return null;
  }

  return (
    <div className="Overview">
      {prodDetails ? (
        <Container>
          <OverviewProvider>
            <ImageGalleryContainer>
              <ImageGallery />
            </ImageGalleryContainer>

            <ProductDetailsContainer>
              <ProductDetail />
            {/* </ProductDetailsContainer> */}

            {/* <StyleSelectorContainer> */}
              <StyleSelector />
            {/* </StyleSelectorContainer> */}

            {/* <CartContainer> */}
              <Cart />
              <a href="https://www.instagram.com">
                <FaInstagram
                  className="instagram"
                  style={{
                    margin: '10px', height: '20px', width: '20px', color: 'black',
                  }}
                />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebookF style={{
                  margin: '10px', height: '20px', width: '20px', color: 'black',
                }}
                />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter style={{
                  margin: '10px', height: '20px', width: '20px', color: 'black',
                }}
                />
              </a>
              <a href="https://www.pinterest.com">
                <FaPinterestP style={{
                  margin: '10px', height: '20px', width: '20px', color: 'black',
                }}
                />
              </a>
            {/* </CartContainer> */}
            </ProductDetailsContainer>

            <ProductDescriptionContainer>
              <DesriptionHead>Product Description</DesriptionHead>
              <Row>
                <Column>
                  <DesTitle>Description</DesTitle>
                </Column>
                <Column>
                  <DesTitle>Features</DesTitle>
                </Column>
              </Row>

              <Row>
                <Column>
                  <DescriptionBody>
                    <p style={{ margin: '0' }}>{prodDetails.description}</p>
                  </DescriptionBody>
                </Column>
                <Column>
                  <DescriptionBody>
                    {(prodDetails.features.map((feature1, index) => (
                      <List key={index}>
                        <li style={{ margin: '0' }}>
                          {`${feature1.feature} :
                        ${feature1.value}`}
                        </li>
                      </List>
                    )))}
                  </DescriptionBody>
                </Column>
              </Row>
            </ProductDescriptionContainer>

          </OverviewProvider>
        </Container>
      ) : (<div>loading</div>)}
    </div>
  );
}

export default Overview;

const DesriptionHead = styled.h2`
  ${GlobalStyle.sub_title2};
  margin-top: 0;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const DesTitle = styled.h3`
  ${GlobalStyle.para_title};
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 10px
`;

const DescriptionBody = styled.div`
  ${GlobalStyle.para_md};
  margin-right: 20px;
  margin-top: 0;
  margin-left: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: grid;
  margin-top: 3%;
  grid-template-columns: 50% 50%;
  grid-template-rows: [row1-start] auto
  [row1-end] 25%
  [last-line];
`;

// const Container = styled.div`
//   display: grid;
//   margin-top: 3%;
//   grid-template-columns: 50% 50%;
//   grid-template-rows: [row1-start] 20%
//   [row1-end] 25%
//   [third-line] 30%
//   [fourth-line] 25%
//   [last-line]
// ';

const ImageGalleryContainer = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

// const ImageGalleryContainer = styled.div`
//   grid-column-start: 1;
//   grid-row-start: 1;
//   grid-row-end: span 3;
// `;

const ProductDetailsContainer = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
`;

// const ProductDetailsContainer = styled.div`
//   margin-left: 10px;
//   grid-column-start: 2;
//   grid-row-start: 1;
// `;

// const StyleSelectorContainer = styled.div`
// margin-left: 10px;
// grid-column-start: 2;
// grid-row-start: 1;
// `;

// const StyleSelectorContainer = styled.div`
//   margin-left: 10px;
//   grid-column-start: 2;
//   grid-row-start: 2;
// `;

// const CartContainer = styled.div`
// margin-left: 10px;
// grid-column-start: 2;
// grid-row-start: 1;
// `;

// const CartContainer = styled.div`
//   margin-left: 10px;
//   grid-column-start: 2;
//   grid-row-start: 3;
// `;

const ProductDescriptionContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  margin-top: 3%;
`;

// const ProductDescriptionContainer = styled.div`
//   grid-column-start: 1;
//   grid-column-end: 3;
//   grid-row-start: 4;
// `;
