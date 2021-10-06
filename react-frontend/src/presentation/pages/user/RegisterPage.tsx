import { withModal } from '../../../infrastructure/components/Wrappers/Wrappers';
import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerFormSchema } from '../../../application/formSchemas/RegisterAndLoginPageSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Scrollable } from '../../../infrastructure/components/Wrappers/Wrappers.style';
import { useUser } from '../../../application/hooks/useUser';

interface Inputs {
  firstName: string;
  surname: string;
  email: string;
  password1: string;
  password2: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(registerFormSchema) });
  const { setUser, user } = useUser();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  return (
    <>
      <h2>Zarejestruj się{user?.name}</h2>
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

export const RegisterPage = withModal(RegisterForm);
