import React from "react";
import styled from "styled-components";
import Image from "next/image";
import dove from "../public/img/dove 1.png";
import home from "../public/img/home.png";
import explore from "../public/img/global-search.png";
import message from "../public/img/message.png";
import support from "../public/img/message-question.png";
import setting from "../public/img/category-2.png";
import booking from "../public/img/wallet-2.png";
import logout from "../public/img/logout.png";

const SideBar = () => {
  return (
    <Container>
      <Logo>
        <Dove>
          <Image src={dove} alt='dove' />
        </Dove>
        <H1>Traveloo</H1>
      </Logo>
      <Line />
      <SideNav>
        <Home>
          <Icon>
            <Image src={home} alt='home' />
          </Icon>
          <Title>Home</Title>
        </Home>
        <Booking>
          <Icon>
            <Image src={booking} alt='home' />
          </Icon>
          <Title>Booking</Title>
        </Booking>
        <Explore>
          <Icon>
            <Image src={explore} alt='explore' />
          </Icon>
          <Title>Explore</Title>
        </Explore>
        <Message>
          <Icon>
            <Image src={message} alt='message' />
          </Icon>
          <Title>Message</Title>
        </Message>
        <Support>
          <Icon>
            <Image src={support} />
          </Icon>
          <Title>Support</Title>
        </Support>
        <Setting>
          <Icon>
            <Image src={setting} />
          </Icon>
          <Title>Setting</Title>
        </Setting>
        <Buttons>
          <Mode>Mode</Mode>
          <Logout>
            <Img>
              <Image src={logout} alt='logout' />
            </Img>

            <Text>Logout</Text>
          </Logout>
        </Buttons>
      </SideNav>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 160px;
  height: 789px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  padding-top: 32px;
  padding-left: 40px;
  padding-right: 24px;
`;

const Dove = styled.div`
  padding-right: 6px;
`;

const H1 = styled.h3`
  font-size: 16px;
  color: rgba(0, 204, 203, 1);
`;

const Line = styled.hr`
  width: 106px;
  height: 1.5px;
  color: rgba(240, 240, 240, 1);
  margin-left: 40px;
  margin-right: 24px;
  margin-top: 32px;
`;

const SideNav = styled.nav`
  width: 159px;
  height: 348px;
  padding-top: 34px;
  padding-left: 7px;
  padding-right: 4px;
`;

const Home = styled.div`
  display: flex;
  padding-left: 40px;
  padding-bottom: 12px;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    opacity: 0.7;
  }
`;

const Icon = styled.div``;

const Title = styled.p`
  padding-left: 13px;
  position: relative;
  top: -12px;
  /* color: rgba(0, 204, 203, 1); */
  font-size: 14px;
`;

const Explore = styled(Home)``;

const Message = styled(Home)``;

const Support = styled(Home)``;

const Setting = styled(Home)``;

const Booking = styled(Home)``;

const Buttons = styled.div`
  padding-top: 231px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 10px;
`;

const Mode = styled.button`
  cursor: pointer;
  color: rgba(108, 108, 108, 1);
`;

const Logout = styled.div`
  padding-top: 12px;
  display: flex;
  cursor: pointer;

  &:hover {
    scale: 1.2;
    opacity: 0.8;
  }
`;
const Text = styled.p`
  font-size: 14px;
  position: relative;
  top: -10px
`;
const Img = styled.div`
  padding-right: 12px;
`;
