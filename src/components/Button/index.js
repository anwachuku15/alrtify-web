import React from "react";
import {
  BtnWrapper,
  BtnText,
  HeroBtnWrapper,
  HeroBtnLink,
  HeroLinkText,
  InvestBtnWrapper,
  InvestNowBtn,
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
  if (!hero && !investNow) {
    return (
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
        <BtnText login={login} hero={hero} investNow={investNow}>
          {title}
        </BtnText>
      </BtnWrapper>
    );
  }

  if (hero && !investNow) {
    return (
      <BtnWrapper
        hero={hero}
        href={
          apple
            ? "https://apps.apple.com/us/app/shelly-news/id1535183478"
            : "https://play.google.com/store/apps/details?id=com.shellynews"
        }
        target="_blank"
        rel="noreferrer"
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
    );
  }

  if (investNow) {
    return (
      <InvestBtnWrapper>
        <InvestNowBtn href="https://wefunder.com/shelly.news" target="_blank">
          Invest Now!
        </InvestNowBtn>
      </InvestBtnWrapper>
    );
  }
};

export default Button;
