import SpritePage from '../assets/hero_sprites/Idle.png'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  100% { background-position: -6400px; }
`;
export const Hero_Shop = styled.div`
  height: 800px;
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -23%);
  background: url(${SpritePage}) left center;
  animation: ${animation} .8s steps(8) infinite; 
`;


export default Hero_Shop;
