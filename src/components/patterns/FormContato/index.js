/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import { Box } from '../../commons/foundation/layout/Box';
import Text from '../../commons/foundation/Text';
import TextField from '../../forms/TextField';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { contactService } from '../../../services/contact';

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('"Nome" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  email: yup
    .string()
    .email('Preencha o campo com um email válido')
    .required('"Email" é obrigatório'),
  message: yup.string().required().min('3', 'Preencha ao menos 3 caracteres'),
});

const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function NotifyUser({ submissionStatus, children }) {
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
      <Text
        textAlign="center"
        tag="p"
        display="block"
        color="#000"
        id="notification">
        {children}
      </Text>
    </Box>
  );
}

export default function FormContato({ modalProps }) {
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formState.DEFAULT
  );
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      setSubmissionStatus(formState.LOADING);
      contactService
        .send({
          name: values.name,
          email: values.email,
          message: values.message,
        })
        .then(() => {
          setTimeout(() => setSubmissionStatus(formState.DONE), 2000);
        })
        .catch(() => setSubmissionStatus(formState.ERROR))
        .finally(() => form.setIsFormDisabled(false));
    },
    async validateSchema(values) {
      return contactSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <Box
      alignSelf="flex-end"
      background="white"
      padding="20px"
      borderRadius="10px 10px 0 0"
      position="relative"
      {...modalProps}>
      <Box textAlign="right">{modalProps.ButtonCloseModal}</Box>

      {submissionStatus === formState.LOADING && (
        <NotifyUser submissionStatus={submissionStatus}>
          Seus dados estão sendo enviados, por favor aguarde :)
        </NotifyUser>
      )}

      {submissionStatus === formState.DONE && (
        <NotifyUser submissionStatus={submissionStatus}>
          Obrigado por entrar em contato, em breve retorno seu contato.
        </NotifyUser>
      )}

      {submissionStatus === formState.ERROR && (
        <NotifyUser submissionStatus={submissionStatus}>
          Houve um erro ao enviar seus dados, por favor tente novamente.
        </NotifyUser>
      )}

      <form onSubmit={form.handleSubmit}>
        <Box>
          <Text variant="subTitle" color="#3d3d3d" tag="h2" textAlign="center">
            ENVIE SUA MENSAGEM
          </Text>
          <TextField
            placeholder="Nome"
            name="name"
            label="Seu Nome"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            isTouched={form.touched.name}
            error={form.errors.name}
          />

          <TextField
            placeholder="Email"
            name="email"
            label="Seu E-mail"
            type="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            isTouched={form.touched.email}
            error={form.errors.email}
          />

          <TextField
            placeholder="Mensagem"
            name="message"
            label="Sua Mensagem"
            as="textarea"
            value={form.values.message}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            isTouched={form.touched.message}
            error={form.errors.message}
          />

          <Button
            type="submit"
            variant="primary.main"
            width="100%"
            display="block"
            disabled={form.isFormDisabled}>
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  );
}

NotifyUser.propTypes = {
  submissionStatus: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

FormContato.propTypes = {
  modalProps: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.elementType,
    PropTypes.object,
  ]).isRequired,
};
