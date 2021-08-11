import { FC } from "react";
import { MainPage } from "../../pages/MainPage";
import { LoginPage } from "../../pages/user/LoginPage";

export interface RouteInterface {
    path: string;
    exact?: boolean;
    Component: FC
}

export interface Routes {
    routes: RouteInterface[]
}

export const routes: RouteInterface[] = [
]