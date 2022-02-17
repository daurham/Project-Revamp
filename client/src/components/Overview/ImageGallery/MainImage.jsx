import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
// import axios from 'axios';
// import { useOverview } from '../../Context/OverviewProvider';
// import ovcss from '../Overview.css';
import imgcss from './MainImage.css';

function MainImage(props) {
  // console.log('props', props.style);
  const [currentImage, setCurrentImage] = useState(props.style.photos[0]);
  const [thumbnails, setThumbnails] = useState(props.style.photos);
  // console.log('current image', currentImage);
  // console.log('thumb', thumbnails);

  // useEffect(() => {
  //   setCurrentImage();
  // }, []);

  return (
    <>
      <div className={imgcss.mainimg}>
        {/* {(props.style !== undefined)
          ? (<img src={props.style.photos[0].url} />)
          : (<div>loading</div>)} */}
        <img src={currentImage.url} />
      </div>
      <div className={imgcss.thumbnail_grid}>
        <div className={imgcss.thumbnail}>
          {/* {(props.style !== undefined)
            ? (<div>{props.style.photos.map((photo) => (<img src={photo.thumbnail_url} />))}</div>)
            : (<div>loading</div>)} */}
          {thumbnails.map((photo) => (<img src={photo.thumbnail_url} />))}
        </div>
      </div>
    </>

  );
}

export default MainImage;

// console.log('props', props); // what am i?
// if (Array.isArray(props.images) && props.images.length > 0) {
// console.log('props img', props.images[0].photos);

// //   const [currentImage, setCurrentImage] = useState(props.images[0]);
// //   console.log('props curImg: ', currentImage); // so its less nested

// //   console.log('props im', props.images[0])
// }
// return !(props.images.length > 0) ? null : (
//   <div>
//   {props.images[0].photos.map((photo) => (<img src={photo.thumbnail_url} /> ))}
//   </div>

// <>
//   {(props.images.length > 0) ?
//   (<div>{props.images[0].photos.map((photo) => (<img src={photo.url} /> ))}</div>)
//   : (<div>loading</div>)}
// </>
