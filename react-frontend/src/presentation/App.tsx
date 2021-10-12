import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/MainPage';
import { RegisterAndLoginRoutes } from './pages/user/guest/RegisterAndLoginRoutes';
import { RegisterOrganizationRoutes } from './pages/organization/RegisterOrganizationRoutes';
import { useUser } from '../application/hooks/useUser';
import { MainContainer } from './pages/user/logged/mainContainer/MainContainer';
import { SideNavBarProvider } from '../infrastructure/components/topbar/SideNavBar';

const LoggedUser: FC = () => {
  return (
    <SideNavBarProvider>
      <BrowserRouter>
        <MainContainer></MainContainer>
      </BrowserRouter>
    </SideNavBarProvider>
  );
};

const NotLoggedUser: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/organization">
          <RegisterOrganizationRoutes />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/user">
          <RegisterAndLoginRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

function App() {
  const { user } = useUser();
  return <div className="App">{user ? <LoggedUser /> : <NotLoggedUser />}</div>;
}

export default App;
