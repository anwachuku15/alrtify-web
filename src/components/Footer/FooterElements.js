import styled from "styled-components";
import Colors from "../../constants/Colors";

export const FooterContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  background-color: ${Colors.primaryBlue};
  color: white;
  height: 100vh;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  padding: 96px 75px;
  justify-content: center;
  border-bottom-width: thin;
  border-bottom-color: white;
  border-bottom-style: solid;

  @media screen and (max-width: 768px) {
    padding: 96px 30px;
  }

  @media screen and (max-width: 500px) {
    padding: 96px 30px;
  }
`;

export const FooterTopWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const FooterTopHeaderText = styled.h1`
  font-size: 48px;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const FooterTopP = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  font-variant: small-caps;
  text-align: center;
  font-weight: 700;
  padding-bottom: 30px;
`;

export const Buttons = styled.div`
  /* display: flex; */
  width: 80%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonText = styled.div`
  font-variant: small-caps;
`;

export const FooterBottom = styled.div`
  display: flex;
  height: 50%;
`;

export const FooterBottomWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  flex-direction: row;
  padding: 0 75px;

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 580px) {
    padding: 0 20px;
  }
`;

export const FooterBottomLeft = styled.div`
  display: flex;
  width: 50%;
`;

export const FooterBottomRight = styled.div`
  display: flex;
  width: 50%;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  min-height: 300px;
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const FooterLogo = styled.div`
  grid-area: 1 / 1 / auto / 7;

  /* @media screen and (max-width: 768px) {
        grid-area: 1 / 1 / auto / 7;
    }     */
  @media screen and (max-width: 580px) {
    grid-area: 1 / 1 / auto / -1;
    margin-bottom: 32px;
  }
`;

export const FooterLinks = styled.div`
  grid-area: 1 / 7 / auto / -1;

  @media screen and (max-width: 580px) {
    grid-area: 2 / 1 / auto / -1;
    margin-bottom: 32px;
  }
`;
export const FooterLinksColumn = styled.div`
  margin-right: 80px;
  display: inline-block;
  vertical-align: top;
`;

export const LinksHeader = styled.h4`
  font-size: 14px;
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  font-variant: small-caps;
  margin-bottom: 32px;
  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
`;
