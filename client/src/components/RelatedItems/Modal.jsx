// import React from 'react';
// import styles from './Modal.css';
// import Form from './Form';

// function Modal({ setIsOpen }) {
//   return (
//     <>
//       <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <div className={styles.modal}>
//           <button className={styles.closeBtn} onClick={() => setIsOpen(false)} />
//           <div className={styles.modalContent}>
//             <Form />
//           </div>
//           <div className={styles.modalActions}>
//             <div className={styles.actionsContainer}>
//               <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
//                 Close
//               </button>
//               {/* <button
//                 className={styles.cancelBtn}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Cancel
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Modal;

// begin jakes modal

import React from 'react';
import modalcss from './Modal.css';

function Modal({
  show,
  children,
  closeCallback,
}) {
  return (
    <div
      className={modalcss.modal}
      style={{ display: show ? 'block' : 'none' }}
    >
      <div
        className={modalcss.overlay}
        onClick={closeCallback}
      />
      <div className={modalcss.modal_content}>
        {children}
        <button
          type="button"
          title="Close"
          className={modalcss.close_modal}
          onClick={closeCallback}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Modal;
