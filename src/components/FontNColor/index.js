import React, { useContext, useEffect, useState } from 'react';

import useCard from '../../context/Card';
import { ThemeContext } from 'styled-components';
import { SketchPicker } from 'react-color';
import { useTranslation } from 'react-i18next';

import { InputContainer } from '../Content/styles';
import { Container, FontSelect, FontSelectedText, OptionsContainer, Option, Label, LabelText, ColorSelectContainer, Color, ButtonPickColor, SelectOverlay, ButtonSetTransparent } from './styles';

function FontNColor() {
  const { t } = useTranslation();
  const { card, setCard } = useCard();
  const [ selectingFont, setSelectingFont ] = useState(false);
  const [ showPicker, setShowPicker ] = useState(false);
  const currTheme = useContext(ThemeContext);
  const colors = ['#00A9F7', '#DE8C20', '#8f7eff', '#A263AC', '#5eb89b', '#ff8080', '#6a91e6', '#01A3B2'];

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  function updateCardInfo (value, key) {
    setCard(prevState => ({...prevState, [key]: value}));
    setSelectingFont(false);
  }

  function handleKeyPress (evt) {
    if (evt.key === 'Escape') {
      setSelectingFont(false);
    }
  }

  function handleOpenPicker () {
    setShowPicker(true);
  }

  function handlePickColor (color) {
    updateCardInfo(color.hex, 'color');
    
    setTimeout(() => {
      setShowPicker(false);
    }, 200);
  }

  function setTransparent () {
    updateCardInfo('rgba(0,0,0,0)', 'color');
  }

  return (
    <Container className='noSelect'>
      <SelectOverlay
        onClick={() => setSelectingFont(false)}
        clickable={selectingFont}
      />

      <InputContainer>
        <Label onClick={() => setSelectingFont(prevState => !prevState)}>
          <LabelText>{t('composer.fontcolor.font')}</LabelText>
          <FontSelect selecting={selectingFont}>
            <FontSelectedText fontFamily={card.font}>{card.font}</FontSelectedText>
          </FontSelect>
        </Label>
        <OptionsContainer selecting={selectingFont}>
          <Option value='DM Sans' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>DM Sans</Option>
          <Option value='Carter One' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Carter One</Option>
          <Option value='Gloria Hallelujah' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Gloria Hallelujah</Option>
          <Option value='Itim' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Itim</Option>
          <Option value='Kalam' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Kalam</Option>
          <Option value='Mali' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Mali</Option>
          <Option value='Noto Sans Mono' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Noto Sans Mono</Option>
          <Option value='Pacifico' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Pacifico</Option>
          <Option value='Playfair Display' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Playfair Display</Option>
          <Option value='Poppins' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Poppins</Option>
          <Option value='Josefin Sans' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Josefin Sans</Option>
        </OptionsContainer>
      </InputContainer>

      <InputContainer>
        <LabelText>{t('composer.fontcolor.color')}</LabelText>
        <ColorSelectContainer>
          {
            colors.map((color, index) => (
              <Color
                key={index}
                value={color}
                selected={card.color === color}
                onClick={(evt) => updateCardInfo(evt.target.getAttribute('value'), 'color')}
              >
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2L7 13L2 8" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Color>
            ))
          }
          <ButtonSetTransparent onClick={setTransparent} selected={card.color === 'rgba(0,0,0,0)'}>
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2L7 13L2 8" stroke={currTheme.title === 'light' ? '#333' : '#eee'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ButtonSetTransparent>
          <ButtonPickColor onClick={handleOpenPicker}>
            {
              showPicker && (
                <SketchPicker
                  color={card.color}
                  onChangeComplete={handlePickColor}
                />
              )
            }
          </ButtonPickColor>
        </ColorSelectContainer>
      </InputContainer>
    </Container>
  );
}

export default FontNColor;