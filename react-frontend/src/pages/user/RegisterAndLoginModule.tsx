import { useLocation, withRouter, useHistory } from "react-router-dom";
import { AnimatedRoutes, RouteTransition } from "../../components/AnimatedRoutes";
import React, { useState } from "react";
import { LoginAbout, LoginPage } from "./LoginPage";
import { RegisterAbout, RegisterPage } from "./RegisterPage";
import { withBlur } from "../../components/Wrappers";
import styled from "styled-components";


const RegisterAndLoginModuleContainer = withBlur(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url(https://source.unsplash.com/Q7PclNhVRI0);
  width: 100vw;
  overflow: hidden;
`)

const RegisterAndLoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 50vw;
  padding: 0 20%;
  
  @media (max-width: 768px) {
    justify-content: center;
    
    width: 100vw;
    padding: 1%;
  }
`

const RegisterAndLoginAbout = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  background: rgb(27, 22, 110);
  background: linear-gradient(90deg, rgba(27, 22, 110, 1) 16%, rgba(18, 85, 158, 1) 60%, rgba(0, 212, 255, 0) 100%);
  transition: width 2s;
  @media (max-width: 768px) {
    display: none;
  }
`

export interface SpecificAbout {
    location: string;
}

const About = () => {
    const location = useLocation()
    const history = useHistory()

    const [state, setState] = useState({visible: location.pathname});

    return (
        <div>
            <RegisterAbout location={location.pathname} />
            <LoginAbout location={location.pathname}/>
        </div>
    )
}


export const RegisterAndLoginModule = withRouter(({ location }) => (
    <RegisterAndLoginModuleContainer>
        <RegisterAndLoginAbout>
            <About/>
        </RegisterAndLoginAbout>
        <AnimatedRoutes exitBeforeEnter initial={ false }>
            <RouteTransition path="/login" exact slide={ 150 }>
                <RegisterAndLoginPageContainer>
                    <LoginPage/>
                </RegisterAndLoginPageContainer>
            </RouteTransition>
            <RouteTransition path="/register" exact slide={ 150 }>
                <RegisterAndLoginPageContainer>
                    <RegisterPage/>
                </RegisterAndLoginPageContainer>
            </RouteTransition>
        </AnimatedRoutes>
    </RegisterAndLoginModuleContainer>
))