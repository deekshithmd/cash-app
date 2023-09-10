// Library imports
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useClickAway } from "react-use";

// Image imports
import Menu from "../../assets/menu.svg";

export const NavItems = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);
  const navList = [
    {
      id: "1",
      name: "sign in",
      link: "/",
    },
    {
      id: "2",
      name: "legal",
      link: "https://cash.app/legal/tos",
    },
    {
      id: "3",
      name: "licences",
      link: "https://squareup.com/legal/licenses",
    },
    {
      id: "4",
      name: "security",
      link: "https://cash.app/security",
    },
    {
      id: "5",
      name: "careers",
      link: "https://cash.app/careers",
    },
    {
      id: "6",
      name: "press",
      link: "https://cash.app/press",
    },
    {
      id: "7",
      name: "support",
      link: "https://cash.app/support",
    },
    {
      id: "8",
      name: "status",
      link: "https://status.cash.app/",
    },
    {
      id: "9",
      name: "code blog",
      link: "/",
    },
  ];

  // To create menu list on clicking outside
  useClickAway(navRef, () => setShowMenu(false));

  return (
    <>
      <MenuIcon
        src={Menu}
        height="30px"
        width="30px"
        alt="menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <NavContainer show={showMenu} ref={navRef}>
        {navList?.map((item) => {
          return (
            <NavItem href={item?.link} target="_blank" key={item?.id}>
              {item?.name}
            </NavItem>
          );
        })}
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  @media (max-width: 820px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 10px;
    border: 2px solid #fff;
    z-index: 2;
    padding: 10px;
    border-radius: 10px;
    background: #000;
  }
`;
const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #fff;
  &:hover {
    color: #b6b6b6;
    cursor: pointer;
  }
`;

const MenuIcon = styled.img`
  position: absolute;
  right: 10px;
  @media (min-width: 821px) {
    display: none;
  }
`;
