import React from 'react';
import { AsideImage } from '../../components/AsideImage';
import { Container } from './styles';
import logoImg from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { FormButton } from '../../components/FormButton';

export function CreateRoom() {
  return (
    <Container>
      <AsideImage />

      <main>
        <img src={ logoImg } alt="logo" />

        <h3>Crie uma nova sala</h3>

        <FormButton
          name="Criar sala"
          inputPlaceholder="Nome da sala"
          logo={false}
        />

        <span>
          Quer entrar em uma sala já existente?
          <Link to="/">
            Clique Aqui
          </Link>
        </span>
      </main>
    </Container>
  );
}
