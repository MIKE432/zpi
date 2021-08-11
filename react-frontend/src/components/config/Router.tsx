import React, { FC } from 'react';
import { Routes } from "./Routes";
import { Route } from "react-router-dom";

export const Router: FC<Routes> = ({ routes }) => {
    return <>
        {
            routes.map((route) =>
                <Route key={route.path} exact={ route.exact } path={ route.path }>
                    <route.Component/>
                </Route>)
        }
    </>
}