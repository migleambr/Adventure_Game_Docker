import SpritePage from "../assets/troll/idle_troll.png"
import styled, { keyframes } from "styled-components"
const animation = keyframes`
  100% { background-position: -2400px; }
`;
export const Troll = styled.div`
  height: 600px;
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-15%, -18%);
  background: url(${SpritePage}) left center;
  animation: ${animation} .8s steps(4) infinite;
`;
export default Troll;