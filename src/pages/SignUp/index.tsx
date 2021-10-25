import React, { useCallback } from 'react';

import { Container, Content, Background } from './styles';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web'
import * as Yup from 'yup'

import Input from '../../components/Input';
import Button from '../../components/Buttom';


import logoImg from '../../assets/logo.svg';



const SignUp: React.FC = () => {

  const handleSubmit = useCallback(
    async (data: Object) => {
      try {

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false
        });

      } catch (err) {
        console.log(err)
      }
    },[],
  );

  return (
    <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Gobarber" />
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro </h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>

      </Form>


      <a href="#">Voltar para Logon</a>
    </Content>

  </Container>
  )
}

export default SignUp;
