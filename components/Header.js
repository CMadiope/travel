import React from "react";
import styled from "styled-components";
import Image from "next/image";
import icon from "../public/img/search-normal.png";
import bell from "../public/img/Notification.png";
import avatar from "../public/img/avatar.png";
import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <Container>
      <Card1>
        <H1>Hello Traveler!</H1>
        <P>Welcome back and explore new trips</P>
      </Card1>
      <SearchBar>
        <Icon>
          <Image src={icon} alt='search icon' />
        </Icon>
        <Input type='text' placeholder='Festival Yuki Matsuri is coming...' />
      </SearchBar>
      <Profile>
        <Bell className={styles.bell}>
          <Image src={bell} alt='notifications' />
        </Bell>
        <Avatar className={styles.avatar}>
          <Image src={avatar} alt='avatar' />
        </Avatar>
      </Profile>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  padding-top: 32px;
  width: 934px;
  height: 51px;
  padding-left: 50px;
  display: flex;
`;

const Card1 = styled.div`
  width: 254px;
  height: 100%;
  position: relative;
  top: -20px;
`;
const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  /* line-height: 22px; */
  color: #6c6c6c;
  position: relative;
  top: -10px;
`;

const SearchBar = styled.div`
  display: flex;
  background-color: white;
  height: 48px;
  border-radius: 12px;
  margin-left: 46px;
`;

const Icon = styled.div`
  padding: 12px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  color: #00cccb;
  font-size: 14px;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 219px;
  border-radius: 12px;
  outline: none;

  &::placeholder {
    color: #00cccb;
  }
`;

const Profile = styled.div`
  display: flex;
  padding-left: 36px;
`;

const Bell = styled.div`
  height: 60px;
  width: 60px;
  margin-right: 12px;
  cursor: pointer;

  &:hover {
    scale: 1.3;
  }
`;

const Avatar = styled.div`
  height: 48px;
  width: 48px;
  cursor: pointer;

  &:hover {
    scale: 1.3;
  }
`;
