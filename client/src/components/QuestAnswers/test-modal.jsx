// import React from 'react';
// import PropTypes from 'prop-types';

// import modalcss from './modal.css';

// function Modal({
//   children, customClass, show, closeCallback
// }) {
//   return (
//     <div
//       className={modalcss.modal}
//       style={{ display: show ? 'block' : 'none' }}
//     >
//       <div
//         className={modalcss.overlay}
//         onClick={closeCallback}
//       />
//       <div className={modalcss.modal_content}>
//         {children}
//         <button
//           type="button"
//           title="Close"
//           className={modalcss.close_modal}
//           onClick={closeCallback}
//         >
//           x
//           {/* <i className="fas fa-times" /> */}
//         </button>
//       </div>
//     </div>
//   );
// }

// Modal.propTypes = {
//   children: PropTypes.element,
//   customClass: PropTypes.string,
//   show: PropTypes.bool,
//   closeCallback: PropTypes.func,
// };

// Modal.defaultProps = {
//   children: <div>Empty Modal</div>,
//   customClass: '',
//   show: false,
//   closeCallback: () => (false),
// };

// export default Modal;
