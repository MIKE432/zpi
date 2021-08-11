import { Input } from "../../components/Input";
import { Scrollable, withModal } from "../../components/Wrappers";
import { Button } from "@material-ui/core";
import React, { FC } from "react";
import styled  from "styled-components";
import { useLocation } from "react-router-dom";
import { SpecificAbout } from "./RegisterAndLoginModule";

const RegisterPageComponent = () =>
    (
        <div>
            <h2>Zarejestruj się</h2>
            <Scrollable maxHeight="80vh">

                <Input margin="normal" label="Imię" size="small" type="email" fullWidth={ true }/>
                <Input margin="normal" label="Nazwisko" size="small" type="password" fullWidth={ true }/>
                <Input margin="normal" label="E-mail" size="small" type="email" fullWidth={ true }/>
                <Input margin="normal" label="Hasło" size="small" type="password" fullWidth={ true }/>
                <Input margin="normal" label="Powtórz hasło" size="small" type="password" fullWidth={ true }/>
            </Scrollable>
            <Button fullWidth={ true } variant={ "contained" } color={ "primary" }>Zarejestruj się</Button>

        </div>

    )



const RegisterAboutContainer = styled.div<{ isVisible: boolean }>`
  
  height: 100%;
  transition: .5s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  width: 50%;
  top: 0;
  opacity: ${props => props.isVisible ? '1' : '0'};
`



export const RegisterAbout: FC<SpecificAbout> = ({ location }) => {


    return (
         <RegisterAboutContainer isVisible={location === '/register'}>
             <h1>Zarejestruj się</h1>
             <Button onAnimationEnd={(e) =>{e.persist()

             }}>Zaloguj się</Button>
         </RegisterAboutContainer>
     )
}


export const RegisterPage = withModal(RegisterPageComponent)