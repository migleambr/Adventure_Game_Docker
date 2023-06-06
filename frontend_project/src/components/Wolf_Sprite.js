import SpritePage from '../assets/wolf/idle.png'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  100% { background-position: -1056px; }
`;
export const Wolf = styled.div`
  height: 528px;
  width: 528px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -16%);
  background: url(${SpritePage}) left center;
  animation: ${animation} .7s steps(2) infinite; 
`;


export default Wolf;