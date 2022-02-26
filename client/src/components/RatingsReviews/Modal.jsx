import React from 'react';
import styled from 'styled-components';
import Form from './Form';

function Modal({ setIsOpen }) {
  return (
    <>
      <Background onClick={() => setIsOpen(false)} />
      <Centered>
        <ModalDiv>
          <ModalContent>
            <Form />
          </ModalContent>
        </ModalDiv>
      </Centered>
    </>
  );
}
const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 500vw;
  height: 1000vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalDiv = styled.div`
  width: fit-content;
  height: auto;
  background: white;
  color: white;
  z-index: 100;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;
const ModalContent = styled.div`
  width: 800px;
  z-index: 1000;
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  text-align: center;

`;

export default Modal;
