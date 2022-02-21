import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import { useOverview } from '../../Context/OverviewProvider';
// import Thumbnail from './Thumbnail';
import Carousel from './Carousel';
import './Carousel.css';
// import ovcss from '../Overview.css';
// import imgcss from './ImageGallery.css';

function ImageGallery() {
  const { currentStyle } = useOverview();
  // const [currentImage, setCurrentImage] = useState(props.style.photos[0]);
  const [clicked, setClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // function toDisplayImage(newPhoto, imagechanged, index2) {
  //   setCurrentImage({ url: newPhoto });
  //   setClicked(imagechanged);
  //   setCurrentIndex(index2);
  // }

  // const test() {
  //   d
  // }

  console.log('currentStyle', currentStyle);

  function handleClick(e) {
    setClicked(true);
    setCurrentIndex(Number(e.target.name));
    console.log('e.target', e.target.name);
    // console.log('in handleclick', currentIndex)
  }

  // useEffect(() => {
  //   handleClick();
  // }, [currentIndex])

  if (!currentStyle) {
    return null;
  }

  return (
    <div>
      {
        <div>
          <div style={{
            maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
          }}
          >
            <Carousel show={1} infiniteLoop>
              {/* {(currentStyle.photos.map((photo, index) => {
              console.log('here', currentIndex)
              if (currentIndex === index) {
                return (<img src={photo.url} key={index} />);
              }
            }))} */}
              {(currentStyle.photos.map((photo, index) => (<img src={photo.url} key={index} />)))}
            </Carousel>
          </div>
        </div>
      }

      {currentStyle.photos.length > 7 ? (
        <div>
          <div style={{
            maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
          }}
          >
            <Carousel show={7} infiniteLoop>
              {/* {(currentStyle.photos.map(
              (photo, index) => (
                <Thumbnail photo={photo} key={index} toDisplayImage={() => toDisplayImage} />),
            ))} */}
              {(currentStyle.photos.map(
                (photo, index) => (
                  <img
                    src={photo.thumbnail_url}
                    name={index}
                    onClick={handleClick}
                  />
                ),
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <div>
          <div style={{
            maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
          }}
          >
            {(currentStyle.photos.map(
              (photo, index) => (
                <img
                  src={photo.thumbnail_url}
                  key={index}
                  name={index}
                  onClick={handleClick}
                />
              ),
            ))}
          </div>
        </div>
      )}
    </div>

  );
}

export default ImageGallery;

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

{ /* {(props.style !== undefined)
? (<img src={props.style.photos[0].url} />)
: (<div>loading</div>)} */ }

{ /* {(props.style !== undefined)
? (<div>{props.style.photos.map((photo) => (<img src={photo.thumbnail_url} />))}</div>)
: (<div>loading</div>)} */ }
