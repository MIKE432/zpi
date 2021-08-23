import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { MainPage } from "./pages/MainPage";
import { RegisterAndLoginRoutes } from './pages/user/RegisterAndLoginRoutes'
import { RegisterOrganizationRoutes } from "./pages/organization/RegisterOrganizationRoutes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/organization">
                        <RegisterOrganizationRoutes/>
                    </Route>
                    <Route path="/" exact>
                        <MainPage/>
                    </Route>
                    <Route path="/user">
                        <RegisterAndLoginRoutes/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
