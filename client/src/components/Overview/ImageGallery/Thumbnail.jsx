import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';

function Thumbnail(props) {
  // console.log('props', props)
  const [thumbUrl, setThumbUrl] = useState(props.photo.thumbnail_url);
  // const [mainUrl, setMainUrl] = useState(props.photo.url);
  // const [index, setIndex] = useState(props.key)

  // function handleClick(event) {
  //   event.preventDefault();
  //   setIndex()
  //   props.toDisplayImage(mainUrl, true, index);
  // }

  return (
    <div>
      {thumbUrl && <img src={thumbUrl} />}
    </div>
  );
}

export default Thumbnail;
// thumb={photo.thumbnail_url} main={photo.url}
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
