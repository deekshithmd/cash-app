import React from "react";
import styled from "styled-components";
import Cube1 from "../../assets/intro-cube 1.svg";
import Stairs from "../../assets/intro-stairs 1.svg";

export const FirstRow = () => {
  return (
    <RowContainer>
      <CubeImage src={Cube1} alt="cube" />
      <StairImage src={Stairs} alt="cube" />
    </RowContainer>
  );
};

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 110px;
  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`;

const CubeImage = styled.img`
  height: 74px;
  width: 74px;
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const StairImage = styled.img`
  height: 260px;
  width: 200px;
  @media (max-width: 480px) {
    width: 150px;
    height: 190px;
  }
`;
