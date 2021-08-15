import { Button, TextField } from "@material-ui/core";
import React, { FC } from "react";
import { withModal } from "../../components/Wrappers";
import styled from "styled-components";
import { SpecificAbout } from "./RegisterAndLoginModule";
import { useHistory } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
    email: string,
    password: string
}

const LoginAboutContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  transition: .5s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${ props => props.isVisible ? '1' : '0' };
  z-index: ${ props => props.isVisible ? '1' : '-1' };
`

const LoginPageComponent = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Zaloguj się</h2>
            <TextField margin="normal" label="E-mail" size="small" type="email" fullWidth={ true } variant="outlined" { ...register("email") }/>
            <TextField margin="normal" label="Hasło" size="small" type="password" fullWidth={ true }
                       variant="outlined" {...register("password")}/>
            <Button fullWidth={ true } variant="contained" color="primary" type="submit">Zaloguj</Button>
        </form>
    )
}


export const LoginAbout: FC<SpecificAbout> = ({ location }) => {
    const history = useHistory()
    return (
        <LoginAboutContainer isVisible={ location === '/login' }>
            <h1>Zaloguj się</h1>
            <h3>I poczuj jak łatwo zarządzać organizacją studencką!</h3>
            <span>Nie masz jeszcze konta?</span>
            <Button
                onClick={ () => history.push('/register') }
                variant="outlined"
                color="secondary">Zarejestruj się</Button>
        </LoginAboutContainer>
    )
}


export const LoginPage =
    withModal(LoginPageComponent)