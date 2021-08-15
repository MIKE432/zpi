import { useHistory, useLocation, withRouter } from "react-router-dom";
import { AnimatedRoutes, RouteTransition } from "../../components/AnimatedRoutes";
import React from "react";
import { LoginAbout, LoginPage } from "./LoginPage";
import { RegisterAbout, RegisterPage } from "./RegisterPage";
import { withBlur, withModal } from "../../components/Wrappers";
import styled from "styled-components";
import { Button } from "@material-ui/core";

export interface SpecificAbout {
    location: string;
}

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

const LoginMenu = withModal(styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;


  @media (max-width: 768px) {
    justify-content: space-between;
    margin: 0 auto;
  }
`, {
    radius: 20,
    padding: 15,
    position: "static",
    color: {
        red: 255,
        green: 255,
        blue: 255,
        opacity: 0.8
    },
})

const LoginMenuContainer = styled.div`
  width: max-content;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;
  z-index: 10;
  height: max-content;
  position: fixed;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

const About = withRouter(() => {
    const location = useLocation()

    return (
        <div>
            <RegisterAbout location={ location.pathname }/>
            <LoginAbout location={ location.pathname }/>
        </div>
    )
})

const LoginTopBar = () => {
    const history = useHistory()

    return (
        <LoginMenuContainer>
            <LoginMenu>
                <Button onClick={ () => {
                    history.push("/")
                } }>
                    Main
                </Button>
                <Button onClick={ () => {
                    history.push("/login")
                } }>
                    Login
                </Button>
                <Button onClick={ () => {
                    history.push("/register")
                } }>
                    <span>Register</span>
                </Button>
            </LoginMenu>
        </LoginMenuContainer>
    )
}


export const RegisterAndLoginModule = withRouter(({ location }) => (
    <>
        <LoginTopBar/>
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
    </>
))