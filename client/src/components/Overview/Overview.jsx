import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import styled from 'styled-components';
import ImageGallery from './ImageGallery/ImageGallery';
import ProductDetail from './ProductDetail';
import StyleSelector from './StyleSelector';
import Test from './Test';
import Cart from './Cart';
import OverviewProvider, { useOverview } from '../Context/OverviewProvider';

function Overview() {
  const { prodDetails } = useOverview();
  const { prodStyles } = useOverview();
  const { currentStyleId, setCurrentStyleId } = useOverview();
  const { currentStyle, setCurrentStyle } = useOverview();
  // const [currentStyleId, setCurrentStyleId] = useState();
  // const [currentStyle, setCurrentStyle] = useState();

  // console.log('prodDetails', prodDetails)
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
      {/* <Container> */}
      <div>
        {prodDetails && prodStyles && currentStyle && currentStyleId ? (
          <OverviewProvider>
            <ImageGallery />
            <StyleSelector />
            <Cart />
            <ProductDetail />
          </OverviewProvider>
        ) : (<div>loading</div>)}
      </div>
      {/* </Container> */}
    </>
  );
}

export default Overview;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 50% 50%;
//   grid-template-rows: [row1-start] 300px [row1-end] 200px [third-line] 50px [fourth-line] 100px [last-line];`

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
