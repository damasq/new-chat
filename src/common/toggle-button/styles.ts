import styled from "styled-components";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 16px;

  /* background-color: red; */
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 16px;

  background: #eceff2;
  
  ::before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    border-radius: 50%;
    top: -4px;
    
    background: #b8bec9;
  }
`

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + ${Slider} {
    background: #d5e6fb;
    &::before {
      left: 16px;
      background: #2F80ED;
    }
  }
`