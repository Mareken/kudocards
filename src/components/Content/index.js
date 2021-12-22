import React, { useRef, useEffect, useState, useContext } from 'react';

import useCard from '../../context/Card';
import { useTranslation } from 'react-i18next';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { ThemeContext } from 'styled-components';

import { Container, Row, InputContainer, FromInputContainer, Input, Label, MessageInput, PickerTrigger, PickerOverlay } from './styles';

function Content() {
  const emojiList = ['🙂','🙃','😉','😛','😝','😅','😂','😗','😘','😐','🤔','🤫','🤗','😆'];
  const currTheme = useContext(ThemeContext);
  const { card, setCard } = useCard();
  const fromInputRef = useRef();
  const toInputRef = useRef();
  const inputHeaderRef = useRef();
  const textareaMessageRef = useRef();
  const { t, i18n } = useTranslation();
  const [ showEmojiPicker, setShowEmojiPicker ] = useState(false);
  const [ emojiField, setEmojiField ] = useState('');
  const [ cursorPosition, setCursorPosition ] = useState(null);
  const [ chosenEmoji, setChosenEmoji ] = useState(emojiList[0]);
  const [ chosenEmoji2, setChosenEmoji2 ] = useState(emojiList[0]);
  const [ chosenEmoji3, setChosenEmoji3 ] = useState(emojiList[0]);
  const [ chosenEmoji4, setChosenEmoji4 ] = useState(emojiList[0]);
  const [ emojiLang, setEmojiLang ] = useState({
    search: 'Buscar',
    clear: 'Limpar',
    notfound: 'Nenhum Emoji encontrado',
    skintext: 'Escolha seu tom de pele padrão',
    categories: {
      search: 'Resultados de pesquisa',
      recent: 'Usados frequentemente',
      people: 'Caras e pessoas',
      nature: 'Animais e natureza',
      foods: 'Comida e bebida',
      activity: 'Atividades',
      places: 'Viagens e lugares',
      objects: 'Objetos',
      symbols: 'Símbolos',
      flags: 'Bandeiras',
      custom: 'Personalizado'
    },
    categorieslabel: 'Categorias'
  });

  useEffect(() => {
    switch (i18n.language) {
      case 'es':
        setEmojiLang({
          search: 'Search',
          clear: 'Clear',
          notfound: 'No Emoji Found',
          skintext: 'Choose your default skin tone',
          categories: {
            search: 'Search Results',
            recent: 'Frequently Used',
            people: 'Smileys & People',
            nature: 'Animals & Nature',
            foods: 'Food & Drink',
            activity: 'Activity',
            places: 'Travel & Places',
            objects: 'Objects',
            symbols: 'Symbols',
            flags: 'Flags',
            custom: 'Custom',
          },
          categorieslabel: 'Emoji categories'
        });
        break;
      case 'en':
        setEmojiLang({
          search: 'Search',
          clear: 'Clear',
          notfound: 'No Emoji Found',
          skintext: 'Choose your default skin tone',
          categories: {
            search: 'Search Results',
            recent: 'Frequently Used',
            people: 'Smileys & People',
            nature: 'Animals & Nature',
            foods: 'Food & Drink',
            activity: 'Activity',
            places: 'Travel & Places',
            objects: 'Objects',
            symbols: 'Symbols',
            flags: 'Flags',
            custom: 'Custom',
          },
          categorieslabel: 'Emoji categories'
        });
        break;
      case 'pt-BR':
        setEmojiLang({
          search: 'Buscar',
          clear: 'Limpar',
          notfound: 'Nenhum Emoji encontrado',
          skintext: 'Escolha seu tom de pele padrão',
          categories: {
            search: 'Resultados de pesquisa',
            recent: 'Usados frequentemente',
            people: 'Caras e pessoas',
            nature: 'Animais e natureza',
            foods: 'Comida e bebida',
            activity: 'Atividades',
            places: 'Viagens e lugares',
            objects: 'Objetos',
            symbols: 'Símbolos',
            flags: 'Bandeiras',
            custom: 'Personalizado'
          },
          categorieslabel: 'Categorias'
        });
        break;
      default:
        return;
    }
  }, [i18n.language]);

  function updateCardInfo (value, key) {
    setCard({...card, [key]: value});
  }
  
  function handleSelectEmoji (emoji) {
    const native = emoji.native;

    switch (emojiField) {
      case 'from':
        setCard({...card, from: card.from + native });
        break;
      case 'to':
        setCard({...card, to: card.to + native });
        break;
      case 'header':
        setCard({...card, header: card.header + native });
        break;
      case 'message':
        setCard({...card, message: card.message + native });
        break;
      default:
        return;
    }
  }

  function handleChangeEmoji (number) {
    const random = emojiList[Math.floor(Math.random() * emojiList.length)];

    if (number === 1) {
      if (random === chosenEmoji) {
        handleChangeEmoji(1);
      }
      else {
        setChosenEmoji(random);
      }
    }
    else if (number === 2) {
      if (random === chosenEmoji2) {
        handleChangeEmoji(2);
      }
      else {
        setChosenEmoji2(random);
      }
    }
    else if (number === 3) {
      if (random === chosenEmoji3) {
        handleChangeEmoji(3);
      }
      else {
        setChosenEmoji3(random);
      }
    }
    else {
      if (random === chosenEmoji4) {
        handleChangeEmoji(4);
      }
      else {
        setChosenEmoji4(random);
      }
    }
  }

  return (
    <Container>
      {
        showEmojiPicker && (
          <>
            <PickerOverlay onClick={() => setShowEmojiPicker(false)} />
            <Picker
              set='apple'
              i18n={emojiLang}
              color={currTheme.colors.primary}
              theme={currTheme.title}
              onSelect={handleSelectEmoji}
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                zIndex: 20
              }}
            />
          </>
        )
      }
      
      <Row>
        <FromInputContainer>
          <Label htmlFor='input-from'>{t('composer.content.from')}</Label>
          <Input
            ref={fromInputRef}
            type='text'
            id='input-from'
            value={card.from}
            onChange={(evt) => updateCardInfo(evt.target.value, 'from')}
          />
          <PickerTrigger
            onMouseEnter={() => handleChangeEmoji(1)}
            onClick={() => {
              setShowEmojiPicker(prev => !prev);
              setEmojiField('from');
            }}
          >
            {chosenEmoji}
          </PickerTrigger>
        </FromInputContainer>
        <InputContainer>
          <Label htmlFor='input-to'>{t('composer.content.to')}</Label>
          <Input
            ref={toInputRef}
            type='text'
            id='input-to'
            value={card.to}
            onChange={(evt) => updateCardInfo(evt.target.value, 'to')}
          />
          <PickerTrigger
            onMouseEnter={() => handleChangeEmoji(2)}
            onClick={() => {
              setShowEmojiPicker(prev => !prev);
              setEmojiField('to');
            }}
          >
            {chosenEmoji2}
          </PickerTrigger>
        </InputContainer>
      </Row>
      <InputContainer>
        <Label htmlFor='input-header'>{t('composer.content.header')}</Label>
        <Input
          type='text'
          id='input-header'
          value={card.header}
          ref={inputHeaderRef}
          onChange={(evt) => updateCardInfo(evt.target.value, 'header')}
        />
        <PickerTrigger
          onMouseEnter={() => handleChangeEmoji(3)}
          onClick={() => {
            setShowEmojiPicker(prev => !prev);
            setEmojiField('header');
          }}
        >
          {chosenEmoji3}
        </PickerTrigger>
      </InputContainer>
      <InputContainer>
        <Label htmlFor='textarea-message'>{t('composer.content.message')}</Label>
        <MessageInput
          as='textarea'
          id='textarea-message'
          value={card.message}
          onChange={(evt) => updateCardInfo(evt.target.value, 'message')}
          ref={textareaMessageRef}
        />
        <PickerTrigger
          onMouseEnter={() => handleChangeEmoji(4)}
          onClick={() => {
            setShowEmojiPicker(prev => !prev);
            setEmojiField('message');
          }}
        >
          {chosenEmoji4}
        </PickerTrigger>
      </InputContainer>
    </Container>
  );
}

export default Content;