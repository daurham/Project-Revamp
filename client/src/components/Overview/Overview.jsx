import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import ImageGallery from './ImageGallery/ImageGallery';
import ProductDetail from './ProductDetail';
import StyleSelector from './StyleSelector/StyleSelector';
import Test from './Test';
import Cart from './Cart';
import OverviewProvider, { useOverview } from '../SharedContexts/OverviewProvider';

function Overview() {
  const { prodDetails } = useOverview();
  const { prodStyles } = useOverview();
  const { currentStyleId, setCurrentStyleId } = useOverview();
  const { currentStyle, setCurrentStyle } = useOverview();

  // console.log('prodDetails', prodDetails);
  // console.log('prodStyles', prodStyles)
  // console.log('currentStyleID', currentStyleId)
  // console.log('currentStyle', currentStyle)

  // useEffect(() => {
  //   if (prodStyles.length > 0) {
  //     setCurrentStyleId(prodStyles[0].style_id);
  //   }
  // }, [prodStyles]);

  // useEffect(() => {
  //   prodStyles.forEach((style) => {
  //     if (style.style_id === currentStyleId) {
  //       setCurrentStyle(style);
  //     }
  //   })
  // }, [currentStyleId]);

  // function toSetCurrentStyleId(newId) {
  //   setCurrentStyleId(newId)
  // }

  return (
    <>
      {/* <Test /> */}
      <div className="Overview">
        {prodDetails && prodStyles && currentStyle && currentStyleId ? (
          <Container>
            <OverviewProvider>
              <ImageGalleryContainer>
                <ImageGallery />
              </ImageGalleryContainer>

              <ProductDetailsContainer>
                <ProductDetail />
              </ProductDetailsContainer>

              <StyleSelectorContainer>
                <StyleSelector />
              </StyleSelectorContainer>

              <CartContainer>
                <Cart />
              </CartContainer>

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
                      <p>{prodDetails.description}</p>
                    </DescriptionBody>
                  </Column>
                  <Column>
                    <DescriptionBody>
                      {(prodDetails.features.map((feature1, index) => (
                        <List>
                          <li>
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
    </>
  );
}

export default Overview;

const DesriptionHead = styled.h2`
  ${GlobalStyle.sub_title};
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

// const DesriptionTitle = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const DesTitle = styled.h3`
  ${GlobalStyle.para_title};
`;

const DescriptionBody = styled.div`
  ${GlobalStyle.para_md};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Container = styled.div`
  display: grid;
  margin: 100px 200px;
  grid-template-columns: 50% 50%;
  grid-template-rows: [row1-start] 200px
  [row1-end] 200px
  [third-line] 200px
  [fourth-line] 200px
  [last-line];
`;

const ImageGalleryContainer = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
`;

const ProductDetailsContainer = styled.div`
  margin-left: 10px;
  grid-column-start: 2;
  grid-row-start: 1;
`;

const StyleSelectorContainer = styled.div`
  margin-left: 10px;
  grid-column-start: 2;
  grid-row-start: 2;
`;

const CartContainer = styled.div`
  margin-left: 10px;
  grid-column-start: 2;
  grid-row-start: 3;
`;

const ProductDescriptionContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: 4;
`;

//   <p className={appcss.title}>Title</p>
//   <p className={appcss.sub_title}>Sub Title</p>
//   <p className={appcss.para_title}>para title</p>
//   <p className={appcss.para_md}>para md</p>
//   <p className={appcss.para_sm}>para sm</p>
//   <p>Default</p>

//   {/* {prodStyles.map( (eachStyle) => <div>{eachStyle.name}</div>)}
// {prodStyles[0].name} */}

// {prodStyles.length && prodStyles[2].name}
// {!prodStyles.length && (<div>loading</div>)}

// setCurrentId(prodStyles[0]);
// setCurrentProdName(prodStyles[0]);
// setCurrentProdSlogan
// setCurrentProdDes
// setCurrentProdCategory
// setCurrentStyleName
// setCurrentStyleOrgPrice
// setCurrentStyleSalePrice
// setCurrentStylePhotos
// setCurrentStyleSku

// const [currentStyle, setCurrentStyle] = useState()

// const [currentId, setCurrentId] = useState();
// const [currentProdName, setCurrentProdName] = useState();
// const [currentProdSlogan, setCurrentProdSlogan] = useState();
// const [currentProdDes, setCurrentProdDes] = useState();
// const [currentProdCategory, setCurrentProdCategory] = useState();
// const [currentStyleId, setCurrentStyleId] = useState();
// const [currentStyleName, setCurrentStyleName] = useState();
// const [currentStyleOrgPrice, setCurrentStyleOrgPrice] = useState();
// const [currentStyleSalePrice, setCurrentStyleSalePrice] = useState();
// const [currentStylePhotos, setCurrentStylePhotos] = useState([]);
// const [currentStyleSku, setCurrentStyleSku] = useState({});

// useEffect(() => {
//   setCurrentId(prodDetails.id);
//   setCurrentProdName(prodDetails.name);
//   setCurrentProdSlogan(prodDetails.slogan);
//   setCurrentProdDes(prodDetails.description);
//   setCurrentProdCategory(prodDetails.category);
//   // setCurrentStyleId(prodStyles[0].style_id);
//   // setCurrentStyleName(prodStyles[0].name);
//   // setCurrentStyleOrgPrice(prodStyles[0].original_price);
//   // setCurrentStyleSalePrice(prodStyles[0].sale_price);
//   // setCurrentStylePhotos(prodStyles[0].photos);
//   // setCurrentStyleSku(prodStyles[0].sku);
// }, [prodDetails]);

// {/* {prodStyles.length ? prodStyles[0].style_id : <div>loading</div>} <br/>
// {prodStyles.length ? prodStyles[0].name : <div>loading</div>} <br/>
// {prodStyles.length ? prodStyles[0].original_price : <div>loading</div>} <br/>
// {prodStyles.length ? prodStyles[0].sale_price : <div>loading</div>} <br/> */}
// {/* {prodStyles.length ? prodStyles[0].photos : <div>loading</div>} <br/>
// {prodStyles.length ? prodStyles[0].sku : <div>loading</div>} <br/> */}
// {/* {currentProdName !== undefined ? currentProdName : <div>loading</div>} */}
// {/* {currentStyleName !== undefined ? currentStyleName : <div>loading</div>} */}

// prodStyles.length === 0 ? null :
// Object.keys(objKey).length === 0
