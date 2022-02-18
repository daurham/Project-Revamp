import React from 'react';
import styled from 'styled-components';

function Button({label}) {
  return (
    <>
    <ButtonStyled>{label || 'label'}</ButtonStyled>
    </>
  )
}

export default Button;

const ButtonStyled = styled.button`
  margin: 10px;
  background-color: white;
  border: 2px solid black;
  box-shadow: 2px 2px 1px 2px #8888;
  min-width: 140px;
  height: 40px;
`