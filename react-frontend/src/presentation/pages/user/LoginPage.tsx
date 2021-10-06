import { Button, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { withModal } from '../../../infrastructure/components/Wrappers/Wrappers';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../../../application/formSchemas/RegisterAndLoginPageSchemas';
import { useUser } from '../../../application/hooks/useUser';

export interface LoginInputs {
  email: string;
  password: string;
}

const LoginPageComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const { setUser, user } = useUser();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
    setUser({ name: data.email });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Zaloguj się</h2>
      <TextField
        margin="normal"
        label="E-mail"
        size="small"
        type="email"
        fullWidth={true}
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />
      <TextField
        margin="normal"
        label="Hasło"
        size="small"
        type="password"
        fullWidth={true}
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password')}
      />
      <Button
        fullWidth={true}
        variant="contained"
        color="primary"
        type="submit"
      >
        Zaloguj
      </Button>
    </form>
  );
};

export const LoginPage = withModal(LoginPageComponent);
