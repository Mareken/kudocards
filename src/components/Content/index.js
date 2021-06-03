import React, { useEffect, useRef } from 'react';

import useCard from '../../context/Card';

import { Container, Row, InputContainer, FromInputContainer, Input, Label, MessageInput } from './styles';

function Content() {
  const { card, setCard } = useCard();
  const inputHeaderRef = useRef();
  const textareaMessageRef = useRef();

  function updateCardInfo (value, key) {
    setCard({...card, [key]: value});
  }

  return (
    <Container>
      <Row>
        <FromInputContainer>
          <Label htmlFor='input-from'>De:</Label>
          <Input
            type='text'
            id='input-from'
            value={card.from}
            onChange={(evt) => updateCardInfo(evt.target.value, 'from')}
          />
        </FromInputContainer>
        <InputContainer>
          <Label htmlFor='input-to'>Para:</Label>
          <Input
            type='text'
            id='input-to'
            value={card.to}
            onChange={(evt) => updateCardInfo(evt.target.value, 'to')}
          />
        </InputContainer>
      </Row>
      <InputContainer>
        <Label htmlFor='input-header'>Header:</Label>
        <Input
          type='text'
          id='input-header'
          value={card.header}
          ref={inputHeaderRef}
          onChange={(evt) => updateCardInfo(evt.target.value, 'header')}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='textarea-message'>Mensagem:</Label>
        <MessageInput
          as='textarea'
          id='textarea-message'
          value={card.message}
          onChange={(evt) => updateCardInfo(evt.target.value, 'message')}
          ref={textareaMessageRef}
        />
      </InputContainer>
    </Container>
  );
}

export default Content;