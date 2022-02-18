import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
import axios from 'axios';
import { useOverview } from '../../SharedContexts/OverviewProvider';
import ovcss from '../Overview.css';
import thcss from './Thumbnail.css';

function Thumbnail(props) {

  return (
    // <>
    //   {(props.images.length > 0) ?
    //   (<div>{props.images[0].photos.map((photo) => (<img src={photo.url} /> ))}</div>)
    //   : (<div>loading</div>)}
    // </>

    <div className={thcss.thumbnail_grid}>
      <div className={thcss.thumbnail}>
        hi
      </div>
    </div>

  )

}

export default Thumbnail;

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