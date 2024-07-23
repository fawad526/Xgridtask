import styled from "styled-components";

export const StyledClock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  width: 100%;
  margin: auto;
  width: 400px;
  height: 400px;
`;
export const StyledOuter = styled.div`
  width: 400px;
  height: 400px;
  top: -4px;
  left: 905px;
  gap: 0px;
  border: 3.45px 0px 0px 0px;
  opacity: 0.2px;
  background: rgba(243, 243, 243, 1);
  border-radius: 50%;
`;
export const StyledLineOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  position: relative;
  top: 10%;
  left: 40px;
  gap: 0px;
  border: 5px 0px 0px 0px;
  opacity: 0px;
  border-radius: 50%;
  border: 5px solid black;
`;
export const StyledHand = styled.div`
  position:absolute;
  transform:rotate(${(props) => props.angleDeg}deg);
  display: flex;
  transform-origin: 100%;
  background: rgba(58, 58, 58, 1);
  width: 27.59px;
  height: 197.75px;
  top: 174.72px;

  gap: 0px;
  opacity: 0px;

`;
