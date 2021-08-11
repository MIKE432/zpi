import React from 'react';
import {
    BrowserRouter, Route,
    Switch,
    withRouter,
    Link
} from "react-router-dom";
import './App.css';
import { MainPage } from "./pages/MainPage";
import { RegisterAndLoginModule } from './pages/user/RegisterAndLoginModule'
import styled from "styled-components";

const X = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <X>
                    <Link to="/">Main</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </X>
                <Switch>
                    <Route path="/" exact component={ MainPage }/>
                    <RegisterAndLoginModule/>
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;
