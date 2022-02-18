import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { useRelated } from './RelatedProvider';
import css from './Carousel.css';
import appcss from '../App.css';

function Carousel(props) {
  const { view } = props;
  const { header } = props;
  const { shown } = props;
  const { children } = props;
  const { relatedItemsInfo, localData } = useRelated();
  const [relatedView] = useState(view);

  // for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(
    // relatedView ? relatedItemsInfo.length : Object.keys(localData).length,
  );

  // useeffect to set length from relatedItemsInfo
  // need to do as well from local storage? - prob not cause sync
  if (relatedView) {
    useEffect(() => {
      setLength(relatedItemsInfo.length);
    }, [relatedItemsInfo]);
  } else {
    useEffect(() => {
      setLength(Object.keys(localData).length);
    }, [localData]);
  }

  const shownNum = `show${shown}`;

  const next = () => {
    if (currentIndex < (length - shown)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <div className={css.header}>{ header }</div>
      {relatedView ? (
        <>
          <div className={css.carousel_container}>
            <div className={css.carousel_wrapper}>
              {
                currentIndex > 0
                && (
                <button onClick={prev} type="button" className={css.left_arrow}>
                  &lt;
                </button>
                )
              }
              <div className={css.carousel_content_wrapper}>
                <div
                  className={`${css.carousel_content} ${css[shownNum]}`}
                  style={{ transform: `translateX(-${currentIndex * (100 / shown)}%)` }}
                >
                  {console.log('relateditemsinfo in carousel', relatedItemsInfo)}
                  {relatedItemsInfo.map((eachItem) => (
                    <Cards
                      view
                      item={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </div>
              </div>
              {
                currentIndex < (length - shown)
                && (
                <button onClick={next} type="button" className={css.right_arrow}>
                  &gt;
                </button>
                )
              }
            </div>
          </div>
          <br />
          <br />
        </>
      ) : (
        <div className={css.carousel_container}>
          <div className={css.carousel_wrapper}>
            {
                currentIndex > 0
                && (
                <button onClick={prev} type="button" className={css.left_arrow}>
                  &lt;
                </button>
                )
              }
            <div className={css.carousel_content_wrapper}>
              <div
                className={`${css.carousel_content} ${css[shownNum]}`}
                style={{ transform: `translateX(-${currentIndex * (100 / shown)}%)` }}
              >
                {Object.values(localData).map((eachItem) => (
                  <Cards
                    view={false}
                    item={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </div>
            </div>
            {
                currentIndex < (length - shown)
                && (
                <button onClick={next} type="button" className={css.right_arrow}>
                  &gt;
                </button>
                )
              }
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;

// (
//   {Object.values(localData).map((eachItem) => (
//   <Cards
//     view={false}
//     item={eachItem}
//     key={eachItem.id}
//   />
// ))}
// )

// function Carousel(props) {
//   const { view } = props;
//   const { header } = props;
//   const { relatedItemsInfo, localData } = useRelated();
//   const [relatedView] = useState(view);

//   return (
//     <>
//       <div>{ header }</div>
//       {relatedView ? (
//         <>
//           <div>Here begins related view map</div>
//           {relatedItemsInfo.map((eachItem) => (
//             <Cards
//               view
//               item={eachItem}
//               key={eachItem.id}
//             />
//           ))}
//           <div>Here ends related view map</div>
//           <br />
//           <br />
//           <br />
//           <br />
//         </>
//       ) : (
//         <>
//           <div>Hello Outfits</div>
//           {Object.values(localData).map((eachItem) => (
//             <Cards
//               view={false}
//               item={eachItem}
//               key={eachItem.id}
//             />
//           ))}
//           <div>Bye outfits</div>
//         </>
//       )}
//     </>
//   );
// }
