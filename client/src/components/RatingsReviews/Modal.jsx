import React from 'react';
import Form from './Form';
import styled from 'styled-components';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <Background onClick={() => setIsOpen(false)} />
      <Centered>
        <ModalDiv>
          <ModalContent>
            <Form/>
          </ModalContent>
          <ModalActions>
            <ActionsContainer>
              <CloseBtn onClick={() => setIsOpen(false)}>
                Close
              </CloseBtn>
              <SubmitBtn
                onClick={() => setIsOpen(false)}
              >
                Submit
              </SubmitBtn>
            </ActionsContainer>
          </ModalActions>
        </ModalDiv>
      </Centered>
    </>
  );
};
const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 500vw;
  height: 500vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`
const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ModalDiv = styled.div`
  width: fit-content;
  height: auto;
  background: white;
  color: white;
  z-index: 100;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`
const ModalContent = styled.div`
width: 800px;
  z-index: 1000;
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  text-align: center;

`
const ModalActions = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`
const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`

const CloseBtn = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #2c3e50;
  background: #fcfcfc;
  transition: all 0.1s ease;
  &:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
`
const SubmitBtn = styled.button `
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: black;
  background: #fcfcfc;
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 0 10px 20px -10px rgba(105, 62, 78, 0.6);
    transform: translateY(-2px);
    background: #fcfcfc;
  }
`
export default Modal;