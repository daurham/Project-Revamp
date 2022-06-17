import React from 'react';
import styled from 'styled-components';
import { useRelated } from './RelatedProvider';

function CompareButton(props) {
  const { item } = props;
  const { setShowModal } = useRelated();
  const { setModalData } = useRelated();

  function onButtonClick() {
    setModalData(item);
    setShowModal((x) => !x);
  }

  return (
    <CompareButtonPadding>
      <CompareButtonStyle onClick={() => (onButtonClick())}>
        Compare
      </CompareButtonStyle>
    </CompareButtonPadding>
  );
}

export default CompareButton;

const CompareButtonPadding = styled.div`
  padding-left: 79%;
`;

const CompareButtonStyle = styled.button`
  z-index: 1;
  position: absolute;
  top: 6%;
  background-color: rgb(255, 255, 255);
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 50vh;
  height: 20px;
  width: 40px;
  padding: 0px;
  border: 0px;
  font-size: 7px;
  font-weight: 300;
  font-family: inherit;
  &:hover {
    background-color: #e0e1e0c9;
  }
`;
