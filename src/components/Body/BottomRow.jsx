// Library imports
import React from "react";
import styled, { keyframes } from "styled-components";

// Image imports
import Cubes from "../../assets/intro-cubes 1.svg";
import Piller from "../../assets/intro-pillar 1.svg";

export const BottomRow = () => {
  return (
    <RowContainer>
      <Image src={Cubes} alt="cube" />
      <Image src={Piller} alt="cube" />
    </RowContainer>
  );
};

const RowContainer = styled.div`
  position: relative;
  top: -550px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 110px;
  @media (max-width: 820px) {
    padding: 0px 10px;
    top: -400px;
  }
  @media (max-width: 480px) {
    padding: 0px 10px;
    top: -200px;
  }
`;

const ImageAnimation = keyframes`
0% {transform:scale(1.5);}
`;

const Image = styled.img`
  animation-name: ${ImageAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;
  @media (max-width: 820px) {
    animation: none;
  }
  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
  }
`;
