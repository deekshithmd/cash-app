import React from "react";
import styled from "styled-components";
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
  @media (max-width:820px){
    padding:0px 10px;
    top:-400px;
  }
  @media (max-width:480px){
    padding:0px 10px;
    top:-200px;
  }
`;

const Image = styled.img`
@media (max-width:480px){
width:170px;
height:170px;
}
`;