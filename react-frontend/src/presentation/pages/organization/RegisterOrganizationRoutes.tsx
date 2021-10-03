import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { CenteredContent } from '../../../infrastructure/components/StyledComponents';
import { RegisterOrganizationPage } from './register/RegisterOrganizationPage';

export const RegisterOrganizationRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={`${path}/register`}>
        <CenteredContent width="40%">
          <RegisterOrganizationPage />
        </CenteredContent>
      </Route>
    </Switch>
  );
};
