import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { MainPage } from "./pages/MainPage";
import { RegisterAndLoginModule } from './pages/user/RegisterAndLoginModule'

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Switch>
                    <Route path="/" exact component={ MainPage }/>
                    <RegisterAndLoginModule/>
                </Switch>


            </BrowserRouter>
        </div>
    );
}

export default App;
