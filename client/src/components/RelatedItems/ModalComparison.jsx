import React from 'react';
import styled from 'styled-components';
import modalcss from './Modal.css';
import { ModalColumnCenter, ModalColumnLeft, ModalColumnRight, ModalRow } from './RelatedItemsCSS';
import { useRelated } from './RelatedProvider';

function ModalComparison(props) {
  const { showModal } = useRelated();
  const { otherProd } = props;
  const { currentProd } = props;
  const currFeatures = currentProd.features;
  const otherFeatures = otherProd.features;
  const featStorage = {};

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

  return (
    <div>
      {Object.entries(featStorage).map((item, i) => (
        <ModalRow key={i}>
          <ModalColumnLeft>
            {item[1][0] === null ? '✓' : item[1][0]}
          </ModalColumnLeft>
          <ModalColumnCenter>
            {item[0]}
          </ModalColumnCenter>
          <ModalColumnRight>
            {item[1][1] === null ? '✓' : item[1][1]}
          </ModalColumnRight>
        </ModalRow>
      ))}
    </div>
  );
}

export default ModalComparison;

