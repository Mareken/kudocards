import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import useMouseOver from "../../context/MouseOver";
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
  TransitionOverlayText
} from "./styles";

function Home() {
  const height = window.innerHeight;
  const words = ["TimeF0d@", "MelhorTime", "JustDoIt", "SóVamo", "GoodVibes"];
  const [ chosenWord, setChosenWord ] = useState(words[0]);
  const history = useHistory();
  const { setIsOver } = useMouseOver();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  let title = 'KudoCards.';

  useEffect(() => {
    document.addEventListener("mousemove", getMousePos);
    setChosenWord(words[Math.floor(Math.random() * words.length)]);

    return () => {
      document.removeEventListener("mousemove", getMousePos);
    };
  }, []);

  function getMousePos(evt) {
    setMousePos({ x: evt.clientX, y: evt.clientY });
  }

  function goToComposer() {
    history.push("/composer");
  }

  return (
    <Container
      className="noSelect"
    >

      <TransitionOverlay
        initial={false}
        exit={{
          y: [height, 0, 0, -height],
          transition: {
            ease: [.785,.135,.15,.86],
            duration: 2,
            times: [0,.45,.55,1],
            delay: .6
          }
        }}
      >
        <TransitionOverlayText>{chosenWord}</TransitionOverlayText>
      </TransitionOverlay>

      <Center>
        <Buttons />
        <Title>
          {
            [...title].map((letter, index) => (
              <TitleLetter
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: .6,
                    delay: (index * .03) + .3
                  }
                }}
                exit={{
                  y: 50,
                  opacity: 0,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: .6,
                    delay: index * .03
                  }
                }}
              >
                {letter}
              </TitleLetter>
            ))
          }
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
              duration: .6
            }
          }}
          exit={{ y: 50, opacity: 0, transition: { delay: .3 } }}
          whileHover={{
            scale: 1.07,
            boxShadow: "1px 1px 2px rgba(0, 169, 247, 0.16)"
          }}
        >
          <Label>Criar novo Kudo</Label>
        </Button>
      </Center>

      <ImagesContainer
        initial={{
          opacity: 0,
          transition: {
            duration: .6
          }
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: .6
          }
        }}
        exit={{
          opacity: 0,
          scale: 1.5,
          transition: {
            duration: .6,
            delay: .3
          }
        }}
      >
        <Hand
          src={hand}
          draggable="false"
          style={{
            transform: `translateX(calc(-50% + ${(mousePos.x * -2) / 500}px)`,
          }}
        />
        <Diamond
          src={diamond}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -2) / 500}px, ${
              (mousePos.y * -2) / 500
            }px, 0)`,
          }}
        />
        <Dog
          src={dog}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * 2) / 500}px, ${
              (mousePos.y * 3) / 500
            }px, 0)`,
          }}
        />
        <Man
          src={man}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -2) / 500}px, ${
              (mousePos.y * -2) / 500
            }px, 0)`,
          }}
        />
        <Woman
          src={woman}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * 1) / 500}px, ${
              (mousePos.y * 3) / 500
            }px, 0)`,
          }}
        />
        <Laptop
          src={laptop}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -2) / 500}px, ${
              mousePos.y / 500
            }px, 0)`,
          }}
        />
        <Wave
          src={wave}
          draggable="false"
          style={{
            transform: `translate3d(${(mousePos.x * -1) / 500}px, ${
              (mousePos.y * 4) / 500
            }px, 0)`,
          }}
        />
      </ImagesContainer>
    </Container>
  );
}

export default Home;
