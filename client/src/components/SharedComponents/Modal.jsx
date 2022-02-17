/* eslint-disable react/prop-types */
import React from 'react';
import modalcss from './Modal.css';

function QuestionModal({
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

export default QuestionModal;
