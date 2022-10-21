import React, { useState, createContext, useContext, useMemo } from "react";
import { firestore, timestamp } from "../firebase";
import { nanoid } from "nanoid";
import jaiminho from "../assets/images/jaiminho.svg";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [card, setCard] = useState({
    id: nanoid(),
    from: "",
    to: "",
    header: "",
    message: "",
    font: "DM Sans",
    color: "#00A9F7",
    image: jaiminho,
  });
  const [currentLink, setCurrentLink] = useState("");

  async function checkDuplicate(id) {
    const res = await firestore
      .collection(`kudocards`)
      .where("id", "==", id)
      .limit(1)
      .get();

    if (res.docs[0]?.data()) {
      return true;
    }

    return false;
  }

  async function shareKudo(card) {
    let id = card.id;

    const state = await checkDuplicate(id);

    if (state) {
      id = nanoid();

      setCard({ ...card, id });
    }

    try {
      await firestore.collection("kudocards").add({
        id,
        from: card.from,
        to: card.to,
        header: card.header,
        message: card.message,
        font: card.font,
        color: card.color,
        image: card.image,
        createdAt: timestamp(),
      });

      setCurrentLink(`${window.location.origin}?k=${id}`);
    } catch (err) {
      // TODO: Show some error message to user
      console.error(`Erro ao compartilhar kudo: ${err}`);
    }
  }

  async function fetchCard(cardId) {
    try {
      const snapshot = await firestore
        .collection("kudocards")
        .where("id", "==", cardId)
        .limit(1)
        .get();

      if (snapshot.docs[0]?.data()) {
        const { id, from, to, header, message, font, color, image } =
          snapshot.docs[0]?.data();

        setCard({ id, from, to, header, message, font, color, image });

        return true;
      }
    } catch (err) {
      // TODO: Show some error message to user
      console.error(`Erro ao buscar kudo: ${err}`);

      return false;
    }
  }

  const value = useMemo(
    () => ({
      card,
      setCard,
      shareKudo,
      fetchCard,
      currentLink,
      setCurrentLink,
    }),
    [card, setCard, shareKudo, fetchCard, currentLink, setCurrentLink]
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export default function useCard() {
  const context = useContext(CardContext);

  if (!context) throw new Error("useCard must be used within a CardProvider");

  const {
    card,
    setCard,
    shareKudo,
    fetchCard,
    clearKudo,
    currentLink,
    setCurrentLink,
  } = context;
  return {
    card,
    setCard,
    shareKudo,
    fetchCard,
    clearKudo,
    currentLink,
    setCurrentLink,
  };
}
