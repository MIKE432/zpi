import { useRouteMatch, withRouter } from 'react-router-dom';
import {
  AnimatedRoutes,
  RouteTransition
} from '../../../infrastructure/components/AnimatedRoutes/AnimatedRoutes';
import React from 'react';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import {
  RegisterAndLoginModuleContainerStyled,
  RegisterAndLoginPageContainerStyled
} from './RegisterAndLoginRoutes.style';
import { LoginTopBar } from './LoginTopBar';
import { Container } from '@mui/material';

export const RegisterAndLoginRoutes = withRouter(({ location }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <LoginTopBar />
      <RegisterAndLoginModuleContainerStyled>
        <Container maxWidth="sm">
          <AnimatedRoutes exitBeforeEnter initial={false}>
            <RouteTransition exact={false} path={`${path}/login`} slideUp={20}>
              <RegisterAndLoginPageContainerStyled>
                <LoginPage />
              </RegisterAndLoginPageContainerStyled>
            </RouteTransition>
            <RouteTransition
              exact={false}
              path={`${path}/register`}
              slideUp={20}
            >
              <RegisterAndLoginPageContainerStyled>
                <RegisterPage />
              </RegisterAndLoginPageContainerStyled>
            </RouteTransition>
          </AnimatedRoutes>
        </Container>
      </RegisterAndLoginModuleContainerStyled>
    </>
  );
});
