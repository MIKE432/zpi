import { PayloadAction } from "@reduxjs/toolkit";
import { combineEpics } from "redux-observable";
import { RootState } from "../Reducers";

export type AppAction = PayloadAction<any>

export const rootEpic = combineEpics<AppAction, AppAction, RootState>()

