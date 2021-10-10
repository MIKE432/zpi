import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { RegisterOrganizationPage } from './register/RegisterOrganizationPage';
import { Container } from '@mui/material';

export const RegisterOrganizationRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={`${path}/register`}>
        <Container maxWidth="md">
          <RegisterOrganizationPage />
        </Container>
      </Route>
    </Switch>
  );
};
