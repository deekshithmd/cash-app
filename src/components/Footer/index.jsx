// Library imports
import React from "react";
import styled, { keyframes } from "styled-components";

// Image imports
import Playstore from "../../assets/playstore.svg";
import Appstore from "../../assets/appstore.svg";
import Down from "../../assets/down.svg";
import Message from "../../assets/message.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";

export const Footer = () => {
  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <FooterContainer>
      <LeftContainer>
        <ButtonContainer>
          <Button>
            <Image src={Appstore} alt="appstore" title="Apple Logo" />
            <Link href="https://www.apple.com/in/app-store/" target="_blank">
              App Store
            </Link>
          </Button>
          <Button>
            <Image src={Playstore} alt="playstore" title="Playstore Logo" />
            <Link href="https://play.google.com/store/" target="_blank">
              Play Store
            </Link>
          </Button>
        </ButtonContainer>
      </LeftContainer>
      <CenterContainer>
        <More src={Down} alt="down" onClick={() => scrollToBottom()} />
      </CenterContainer>
      <RightContainer>
        <Text>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </Text>
        <SocialContainer>
          <Link
            href="https://www.twitch.tv/cashapp"
            target="_blank"
            title="Twitch Logo"
          >
            <Image src={Message} alt="down" />
          </Link>
          <Link
            href="https://twitter.com/cashapp"
            target="_blank"
            title="Twitter Logo"
          >
            <Image src={Twitter} alt="down" />
          </Link>
          <Link
            href="https://instagram.com/cashapp"
            target="_blank"
            title="Instagram Logo"
          >
            <Image src={Instagram} alt="down" />
          </Link>
        </SocialContainer>
      </RightContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: relative;
  top: -100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  @media (max-width: 820px) {
    flex-direction: column;
    padding: 0px 10px;
    top: 130px;
    gap: 20px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0px 10px;
    top: -60px;
    gap: 20px;
  }
`;

const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  @media (max-width: 820px) {
    width: 100%;
    justify-content: center;
  }
`;

const Button = styled.button`
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  border: 1px solid #fff;
  background: #000;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: Agrandir;
  font-weight: 800;
  color: #fff;
  padding: 5px 25px;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CenterContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Text = styled.p`
  font-family: Mulish;
  width: 70%;
  font-weight: 700;
  margin: 0px;
  color: #b6b6b6;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

const Image = styled.img`
  cursor: pointer;
  @media (max-width: 820px) {
    width: 30px;
    height: 30px;
  }
`;

const ImageAnimation = keyframes`
0% {transform:translateY(0);}
100% {transform:translateY(10px);}
`;

const More = styled(Image)`
  position: fixed;
  bottom: 20px;
  animation-name: ${ImageAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;
  &:hover {
    padding: 10px;
    border-radius: 100%;
    background: #212121;
  }
  @media (max-width: 820px) {
    top: 92vh;
    right: 20px;
  }
`;

const SocialContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  @media (max-width: 820px) {
    width: 100%;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #b6b6b6;
  }
`;
