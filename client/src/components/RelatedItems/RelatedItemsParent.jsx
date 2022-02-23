import React, { useState } from 'react';
import Carousel from './Carousel';
import Modal from './Modal';
import modalcss from './Modal.css';
import RelatedProvider, { useRelated } from './RelatedProvider';
import { useOverview } from '../SharedContexts/OverviewProvider';
import ModalComparison from './ModalComparison';

function RelatedItemsParent() {
  const [modal, setModal] = useState(false);
  const { showModal, setShowModal } = useRelated();
  const { modalData, setModalData } = useRelated();
  const { prodDetails, prodStyles } = useOverview();

  return (
    <div style={{
      maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
    }}
    >
      {/* <RelatedProvider> */}
      <Carousel header="Related Products" view shown={4}>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            <div>
              <div>do title werk</div>
              <div>do money werk</div>
              <div>do cat werk</div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
      </Carousel>
      <Carousel header="Your Outfit" view={false} shown={4} />
      {showModal && (
      <Modal show={showModal} closeCallback={() => (setShowModal((x) => !x))}>
        {/* className={modalcss.modalcenter} */}
        <>
          <div className={modalcss.modalheader}>Comparing</div>
          <div className={modalcss.modalrow}>
            {/* <div className={modalcss.modalcolumnleft}> */}
            <div className={modalcss.imagecolumnleft}>
            {/* <div className={modalcss.comparecolumnleft}> */}


              <img className={modalcss.modalimgsize} src={prodStyles[0].photos[0].thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'} alt="Item" />
            </div>
            {/* <div className={modalcss.comparecolumnright}> */}
            <div className={modalcss.imagecolumnright}>

            {/* <div className={modalcss.modalcolumnright}> */}

              <img className={modalcss.modalimgsize} src={modalData.thumbnail} alt="Item" />

            </div>
          </div>
          <div className={modalcss.featurerow}>
            <div className={modalcss.comparecolumnleft}>

              <div>{prodDetails.name}</div>
            </div>
            <div className={modalcss.comparecolumnmiddle}>
              Feature
            </div>
            <div className={modalcss.comparecolumnright}>
              <div>{modalData.name}</div>
            </div>
          </div>
        </>
        <ModalComparison
          otherProd={modalData}
          currentProd={prodDetails}
        />
      </Modal>
      )}
      {/* </RelatedProvider> */}
    </div>
  );
}

export default RelatedItemsParent;
