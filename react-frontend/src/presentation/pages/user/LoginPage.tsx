import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { withModal } from '../../../infrastructure/components/Wrappers/Wrappers';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../../../application/formSchemas/RegisterAndLoginPageSchemas';

interface Inputs {
  email: string;
  password: string;
}

const LoginPageComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginFormSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
