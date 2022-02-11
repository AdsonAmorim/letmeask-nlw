import React from 'react';
import illustrationImg from '../../assets/images/illustration.svg';
import { Aside } from './styles';

export function AsideImage() {
  return (
    <Aside>
      <img src={ illustrationImg } alt="" />
      <h2>Toda pergunta tem uma resposta</h2>
      <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
    </Aside>
  );
}
