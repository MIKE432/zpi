import { Input } from "../../components/Input";
import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { withModal } from "../../components/Wrappers";
import styled, { css } from "styled-components";
import { SpecificAbout } from "./RegisterAndLoginModule";

const LoginPageComponent = () => (
        <div>
            <h2>Zaloguj się</h2>
            <Input margin="normal" label="E-mail" size="small" type="email" fullWidth={ true }/>
            <Input margin="normal" label="Hasło" size="small" type="password" fullWidth={ true }/>
            <Button fullWidth={ true } variant={ "contained" } color={ "primary" }>Zaloguj</Button>
        </div>
)

const LoginAboutContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  transition: .5s;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.isVisible ? '1' : '0'};
`

export const LoginAbout: FC<SpecificAbout> = ({ location }) => {

    return (
        <LoginAboutContainer isVisible={location === '/login'}>
            <h1>Zaloguj się</h1>
        </LoginAboutContainer>
    )
}


export const LoginPage =
    withModal(LoginPageComponent)