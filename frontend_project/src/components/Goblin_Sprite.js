import SpritePage from '../assets/goblin/Idle.png'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  100% { background-position: -2400px; }
`;
export const Goblin = styled.div`
  height: 600px;
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -16%);
  background: url(${SpritePage}) left center;
  animation: ${animation} .7s steps(4) infinite; 
`;


export default Goblin;