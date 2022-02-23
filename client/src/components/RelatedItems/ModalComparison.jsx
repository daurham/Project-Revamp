import React, { useState, useEffect } from 'react';
import modalcss from './Modal.css';
import { useRelated } from './RelatedProvider';

function ModalComparison(props) {
  const [combinedData, setCombinedData] = useState();
  const { showModal, setShowModal } = useRelated();
  const { otherProd } = props;
  const { currentProd } = props;
  // const realStorage = useRef();
  const currFeatures = currentProd.features;
  const otherFeatures = otherProd.features;
  const storage = [];
  const featStorage = {};

  // for (let i = 0; i < otherFeatures.length; i += 1) {
  //   if (currFeatures[i].feature === otherFeatures[i].feature) {

  //   }
  //   currFeatures[i].
  // }
  // ----- working but needs to be wiped each render ---------
  // for (let i = 0; i < otherFeatures.length; i += 1) {
  //   for (let j = 0; j < currFeatures.length; j += 1) {
  //     if (otherFeatures[i].feature === currFeatures[j].feature) {
  //       currFeatures[j].value2 = otherFeatures[i].value;
  //       break;
  //     } else {
  //       currFeatures.push(otherFeatures[i]);
  //       break;
  //     }
  //   }
  // }
  // ----- end ----
  // useEffect(() => {
  if (showModal) {
    for (let i = 0; i < currFeatures.length; i += 1) {
      featStorage[currFeatures[i].feature] = [currFeatures[i].value, '✗'];
    }
    for (let i = 0; i < otherFeatures.length; i += 1) {
      if (featStorage[otherFeatures[i].feature]) {
        const oldValue = featStorage[otherFeatures[i].feature].splice(0, 1);
        const newValue = oldValue.concat(otherFeatures[i].value);
        featStorage[otherFeatures[i].feature] = newValue;
      } else {
        featStorage[otherFeatures[i].feature] = ['✗', otherFeatures[i].value];
      }
    }
  }
  // });

  // for (let i = 0; i < currFeatures.length; i += 1) {
  //   featStorage[currFeatures[i].feature] = [currFeatures[i].value];
  // }

  // for (let i = 0; i < otherFeatures.length; i += 1) {
  //   if (featStorage[otherFeatures[i].feature]) {
  //     const oldValue = featStorage[otherFeatures[i].feature];
  //     const newValue = oldValue.concat(otherFeatures[i].value);
  //     featStorage[otherFeatures[i].feature] = newValue;
  //   } else {
  //     featStorage[otherFeatures[i].feature] = [0, otherFeatures[i].value];
  //   }
  // }

  // setCombinedData(featStorage);

  // for (let i = 0; i < currFeatures.length; i += 1) {
  //   for (let j = 0; j < otherFeatures.length; j += 1) {
  //     if (otherFeatures[j].feature === currFeatures[i].feature) {
  //       currFeatures[i].value2 = otherFeatures[j].value;
  //       // continue;
  //     } else {
  //       currFeatures.push(otherFeatures[j]);
  //       // continue;
  //     }
  //   }
  // }
  // for (let i = 0; i < currFeatures.length; i += 1) {
  //   storage.push(currFeatures[i].feature);
  // }

  console.log('featStorage', featStorage);
  console.log('objentries featStorage', Object.entries(featStorage));

  return (
    <div>
      <div className={modalcss.modalrow}>
        <div className={modalcss.comparecolumnleft}>
        </div>
        <div className={modalcss.comparecolumnmiddle}>
        </div>
        <div className={modalcss.comparecolumnright}>
        </div>
      </div>
      {Object.entries(featStorage).map((item, i) => (
        <div key={i} className={modalcss.modalrow}>
          <div className={modalcss.comparecolumnleft}>
            {item[1][0] === null ? '✓' : item[1][0]}
          </div>
          <div className={modalcss.comparecolumnmiddle}>
            {item[0]}
          </div>
          <div className={modalcss.comparecolumnright}>
            {item[1][1] === null ? '✓' : item[1][1]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModalComparison;
