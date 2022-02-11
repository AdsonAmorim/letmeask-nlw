import React from 'react';
import { SocialLogin } from '../../components/SocialLogin';
import { AsideImage } from '../../components/AsideImage';
import { FormButton } from '../../components/FormButton';
import logoImg from '../../assets/images/logo.svg';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <AsideImage />
      <main>
        <img src={ logoImg } alt="logo" />
        <SocialLogin />

        <div className='enterRoom'>
                    ou entre em uma sala
        </div>

        <FormButton
          name="Entrar na sala"
          inputPlaceholder="Digite o código da sala"
          logo
        />

      </main>
    </Container>
  );
}
