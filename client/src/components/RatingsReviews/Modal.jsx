import React from 'react';
import styles from './Modal.css';
import Form from './Form';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          </button>
          <div className={styles.modalContent}>
            <Form/>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Close
              </button>
              {/* <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;