import React from 'react';

import { Container, Content, Background } from './styles';

//import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () =>

(
  <Container>
      <Content>
          <img src={logoImg} alt="Gobarber" />
          <form>
            <h1>Faça seu logon </h1>
            <input placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
            <a href="#">Esqueci minha senha</a>
          </form>

          <a href="#">Criar conta</a>
      </Content>

      <Background />

  </Container>
)

export default SignIn;
