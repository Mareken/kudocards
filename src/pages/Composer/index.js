import React, { useEffect, useRef, useState, useContext } from "react";

import { nanoid } from "nanoid";
import { AnimatePresence } from "framer-motion";
import { ThemeContext } from "styled-components";
import html2canvas from "html2canvas";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import roundArrowBack from "@iconify/icons-ic/round-arrow-back";
import roundMoreVert from "@iconify/icons-ic/round-more-vert";
import roundClose from "@iconify/icons-ic/round-close";
import contentCopy from "@iconify/icons-ic/content-copy";
import roundCheck from "@iconify/icons-ic/round-check";
import useSound from "../../context/Sound";
import { useHistory } from "react-router-dom";
import useWindowSize from "../../utils/hooks/useWindowSize";
import useTheme from "../../context/Theme";

import Buttons from "../../components/Buttons";
import useActiveTab from "../../context/ActiveTab";
import useCard from "../../context/Card";
import Content from "../../components/Content";
import FontNColor from "../../components/FontNColor";
import Images from "../../components/Images";

import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import jaiminho from "../../assets/images/jaiminho.svg";

import {
  Container,
  Aside,
  Heading,
  Tabs,
  Tab,
  Indicator,
  Preview,
  CardContainer,
  ButtonsContainer,
  ButtonShare,
  ButtonDownload,
  CardHeading,
  CardLeft,
  CardRight,
  CardMessage,
  CardFooter,
  CardFrom,
  CardTo,
  CardImageContainer,
  CardImage,
  ButtonGoBack,
  ButtonMobile,
  ButtonCloseBottomSheet,
  ModalOverlay,
  Modal,
  ModalHeading,
  ButtonCloseModal,
  ButtonCopyLink,
  ModalLinkContainer,
  Link,
  ButtonShareMobile,
  ButtonMenuOptions,
  MenuOverlay,
  Menu,
  Option,
  Switch,
} from "./styles";

function Composer() {
  const size = useWindowSize();
  const { t, i18n } = useTranslation();
  const { activeTab, setActiveTab } = useActiveTab();
  const { card, shareKudo, currentLink, setCard } = useCard();
  const currTheme = useContext(ThemeContext);
  const firstTabRef = useRef();
  const secondTabRef = useRef();
  const { setTheme } = useTheme();
  const thirdTabRef = useRef();
  const history = useHistory();
  const cardRef = useRef();
  const { playSound, playing, stopSound } = useSound();
  const [translateX, setTranslateX] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(100);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [copying, setCopying] = useState(false);
  const [mount, setMount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  const captureConfig = {
    backgroundColor: null,
    scale: 2,
    allowTaint: true,
    imageTimeout: 0,
  };

  useEffect(() => {
    if (i18n.isInitialized) {
      setCard({
        id: nanoid(),
        from: i18n.t("card.from"),
        to: i18n.t("card.to"),
        header: i18n.t("card.header"),
        message: i18n.t("card.message"),
        font: "DM Sans",
        color: "#00A9F7",
        image: jaiminho,
      });
    }
  }, [i18n.isInitialized, i18n.language]);

  useEffect(() => {
    changeIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, i18n.language, size.width]);

  function toggleAudio() {
    if (!playing) {
      playSound();
    } else {
      stopSound();
    }
  }

  function handleShareKudo() {
    setModalOpen(true);

    if (!mount) {
      shareKudo(card);
      setMount(true);
    }
  }

  function downloadKudoCard() {
    html2canvas(cardRef.current, captureConfig)
      .then((canvas) => saveAs(canvas.toDataURL(), "kudocard.png"))
      // TODO: Create an modal showing the error and the option to retry
      .catch((err) => console.error(err));
  }

  function saveAs(uri, filename) {
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      //Firefox requires the link to be in the body
      document.body.appendChild(link);
      //simulate click
      link.click();
      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  function renderLanguage() {
    switch (i18n.language) {
      case "es":
        return "Español";
      case "en":
        return "English";
      case "pt-BR":
        return "Português";
      default:
        return "";
    }
  }

  function changeIndicator() {
    if (size.width < 768) {
      switch (activeTab) {
        case "content":
          setIndicatorWidth(firstTabRef.current.offsetWidth);
          setTranslateX(0);
          break;
        case "font&color":
          setIndicatorWidth(secondTabRef.current.offsetWidth);
          setTranslateX(firstTabRef.current.offsetWidth);
          break;
        case "image":
          setIndicatorWidth(thirdTabRef.current.offsetWidth);
          setTranslateX(
            firstTabRef.current.offsetWidth + secondTabRef.current.offsetWidth
          );
          break;
        default:
          return;
      }
    } else {
      switch (activeTab) {
        case "content":
          setIndicatorWidth(firstTabRef.current.offsetWidth);
          setTranslateX(0);
          break;
        case "font&color":
          setIndicatorWidth(secondTabRef.current.offsetWidth);
          setTranslateX(firstTabRef.current.offsetWidth + 32);
          break;
        case "image":
          setIndicatorWidth(thirdTabRef.current.offsetWidth);
          setTranslateX(
            firstTabRef.current.offsetWidth +
              secondTabRef.current.offsetWidth +
              64
          );
          break;
        default:
          return;
      }
    }
  }

  function changeLanguage(evt) {
    i18n.changeLanguage(evt.target.value);
    setMenuOpen(false);
  }

  function handleCopyLink() {
    setCopying(true);

    navigator.clipboard.writeText(currentLink);

    setTimeout(() => {
      setCopying(false);
    }, 1000);
  }

  return (
    <Container
      initial={{
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      }}
    >
      <AnimatePresence>
        {modalOpen && (
          <>
            <ModalOverlay
              initial={{
                opacity: 0,
                pointerEvents: "none",
              }}
              animate={{
                opacity: 0.5,
                pointerEvents: "auto",
                transition: {
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                pointerEvents: "none",
                transition: {
                  duration: 0.1,
                },
              }}
              key="overlay"
              onClick={() => setModalOpen(false)}
            />
            <Modal
              initial={{
                x: "-50%",
                y: "-50%",
                pointerEvents: "none",
                scale: 1.02,
                opacity: 0,
              }}
              animate={{
                x: "-50%",
                y: "-50%",
                pointerEvents: "auto",
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.15,
                  delay: 0.1,
                },
              }}
              exit={{
                x: "-50%",
                y: "-50%",
                pointerEvents: "none",
                scale: 1,
                opacity: 0,
                transition: {
                  duration: 0.1,
                },
              }}
              key="modal"
            >
              <ButtonCloseModal onClick={() => setModalOpen(false)}>
                <Icon
                  icon={roundClose}
                  style={{ fontSize: "24px", color: currTheme.text.secondary }}
                />
              </ButtonCloseModal>
              <ModalHeading>{t("shareModal.heading")}</ModalHeading>
              <ModalLinkContainer>
                <ButtonCopyLink onClick={handleCopyLink} disabled={copying}>
                  <span>{t("shareModal.copy")}</span>
                  <Icon
                    icon={copying ? roundCheck : contentCopy}
                    style={{ color: currTheme.text.primary, fontSize: "24px" }}
                  />
                </ButtonCopyLink>
                <Link>{currentLink}</Link>
              </ModalLinkContainer>
            </Modal>
          </>
        )}
      </AnimatePresence>

      <Aside>
        <ButtonGoBack onClick={() => history.push("/")}>
          <Icon
            icon={roundArrowBack}
            style={{ color: currTheme.text.primary, fontSize: "24px" }}
          />
        </ButtonGoBack>
        <ButtonMenuOptions onClick={() => setMenuOpen(true)}>
          <Icon
            icon={roundMoreVert}
            style={{ color: currTheme.text.primary, fontSize: "24px" }}
          />
        </ButtonMenuOptions>

        <MenuOverlay
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(false)}
        />

        <Menu className={menuOpen ? "open" : ""}>
          <Option
            onClick={() => setTheme(currTheme.title === "dark" ? light : dark)}
          >
            <span>{t("menuMobile.theme")}</span>
            <Switch isOn={currTheme.title === "dark"} />
          </Option>
          <Option onClick={toggleAudio}>
            <span>{t("menuMobile.audio")}</span>
            <Switch isOn={playing ? 1 : 0} />
          </Option>
          <Option>
            <span>{t("menuMobile.language")}</span>
            <p>{renderLanguage()}</p>
            <select onChange={changeLanguage}>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="pt-BR">Português</option>
            </select>
          </Option>
        </Menu>

        <Heading>{t("composer.heading")}</Heading>
        <Tabs>
          <Tab
            active={activeTab === "content"}
            onClick={() => setActiveTab("content")}
            ref={firstTabRef}
          >
            {t("composer.tabs.first")}
          </Tab>
          <Tab
            active={activeTab === "font&color"}
            onClick={() => setActiveTab("font&color")}
            ref={secondTabRef}
          >
            {t("composer.tabs.second")}
          </Tab>
          <Tab
            active={activeTab === "image"}
            onClick={() => setActiveTab("image")}
            ref={thirdTabRef}
          >
            {t("composer.tabs.third")}
          </Tab>
          <Indicator width={indicatorWidth} x={translateX} />
        </Tabs>

        <AnimatePresence exitBeforeEnter={true}>
          {activeTab === "content" ? (
            <Content />
          ) : activeTab === "font&color" ? (
            <FontNColor />
          ) : (
            <Images />
          )}
        </AnimatePresence>
      </Aside>

      {size.width < 768 && (
        <>
          <ButtonShareMobile onClick={handleShareKudo} {...{ bottomSheetOpen }}>
            {t("composer.share")}
          </ButtonShareMobile>
          <ButtonMobile
            onClick={() =>
              bottomSheetOpen ? downloadKudoCard() : setBottomSheetOpen(true)
            }
            {...{ bottomSheetOpen }}
          >
            <span>{t("composer.download")}</span>
            <span>{t("composer.preview")}</span>
          </ButtonMobile>
        </>
      )}

      <Preview bottomSheetOpen={bottomSheetOpen}>
        {size.width > 768 && <Buttons inComposer={true} />}

        <CardContainer className="noSelect" ref={cardRef}>
          <CardLeft>
            <CardHeading font={card.font}>{card.header}</CardHeading>
            <CardMessage font={card.font}>{card.message}</CardMessage>
            <CardFooter>
              <CardFrom
                currentColor={
                  card.color === "rgba(0,0,0,0)"
                    ? currTheme.colors.primary
                    : card.color
                }
                font={card.font}
              >
                <span>{t("composer.content.from")}&nbsp;</span>
                {card.from}
              </CardFrom>
              <CardTo
                currentColor={
                  card.color === "rgba(0,0,0,0)"
                    ? currTheme.colors.primary
                    : card.color
                }
                font={card.font}
              >
                <span>{t("composer.content.to")}&nbsp;</span>
                {card.to}
              </CardTo>
            </CardFooter>
          </CardLeft>
          <CardRight>
            <CardImageContainer currentColor={card.color}>
              <CardImage src={card.image} draggable={false} />
            </CardImageContainer>
          </CardRight>
        </CardContainer>

        {size.width < 768 && (
          <ButtonCloseBottomSheet
            onClick={() => setBottomSheetOpen(false)}
            {...{ bottomSheetOpen }}
          >
            <Icon
              icon={roundClose}
              style={{ color: "#fff", fontSize: "24px" }}
            />
          </ButtonCloseBottomSheet>
        )}

        <ButtonsContainer>
          <ButtonShare
            currentColor={
              card.color === "rgba(0,0,0,0)"
                ? currTheme.colors.primary
                : card.color
            }
            onClick={handleShareKudo}
          >
            <span>{t("composer.share")}</span>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="squiggly-0">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="0"
                  />
                  <feDisplacementMap
                    id="displacement"
                    in="SourceGraphic"
                    in2="noise"
                    scale="6"
                  />
                </filter>
                <filter id="squiggly-1">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="1"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>

                <filter id="squiggly-2">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="2"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-3">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="3"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>

                <filter id="squiggly-4">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="4"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
              </defs>
            </svg>
          </ButtonShare>

          <ButtonDownload
            currentColor={
              card.color === "rgba(0,0,0,0)"
                ? currTheme.colors.primary
                : card.color
            }
            onClick={downloadKudoCard}
          >
            <span>{t("composer.download")}</span>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="squiggly-0">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="0"
                  />
                  <feDisplacementMap
                    id="displacement"
                    in="SourceGraphic"
                    in2="noise"
                    scale="6"
                  />
                </filter>
                <filter id="squiggly-1">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="1"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>

                <filter id="squiggly-2">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="2"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-3">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="3"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>

                <filter id="squiggly-4">
                  <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed="4"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
              </defs>
            </svg>
          </ButtonDownload>
        </ButtonsContainer>
      </Preview>
    </Container>
  );
}

export default Composer;
