import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import MainImage from './ImageGallery/MainImage';
import Thumbnail from './ImageGallery/Thumbnail';
import ProductDetail from './ProductDetail';
import { useOverview } from '../Context/OverviewProvider';
// import css from './Overview.css';
import ovcss from './Overview.css';

function Overview() {
  const { prodDetails } = useOverview();
  const { prodStyles } = useOverview();
  const [currentStyle, setCurrentStyle] = useState();

  console.log('detail', prodDetails)
  console.log('style', prodStyles)
  console.log('current style', currentStyle)
  // console.log('current image', currentImage)

  useEffect(() => {
    setCurrentStyle(prodStyles[0]);
  }, [prodStyles]);

  return (
    <>
      <div className={ovcss.imggallery}>
        <MainImage style={currentStyle}/>
        {/* <Thumbnail images={prodStyles}/> */}
      </div>

      <ProductDetail />

    </>
  );
}

export default Overview;

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