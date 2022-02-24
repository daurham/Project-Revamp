import React from 'react'
import styled from 'styled-components';

function SliderContent() {
  return (
    <Content>
      blah
    </Content>
  )
}

const Content = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;

  display: flex;
`

// width: ${props => props.width}px;
export default SliderContent