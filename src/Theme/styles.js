import styled from 'styled-components';

export const RevealP = styled.p `
position: relative;
&:after{
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #E5E7E9;
  transform-origin: left;
  transform: rotateY(90deg);
  transition: transform 2s;

  }
  ${({hide}) => hide &&`
  &:after{
  transform: rotateY(0deg);
  }`
  }
`;
 export default RevealP;
