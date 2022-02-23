import React, { useState, useEffect } from 'react';
import { useRelated } from './RelatedProvider';
// import appcss from '../App.css';
import css from './Carousel.css';
import styles from './Modal.css';

function CompareButton(props) {
  const { item } = props;
  // const { toggleModal } = props;
  const { showModal, setShowModal } = useRelated();
  const { modalData, setModalData } = useRelated();

  function onButtonClick() {
    setModalData(item);
    setShowModal((x) => !x);
  }

  // useEffect(() => {
  //   setShowModal((x) => !x);
  // }, [modalData]);

  // const { setLocalData } = useRelated();
  // const [isOpen, setIsOpen] = useState(false);

  // function removeItem() {
  //   const storage = JSON.parse(localStorage.items);
  //   let index;
  //   for (let i = 0; i < storage.length; i += 1) {
  //     if (storage[i].id === item.id) {
  //       index = i;
  //     }
  //   }
  //   storage.splice(index, 1);
  //   localStorage.setItem('items', JSON.stringify(storage));
  //   setLocalData(JSON.parse(localStorage.items));
  // }
  // let render;
  // if (isOpen) {
  //   render = (
  //     <>
  //     <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
  //     <div className={styles.centered}>
  //       <div className={styles.modal}>
  //         <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
  //         </button>
  //         <div className={styles.modalContent}>
  //         </div>
  //         <div className={styles.modalActions}>
  //           <div className={styles.actionsContainer}>
  //             <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
  //               Close
  //             </button>
  //             {/* <button
  //               className={styles.cancelBtn}
  //               onClick={() => setIsOpen(false)}
  //             >
  //               Cancel
  //             </button> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  //   )
  // }

  return (
    <>
      {/* {render} */}
      <div className={css.comparebutton_padding}>
        <button type="button" onClick={() => (onButtonClick())} className={css.comparebutton}>
          {/* <div className={css.para_md}> */}
          Compare
          {/* </div> */}
        </button>
      </div>
    </>
  );
}

export default CompareButton;
