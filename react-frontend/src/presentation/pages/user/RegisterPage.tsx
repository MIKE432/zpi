import { withModal } from '../../../infrastructure/components/Wrappers/Wrappers';
import { Button, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import styled from 'styled-components';
import { SpecificAbout } from './RegisterAndLoginRoutes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { registerFormSchema } from '../../../application/formSchemas/RegisterAndLoginPageSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Scrollable } from '../../../infrastructure/components/Wrappers/Wrappers.style';

interface Inputs {
  firstName: string;
  surname: string;
  email: string;
  password1: string;
  password2: string;
}

const RegisterAboutContainer = styled.div<{ isVisible: boolean }>`
  height: 100%;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  left: 0;
  width: 50%;
  top: 0;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  z-index: ${(props) => (props.isVisible ? '1' : '-1')};
`;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  return (
    <>
      <h2>Zarejestruj się</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Scrollable maxHeight="80vh">
          <TextField
            id="firstName"
            margin="normal"
            label="Imię"
            size="small"
            type="text"
            variant="outlined"
            fullWidth={true}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...register('firstName')}
          />
          <TextField
            id="lastName"
            margin="normal"
            label="Nazwisko"
            size="small"
            type="text"
            variant="outlined"
            fullWidth={true}
            error={!!errors.surname}
            helperText={errors.surname?.message}
            {...register('surname')}
          />
          <TextField
            id="email"
            margin="normal"
            label="E-mail"
            size="small"
            type="email"
            variant="outlined"
            fullWidth={true}
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <TextField
            id="password1"
            margin="normal"
            label="Hasło"
            size="small"
            type="password"
            variant="outlined"
            fullWidth={true}
            error={!!errors.password1}
            helperText={errors.password1?.message}
            {...register('password1')}
          />
          <TextField
            id="password2"
            margin="normal"
            label="Powtórz hasło"
            size="small"
            type="password"
            variant="outlined"
            fullWidth={true}
            error={!!errors.password2}
            helperText={errors.password2?.message}
            {...register('password2')}
          />
        </Scrollable>
        <Button
          fullWidth={true}
          variant="contained"
          color="primary"
          type="submit"
        >
          Zarejestruj się
        </Button>
      </form>
    </>
  );
};

export const RegisterAbout: FC<SpecificAbout> = ({ location }) => {
  const history = useHistory();
  return (
    <RegisterAboutContainer isVisible={location === '/user/register'}>
      <h1>Zarejestruj się</h1>
      <h3>I poczuj jak łatwo zarządzać organizacją studencką!</h3>
      <span>Masz już konto?</span>
      <Button
        onClick={() => history.push('/user/login')}
        variant="outlined"
        color="secondary"
      >
        Zaloguj się
      </Button>
    </RegisterAboutContainer>
  );
};

export const RegisterPage = withModal(RegisterForm);
