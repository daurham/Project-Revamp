import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

function Button({ label, handleClick }) {
  return (
    <ButtonStyled onClick={handleClick}>{label || 'add label'}</ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  margin: 10px;
  background-color: white;
  border: 2px solid black;
  box-shadow: 2px 2px 1px 2px #8888;
  min-width: 140px;
  height: 40px;
  transition-duration: 0.2s;
  &:hover{
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }
`;

export default Button;
