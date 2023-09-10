import React from "react";
import styled from "styled-components";
import Mobile from "../../assets/intro-phone 1.svg";

export const MainRow = () => {
  return (
    <OuterContainer>
      <HiddenTextContainer>
        <HiddenText bottom="180px">CASH</HiddenText>
      </HiddenTextContainer>
      <RowContainer>
        <Image src={Mobile} alt="cube" />
        <Text>APP</Text>
      </RowContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  position: relative;
  top: -290px;
  @media (max-width: 820px) {
    top: -160px;
  }
  @media (max-width: 480px) {
    top: -120px;
  }
`;

const RowContainer = styled.div`
  position: relative;
  top: -120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 110px;
  @media (max-width: 480px) {
    top: -50px;
  }
`;

const Text = styled.span`
  position: absolute;
  bottom: ${(props) => props.bottom || "25px"};
  font-size: 193px;
  font-weight: 800;
  color: #fff;
  @media (max-width: 820px) {
    font-size: 150px;
    bottom: 55px;
  }
  @media (max-width: 480px) {
    font-size: 90px;
    bottom: 25px;
  }
`;

const HiddenTextContainer = styled.div`
  position: relative;
  top: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 820px) {
    top: 150px;
  }
  @media (max-width: 480px) {
    top: 100px;
  }
`;

const HiddenText = styled.span`
  font-size: 193px;
  font-weight: 800;
  color: #fff;
  @media (max-width: 820px) {
    font-size: 150px;
  }
  @media (max-width: 480px) {
    font-size: 90px;
  }
`;

const Image = styled.img`
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;
