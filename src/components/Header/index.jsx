import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import Eye from "../../assets/eye button.svg";
import { NavItems } from "./NavItems";

export const Header = () => {
  return (
    <Container>
      <Link href="/" target="_blank">
        <Image src={Logo} width="30px" height="44px" alt="logo" title="CashApp Logo" />
      </Link>
      <NavItems />
      <Link href="https://cash.app/" target="_blank">
        <Image src={Eye} width="63px" height="36px" alt="card details" title="Details Logo"/>
      </Link>
    </Container>
  );
};

const Container = styled.nav`
  position: relative;
  height: 15vh;
  background: transparent;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  z-index: 100;
  @media (max-width: 820px) {
    padding: 10px;
    height:10vh;
  }
`;

const Image = styled.img`
  @media (max-width: 820px) {
    margin-right: 40px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #b6b6b6;
    cursor: pointer;
  }
`;
