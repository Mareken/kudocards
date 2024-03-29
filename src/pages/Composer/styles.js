import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { lighten, rgba, darken } from "polished";
import tinycolor from "tinycolor2";

const squiggly = keyframes`
  0% {
    filter: url("#squiggly-0");
  }
  25% {
    filter: url("#squiggly-1");
  }
  50% {
    filter: url("#squiggly-2");
  }
  75% {
    filter: url("#squiggly-3");
  }
  100% {
    filter: url("#squiggly-4");
  }
`;

function isLight(color) {
  const c = tinycolor(color);
  return c.getBrightness() > 130;
}

export const Container = styled(motion.div)`
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: relative;
    flex-direction: column;
  }
`;

export const Aside = styled.div`
  flex: 0 0 600px;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.background
      : props.theme.colors.secondary};
  padding: 40px;
  overflow-y: auto;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.text.secondary};
    border-radius: 3px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
    flex: 0 0 100vh;
    width: 100%;
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.text.primary};
  font-weight: bold;
  margin-bottom: 24px;
  display: block;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
    padding: 24px 0px;
    margin: 0px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  position: relative;
  user-select: none;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    margin-bottom: 0px;
  }
`;

export const Tab = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.text.primary : props.theme.text.secondary};
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.15s ease;
  margin-right: 32px;

  &:last-of-type {
    margin: 0;
  }

  &:hover {
    color: ${(props) => props.theme.text.primary};
  }

  @media screen and (max-width: 768px) {
    margin: 0px;
    flex: 1;
    justify-content: center;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => props.width}px;
  transform: ${(props) => `translateX(${props.x}px)`};
  height: 2px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.2, 0.7, 0.2, 1.2);

  @media screen and (max-width: 768px) {
    bottom: -1px;
  }
`;

export const Preview = styled.div`
  flex: 1;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.secondary
      : props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    justify-content: flex-start;
    padding: 24px 20px;
    background: ${(props) => props.theme.colors.primary};
    transition: all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform: ${(props) =>
      props.bottomSheetOpen ? "translateY(0)" : "translateY(100%)"};
  }
`;

export const CardContainer = styled.div`
  width: 40vw;
  height: 22.5vw;
  min-height: 350px;
  margin: 64px 0 32px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(2, 33, 48, 0.16);
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.background
      : props.theme.colors.secondary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0px;
    min-height: 200px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonShare = styled.div`
  width: 150px;
  height: 60px;
  color: ${(props) => props.currentColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 500;
  user-select: none;
  background: transparent;
  border: 1px solid ${(props) => props.currentColor};
  margin-right: 16px;

  &:hover {
    animation: ${squiggly} 0.25s linear infinite;
  }

  > svg {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonDownload = styled.div`
  width: 150px;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 500;
  background: transparent;
  user-select: none;
  background: ${(props) => props.currentColor};

  &:hover {
    animation: ${squiggly} 0.25s linear infinite;
    box-shadow: 1px 1px 2px rgba(0, 169, 247, 0.16);
  }

  > svg {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CardHeading = styled.h3`
  font-family: ${(props) => props.font};
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.text.primary};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardLeft = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.background
      : props.theme.colors.secondary};

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export const CardMessage = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.text.primary};
  line-height: 1.5;
  margin: 16px 0;
  white-space: pre-wrap;
  font-family: ${(props) => props.font};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  margin-top: auto;
  align-items: flex-start;
`;

export const CardFrom = styled.p`
  display: block;
  position: relative;
  color: ${(props) => props.currentColor};
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  margin-right: 32px;
  flex: 0 0 1;
  max-width: 50%;
  font-family: ${(props) => props.font};

  > span {
    color: ${(props) => props.theme.text.primary};
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const CardTo = styled(CardFrom)``;

export const CardRight = styled.div`
  flex: 0 0 40%;
  height: 100%;
`;

export const CardImageContainer = styled.div`
  background: ${(props) =>
    props.currentColor === "rgba(0,0,0,0)"
      ? "rgba(0,0,0,0)"
      : rgba(
          isLight(props.currentColor)
            ? lighten(0.2, props.currentColor)
            : lighten(0.4, props.currentColor),
          0.25
        )};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: ${props => props.cover ? '100%' : '80%'};
  height: auto;
  object-fit: ${props => props.cover ? 'cover' : 'contain'};
`;

export const ButtonCloseBottomSheet = styled.button`
  background: ${(props) => darken(0.1, props.theme.colors.primary)};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  margin-top: auto;
  margin-bottom: 128px;
  transform: ${(props) => (props.bottomSheetOpen ? "scale(1)" : "scale(.6)")};
  opacity: ${(props) => (props.bottomSheetOpen ? 1 : 0)};
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1.2), opacity 0.3s ease;
  transition-delay: ${(props) => (props.bottomSheetOpen ? ".4s" : "0s")};

  &:active {
    transform: scale(0.8);
    transition-delay: 0s;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ButtonGoBack = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.secondary
      : props.theme.colors.background};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  border: 2px solid transparent;

  &:active {
    background: ${(props) => rgba(props.theme.colors.primary, 0.1)};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ButtonMenuOptions = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.secondary
      : props.theme.colors.background};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  border: 2px solid transparent;

  &:active {
    background: ${(props) => rgba(props.theme.colors.primary, 0.1)};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  pointer-events: none;

  &.open {
    pointer-events: auto;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 250px;
  height: auto;
  padding: 8px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    props.theme.title === "light" ? "0 2px 5px rgba(0,0,0,.13)" : "none"};
  pointer-events: none;
  z-index: 20;
  transition: all 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transform: translate3d(30px, -30px, -5px) scale(0.9);
  opacity: 0;

  &.open {
    pointer-events: auto;
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Option = styled.button`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: space-between;
  transition: all 0.15s ease;
  background: transparent;
  border-radius: 5px;
  position: relative;

  &:active {
    background: ${(props) => rgba(props.theme.colors.primary, 0.1)};
  }

  > select {
    position: absolute;
    width: calc(100% - 16px);
    opacity: 0;
  }

  > span {
    color: ${(props) => props.theme.text.primary};
  }

  > p {
    color: ${(props) => props.theme.text.secondary};
  }
`;

export const Switch = styled.div`
  width: 42px;
  height: 24px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  background: ${(props) =>
    props.isOn
      ? rgba(props.theme.colors.primary, 0.2)
      : props.theme.colors.border};
  transition: all 0.15s ease;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) =>
      props.isOn ? props.theme.colors.primary : props.theme.text.secondary};
    transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1.2);
    transform: ${(props) =>
      props.isOn ? "translateX(18px)" : "translateX(0)"};
  }
`;

export const ButtonShareMobile = styled.button`
  position: fixed;
  bottom: 60px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: ${(props) => props.theme.colors.border};
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transform: ${(props) =>
    props.bottomSheetOpen ? "translateY(0)" : "translateY(100%)"};
  z-index: 15;
  font-weight: 500;
  color: ${(props) => props.theme.text.primary};
  transition-delay: ${(props) => (props.bottomSheetOpen ? ".15s" : "0s")};
`;

export const ButtonMobile = styled.button`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: ${(props) =>
    props.bottomSheetOpen ? "#fff" : props.theme.colors.primary};
  transition: all 0.15s ease;
  z-index: 20;
  font-weight: 500;

  > span {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &:first-of-type {
      transform: ${(props) =>
        props.bottomSheetOpen ? "translateY(0px)" : "translateY(-100%)"};
      opacity: ${(props) => (props.bottomSheetOpen ? 1 : 0)};
      color: ${(props) => props.theme.colors.primary};
    }

    &:last-of-type {
      transform: ${(props) =>
        props.bottomSheetOpen ? "translateY(100%)" : "translateY(0px)"};
      opacity: ${(props) => (props.bottomSheetOpen ? 0 : 1)};
      color: #fff;
    }
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  background: ${(props) => props.theme.colors.primary};
  opacity: 0;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  z-index: 20;

  @media screen and (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

export const ModalHeading = styled.p`
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 24px;
  padding-right: 90px;
  line-height: 24px;
  font-weight: 500;
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  transition: all 0.15s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) => props.theme.colors.background};

  &:hover,
  &:active {
    background: ${(props) => rgba(props.theme.colors.primary, 0.1)};
  }
`;

export const ModalLinkContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 50px;
  flex-direction: row-reverse;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Link = styled.div`
  flex: 1;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px 0px 0px 5px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  border-right-color: transparent;
  line-height: 24px;
  transition: all 0.15s ease;
  color: ${(props) => props.theme.text.primary};

  @media screen and (max-width: 768px) {
    padding: 8px;
    overflow: hidden;
  }
`;

export const ButtonCopyLink = styled.button`
  cursor: pointer;
  flex: 0 0 50px;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.border};
  transition: all 0.15s ease;
  position: relative;

  > span {
    position: absolute;
    background: ${(props) => props.theme.text.primary};
    color: ${(props) => props.theme.colors.background};
    border-radius: 5px;
    padding: 8px;
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% + 4px);
    opacity: 0;
    transition: all 0.15s ease;
    pointer-events: none;
    transition-delay: 0s;
  }

  > svg > path {
    transition: all 0.15s ease;
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};

    + ${Link} {
      border-color: ${(props) => props.theme.colors.primary} !important;
      border-right-color: transparent;
    }

    > span {
      opacity: 1;
      transition-delay: 0.05s;
    }

    > svg > path {
      fill: #fff !important;
    }
  }
`;
