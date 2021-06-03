import React, { useContext, useEffect, useState } from 'react';

import useCard from '../../context/Card';
import { Icon } from '@iconify/react';
import roundPlus from '@iconify/icons-ic/round-plus';
import { ThemeContext } from 'styled-components';

import { InputContainer } from '../Content/styles';
import { Container, FontSelect, FontSelectedText, OptionsContainer, Option, Label, LabelText, ColorSelectContainer, Color, ButtonAddColor, SelectOverlay } from './styles';

function FontNColor() {
  const { card, setCard } = useCard();
  const [ selectingFont, setSelectingFont ] = useState(false);
  const currTheme = useContext(ThemeContext);
  const colors = ['#00A9F7', '#DE8C20', '#FF7E96', '#A263AC', '#9EDE16', '#434343', '#2D586C', '#01A3B2'];

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  function updateCardInfo (value, key) {
    setCard({...card, [key]: value});
  }

  function handleKeyPress (evt) {
    if (evt.key === 'Escape') {
      setSelectingFont(false);
    }
  }

  return (
    <Container className='noSelect'>
      <SelectOverlay
        onClick={() => setSelectingFont(false)}
        clickable={selectingFont}
      />

      <InputContainer>
        <Label onClick={() => setSelectingFont(prevState => !prevState)}>
          <LabelText>Fonte:</LabelText>
          <FontSelect selecting={selectingFont}>
            <FontSelectedText fontFamily={card.font}>{card.font}</FontSelectedText>
          </FontSelect>
        </Label>
        <OptionsContainer selecting={selectingFont}>
          <Option value='DM Sans' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>DM Sans</Option>
          <Option value='Caveat' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Caveat</Option>
          <Option value='Crimson Text' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Crimson Text</Option>
          <Option value='Indie Flower' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Indie Flower</Option>
          <Option value='Nanum Pen Script' onClick={(evt) => updateCardInfo(evt.target.value, 'font')}>Nanum Pen Script</Option>
        </OptionsContainer>
      </InputContainer>

      <InputContainer>
        <LabelText>Cor:</LabelText>
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
          <ButtonAddColor>
            <Icon
              icon={roundPlus}
              color={currTheme.text.primary}
              width={24}
            />
          </ButtonAddColor>
        </ColorSelectContainer>
      </InputContainer>
    </Container>
  );
}

export default FontNColor;