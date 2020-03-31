import styled from 'styled-components'

export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: #fff;
  font-size: 20px;
  line-height: 1;

  &:hover {
    background-color: #f00a;
  }
`
