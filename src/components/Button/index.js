import React from "react";
import {
  BtnWrapper,
  BtnText,
  HeroBtnWrapper,
  HeroBtnLink,
  HeroLinkText,
} from "./ButtonElements";
import { IoLogoApple } from "react-icons/io";
import GooglePlayIcon from "./GooglePlayIcon";
import AppStoreIcon from "./AppStoreIcon";

const Button = ({
  icon,
  apple,
  google,
  title,
  login,
  header,
  hero,
  investNow,
}) => {
  return !hero ? (
    <BtnWrapper
      header={header}
      investNow={investNow}
      style={{ marginRight: login && 7 }}
    >
      {apple && <IoLogoApple size={20} style={{ marginRight: 7 }} />}
      {google && (
        <div style={{ width: 15, height: 15, marginRight: 7 }}>
          <GooglePlayIcon />
        </div>
      )}
      <BtnText login={login} hero={hero}>
        {title}
      </BtnText>
    </BtnWrapper>
  ) : (
    <HeroBtnWrapper>
      <HeroBtnLink>
        {apple && <IoLogoApple size={20} style={{ marginRight: 7 }} />}
        {google && (
          <div style={{ width: 15, height: 15, marginRight: 7 }}>
            <GooglePlayIcon />
          </div>
        )}
        <HeroLinkText>{title}</HeroLinkText>
      </HeroBtnLink>
    </HeroBtnWrapper>
  );
};

export default Button;
