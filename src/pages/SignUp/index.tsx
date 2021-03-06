import React, { useCallback, useRef} from 'react';

import { Container, Content, Background } from './styles';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input';
import Button from '../../components/Buttom';


import logoImg from '../../assets/logo.svg';



const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  console.log(formRef)

  const handleSubmit = useCallback(
    async (data: Object) => {
      try {

        formRef.current?.setErrors({});
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

        if (err instanceof Yup.ValidationError) {
         const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

          return;
        }


      }
    },[],
  );

  return (
    <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Gobarber" />
      <Form ref={formRef} onSubmit={handleSubmit}>
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
