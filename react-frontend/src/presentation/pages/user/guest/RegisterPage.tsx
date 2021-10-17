import { Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerFormSchema } from '../../../../application/formSchemas/RegisterAndLoginPageSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Scrollable } from '../../../../infrastructure/components/Wrappers/Wrappers.style';
import { useUser } from '../../../../application/hooks/useUser';
import {
  AlertStyled,
  LoginAndRegisterFormStyled
} from './RegisterAndLoginRoutes.style';
import cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

interface Inputs {
  name: string;
  lastName: string;
  email: string;
  studId: string;
  password1: string;
  password2: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(registerFormSchema) });
  const [error, setError] = useState(false);
  const { replace } = useHistory();
  const { user, useRegister, useLogin, getCurrentUserAndReload } = useUser();
  const { mutate: mutateLogin } = useLogin();
  const { mutate: mutateRegister } = useRegister();

  const onSubmit: SubmitHandler<Inputs> = ({
    password2,
    password1: password,
    ...data
  }: any) => {
    mutateRegister(
      { ...data, password },
      {
        onSuccess: () => {
          mutateLogin(
            { email: data.email, password },
            {
              onSuccess: async (response) => {
                cookies.set('token', response.data.token);
                await getCurrentUserAndReload();
                replace('/');
              },
              onError: (error) => {
                replace('/user/login');
                setError(true);
              }
            }
          );
        },
        onError: () => {
          setError(true);
        }
      }
    );
  };

  return (
    <>
      <h2>Zarejestruj się{user?.name}</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Scrollable maxHeight="80vh">
          <TextField
            id="name"
            margin="normal"
            label="Imię"
            size="small"
            type="text"
            variant="outlined"
            fullWidth={true}
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register('name')}
          />
          <TextField
            id="lastName"
            margin="normal"
            label="Nazwisko"
            size="small"
            type="text"
            variant="outlined"
            fullWidth={true}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register('lastName')}
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
            id="index"
            margin="normal"
            label="Indeks studencki"
            size="small"
            type="number"
            variant="outlined"
            fullWidth={true}
            error={!!errors.studId}
            helperText={errors.studId?.message}
            {...register('studId')}
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
        {error && (
          <AlertStyled severity="error">
            Nie udało się zarejestrować
          </AlertStyled>
        )}
      </form>
    </>
  );
};

export const RegisterPage: FC = () => (
  <LoginAndRegisterFormStyled>
    <RegisterForm />
  </LoginAndRegisterFormStyled>
);
