import React from 'react';
import styled from 'styled-components';

function Button({label, handleClick}) {
  return (
    <>
    <ButtonStyled onClick={handleClick}>{label || 'label'}</ButtonStyled>
    </>
  )
}

const ButtonStyled = styled.button`
  margin: 10px;
  background-color: white;
  border: 2px solid black;
  box-shadow: 2px 2px 1px 2px #8888;
  min-width: 140px;
  height: 40px;
`

export default Button;