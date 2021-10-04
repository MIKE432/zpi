import { useHistory, useRouteMatch, withRouter } from 'react-router-dom';
import {
  AnimatedRoutes,
  RouteTransition
} from '../../../infrastructure/components/AnimatedRoutes/AnimatedRoutes';
import React from 'react';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import {
  RegisterAndLoginAboutContainerStyled,
  RegisterAndLoginModuleContainerStyled,
  RegisterAndLoginPageContainerStyled
} from './RegisterAndLoginRoutes.style';
import {
  RegisterAndLoginAbout,
  RegisterAndLoginAboutProps
} from './RegisterAndLoginAbout';
import { LoginTopBar } from './LoginTopBar';

const About = withRouter(() => {
  const history = useHistory();
  console.log(history);
  const registerAboutProps: RegisterAndLoginAboutProps = {
    title: 'Zarejestruj się',
    subtitle: 'I poczuj jak łatwo zarządzać organizacją studencką!',
    onClick: () => history.push('/user/login'),
    isVisible: history.location.pathname === '/user/register',
    buttonText: 'Zaloguj się',
    additionalText: 'Masz już konto?'
  };

  const loginAboutProps: RegisterAndLoginAboutProps = {
    title: 'Zaloguj się',
    subtitle: 'I poczuj jak łatwo zarządzać organizacją studencką!',
    onClick: () => history.push('/user/register'),
    isVisible: history.location.pathname === '/user/login',
    buttonText: ' Zarejestruj się',
    additionalText: 'Nie masz jeszcze konta?'
  };

  return (
    <div>
      <RegisterAndLoginAbout {...registerAboutProps} />
      <RegisterAndLoginAbout {...loginAboutProps} />
    </div>
  );
});

export const RegisterAndLoginRoutes = withRouter(({ location }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <LoginTopBar />
      <RegisterAndLoginModuleContainerStyled>
        <RegisterAndLoginAboutContainerStyled>
          <About />
        </RegisterAndLoginAboutContainerStyled>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <RouteTransition exact={false} path={`${path}/login`} slide={150}>
            <RegisterAndLoginPageContainerStyled>
              <LoginPage />
            </RegisterAndLoginPageContainerStyled>
          </RouteTransition>
          <RouteTransition exact={false} path={`${path}/register`} slide={150}>
            <RegisterAndLoginPageContainerStyled>
              <RegisterPage />
            </RegisterAndLoginPageContainerStyled>
          </RouteTransition>
        </AnimatedRoutes>
      </RegisterAndLoginModuleContainerStyled>
    </>
  );
});
