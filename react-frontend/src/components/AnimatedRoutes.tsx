import { Route, Switch, useLocation } from 'react-router-dom'
import { FC } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { MountTransition } from "./MountTransiotion";

interface RoutesProps {
    exitBeforeEnter?: boolean;
    initial?: boolean
}

export const AnimatedRoutes: FC<RoutesProps> = ({ exitBeforeEnter, initial, children }) => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter={ exitBeforeEnter } initial={ initial }>
            <Switch location={ location } key={ location.pathname }>
                { children }
            </Switch>
        </AnimatePresence>
    )
}

type Props = {
    exact?: boolean
    path: string
    slide?: number
    slideUp?: number
}

export const RouteTransition: FC<Props> = ({ children, exact = false, path, slide = 0, slideUp = 0, ...rest }) =>
    (
        <Route exact={ exact } path={ path } { ...rest }>
            <MountTransition slide={ slide } slideUp={ slideUp }>
                { children }
            </MountTransition>
        </Route>
    )
