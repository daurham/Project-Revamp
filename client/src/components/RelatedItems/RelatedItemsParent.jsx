import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
// import Modal from './Modal';
import Modal from '../SharedComponents/Modal';
import { useRelated } from './RelatedProvider';
import { useOverview } from '../SharedContexts/OverviewProvider';
import ModalComparison from './ModalComparison';
import {
  ModalColumnCenter, ModalColumnLeft, ModalColumnRight, ModalRow,
} from './RelatedItemsCSS';
import Spinner from '../SharedComponents/Spinner';

function RelatedItemsParent() {
  const { showModal, setShowModal, modalData, relatedItemsInfo } = useRelated();
  const { prodDetails, prodStyles } = useOverview();

  return relatedItemsInfo.length === 0 ? <Spinner /> : (
    <ParentContainer>
      <Container>
        <Carousel header="Related Products" view />
        <Carousel header="Your Outfit" view={false} />
        {showModal && (
        <Modal show={showModal} closeCallback={() => (setShowModal((x) => !x))}>
          <>
            <ModalHeader>Comparing</ModalHeader>
            <ModalRow>
              <ModalImageLeft>
                <ModalImage src={prodStyles[0].photos[0].thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'} alt="Item" />
              </ModalImageLeft>
              <ModalImageRight>
                <ModalImage src={modalData.thumbnail} alt="Item" />
              </ModalImageRight>
            </ModalRow>

            <ModalFeatureRow>
              <ModalColumnLeft>
                <div>{prodDetails.name}</div>
              </ModalColumnLeft>
              <ModalColumnCenter>
                Feature
              </ModalColumnCenter>
              <ModalColumnRight>
                <div>{modalData.name}</div>
              </ModalColumnRight>
            </ModalFeatureRow>
          </>
          <ModalComparison
            otherProd={modalData}
            currentProd={prodDetails}
          />
        </Modal>
        )}
      </Container>
    </ParentContainer>
  );
}

export default RelatedItemsParent;

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
`;

const ParentContainer = styled.div`
`;
// display: flex;
// justify-self: center;
  // justify-items: center;
// justify-content: center;
  // display: flex;
// max-width: 1200px;

const ModalImage = styled.img`
  object-fit: cover;
  width:165px;
  height:165px;
  overflow: clip;
`;

const ModalImageLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  flex: 10;
  padding-right: 30px;
`;

const ModalHeader = styled.div`
  display:flex;
  align-self: center;
  justify-content: center;
  padding-bottom: 15px;
  font-style: oblique;
  font-size: 20px;
`;

const ModalFeatureRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 5px;
  border-bottom: solid;
  border-width: thin;
  font-weight: 400;
  font-size: 15px;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const ModalImageRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  flex: 10;
  padding-left: 30px;
`;
