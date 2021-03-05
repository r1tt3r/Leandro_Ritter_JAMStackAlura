/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import { Box } from '../../commons/foundation/layout/Box';
import Text from '../../commons/foundation/Text';
import TextField from '../../forms/TextField';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export default function FormContato({ modalProps }) {
  const [contactFromData, setContactFormData] = React.useState({
    nome: '',
    email: '',
    msg: '',
  });
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formState.DEFAULT
  );

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setContactFormData({
      ...contactFromData,
      [fieldName]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmissionStatus(formState.LOADING);
    setIsFormSubmited(true);

    // Data Transfer Object
    const contactDTO = {
      name: contactFromData.nome,
      email: contactFromData.email,
      message: contactFromData.msg,
    };

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactDTO),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.ok) {
          return resp.json();
        } else {
          setSubmissionStatus(formState.ERROR);
        }
        throw new Error('Nao foi possivel enviar a mensagem');
      })
      .then(() => setTimeout(() => setSubmissionStatus(formState.DONE), 4000))
      .catch(() => setSubmissionStatus(formState.ERROR));
  }

  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; //REGEX EMAIL
  const isFormInvalid =
    contactFromData.nome.length === 0 ||
    contactFromData.email.length === 0 ||
    contactFromData.msg.length === 0 ||
    !reg.test(contactFromData.email);

  function NotifyUser({ children }) {
    const animationConfig = {
      loop: true,
      autoplay: true,
    };
    if (submissionStatus === formState.LOADING) {
      animationConfig.animationData = loadingAnimation;
    }
    if (submissionStatus === formState.DONE) {
      animationConfig.animationData = successAnimation;
    }
    if (submissionStatus === formState.ERROR) {
      animationConfig.animationData = errorAnimation;
    }
    return (
      <Box
        position="absolute"
        background="white"
        height="100%"
        width="90%"
        padding="50px 0 0 0"
        display="flex"
        alignItems="center"
        flexDirection="column">
        <Lottie width="150px" height="150px" config={animationConfig} />
        <Text textAlign="center" tag="div" display="block">
          {children}
        </Text>
      </Box>
    );
  }

  return (
    <Box
      alignSelf="flex-end"
      background="white"
      padding="20px"
      borderRadius="10px 10px 0 0"
      position="relative"
      {...modalProps}>
      <Box textAlign="right">{modalProps.ButtonCloseModal}</Box>

      {isFormSubmited && submissionStatus === formState.LOADING && (
        <NotifyUser>
          Seus dados estão sendo enviados, por favor aguarde :)
        </NotifyUser>
      )}

      {isFormSubmited && submissionStatus === formState.DONE && (
        <NotifyUser>
          Obrigado por entrar em contato, em breve retorno seu contato.
        </NotifyUser>
      )}

      {isFormSubmited && submissionStatus === formState.ERROR && (
        <NotifyUser>
          Houve um erro ao enviar seus dados, por favor tente novamente.
        </NotifyUser>
      )}

      <form>
        <Box>
          <Text variant="subTitle" tag="h2">
            ENVIE SUA MENSAGEM
          </Text>
          <TextField
            placeholder="Nome"
            name="nome"
            label="Seu Nome"
            value={contactFromData.nome}
            onChange={handleChange}
          />

          <TextField
            placeholder="Email"
            name="email"
            label="Seu E-mail"
            type="email"
            value={contactFromData.email}
            onChange={handleChange}
          />

          <TextField
            placeholder="Mensagem"
            name="msg"
            label="Sua Mensagem"
            value={contactFromData.msg}
            onChange={handleChange}
            as="textarea"
          />

          <Button
            type="submit"
            variant="primary.main"
            width="100%"
            display="block"
            onClick={handleSubmit}
            disabled={isFormInvalid}>
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  );
}
