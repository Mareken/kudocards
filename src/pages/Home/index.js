import React, { useEffect, useState } from "react";

import qs from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../utils/hooks/useWindowSize";
import useMouseOver from "../../context/MouseOver";
import useActiveTab from "../../context/ActiveTab";
import useCard from "../../context/Card";
import Buttons from "../../components/Buttons";

import hand from "../../assets/images/hand.png";
import diamond from "../../assets/images/diamond.png";
import dog from "../../assets/images/dog.png";
import man from "../../assets/images/man.png";
import woman from "../../assets/images/woman.png";
import laptop from "../../assets/images/laptop.png";
import wave from "../../assets/images/wave.png";

import {
  Container,
  Center,
  Title,
  TitleLetter,
  Button,
  Label,
  ImagesContainer,
  Hand,
  Diamond,
  Dog,
  Man,
  Woman,
  Laptop,
  Wave,
  TransitionOverlay,
  TransitionOverlayText,
} from "./styles";
import { nanoid } from "nanoid";

function Home() {
  const { t } = useTranslation();
  const size = useWindowSize();
  const height = size.height;
  const location = useLocation();
  const { card, fetchCard, setCard } = useCard();
  const { setActiveTab } = useActiveTab();
  const words = [
    "TimeF0d@",
    "MejorEquipo",
    "JustDoIt",
    "SóVamo",
    "GoodVibes",
    "Vambora",
    "Paz",
  ];
  const [chosenWord, setChosenWord] = useState(words[0]);
  const history = useHistory();
  const { setIsOver } = useMouseOver();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mount, setMount] = useState(false);
  let title = "KudoCards.";

  useEffect(() => {
    if (!mount) {
      const { k } = qs.parse(location.search);

      if (k) {
        const fetch = async () => {
          await fetchCard(k).then((status) => {
            if (status) {
              history.push(`/showtime/${card.id}`);
            }
          });
        };

        fetch();
      }

      setTimeout(() => {
        setMount(true);
      }, 1000);
    }

    document.addEventListener("mousemove", getMousePos);
    setChosenWord(words[Math.floor(Math.random() * words.length)]);
    setActiveTab("content");

    return () => {
      setMount(false);
      document.removeEventListener("mousemove", getMousePos);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getMousePos(evt) {
    setMousePos({ x: evt.clientX, y: evt.clientY });
  }

  function goToComposer() {
    history.push("/composer");
  }

  return (
    <Container className="noSelect">
      <TransitionOverlay
        initial={false}
        exit={{
          y: [height, 0, 0, -height],
          transition: {
            ease: [0.785, 0.135, 0.15, 0.86],
            duration: 2,
            times: [0, 0.45, 0.55, 1],
            delay: 0.6,
          },
        }}
      >
        <TransitionOverlayText>{chosenWord}</TransitionOverlayText>
      </TransitionOverlay>

      <Center>
        <Buttons />
        <Title>
          {[...title].map((letter, index) => (
            <TitleLetter
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 0.6,
                  delay: index * 0.03 + 0.3,
                },
              }}
              exit={{
                y: 50,
                opacity: 0,
                transition: {
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 0.6,
                  delay: index * 0.03,
                },
              }}
            >
              {letter}
            </TitleLetter>
          ))}
        </Title>
        <Button
          onClick={goToComposer}
          onMouseOver={() => setIsOver(true)}
          onMouseLeave={() => setIsOver(false)}
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.6,
            },
          }}
          exit={{ y: 50, opacity: 0, transition: { delay: 0.3 } }}
          whileHover={{
            scale: 1.07,
            boxShadow: "1px 1px 2px rgba(0, 169, 247, 0.16)",
          }}
        >
          <Label>{t("home.cta")}</Label>
        </Button>
      </Center>

      <ImagesContainer
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
          scale: 1.5,
          transition: {
            duration: 0.6,
            delay: 0.3,
          },
        }}
      >
        <Hand
          src={hand}
          draggable="false"
          style={{
            transform: `translateX(calc(-50% + ${(mousePos.x * -2) / 500}px)`,
          }}
          alt=""
          role="presentation"
        />
        <Diamond
          src={diamond}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -2) / 500}px, ${
              (mousePos.y * -2) / 500
            }px, 0)`,
          }}
          alt=""
          role="presentation"
        />
        <Dog
          src={dog}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * 2) / 500}px, ${
              (mousePos.y * 3) / 500
            }px, 0)`,
          }}
          alt=""
          role="presentation"
        />
        <Man
          src={man}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -2) / 500}px, ${
              (mousePos.y * -2) / 500
            }px, 0)`,
          }}
          alt=""
          role="presentation"
        />
        <Woman
          src={woman}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * 1) / 500}px, ${
              (mousePos.y * 3) / 500
            }px, 0)`,
          }}
          alt=""
          role="presentation"
        />
        <Laptop
          src={laptop}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -2) / 500}px, ${
              mousePos.y / 500
            }px, 0)`,
          }}
          alt=""
          role="presentation"
        />
        <Wave
          src={wave}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -1) / 500}px, ${
              (mousePos.y * 4) / 500
            }px, 0)`,
          }}
          alt=""
          role="presentation"
        />
      </ImagesContainer>
    </Container>
  );
}

export default Home;
