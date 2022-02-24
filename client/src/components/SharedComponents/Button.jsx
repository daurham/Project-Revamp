import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

function Button({ label, handleClick }) {
  return (
    <ButtonStyled onClick={handleClick}>{label || 'label'}</ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  margin: 10px;
  background-color: white;
  border: 2px solid black;
  box-shadow: 2px 2px 1px 2px #8888;
  min-width: 140px;
  height: 40px;
  cursor: pointer;
  ${GlobalStyle.body};
`; // DELETE ME: added GlobalStyle.body so the btn font is poppins

export default Button;
