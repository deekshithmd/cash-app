import React from "react";
import styled from "styled-components";
import { FirstRow } from "./FirstRow";
import { BottomRow } from "./BottomRow";
import { MainRow } from "./MainRow";

export const Body = () => {
  return (
    <BodyContainer>
      <FirstRow />
      <MainRow />
      <BottomRow />
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  position: relative;
  height:630px;
`;
