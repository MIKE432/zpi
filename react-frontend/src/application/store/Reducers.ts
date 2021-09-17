import {combineReducers, createReducer} from '@reduxjs/toolkit';

export interface AppState {
    loading: boolean;
}

export interface RootState {
    app: AppState
}

export const defaultState: AppState = {
    loading: false
}

export const appReducer = createReducer(defaultState, _ => {
})

export const rootReducer = combineReducers({
    app: appReducer
})