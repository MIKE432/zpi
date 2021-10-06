import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';
import { LoginInputs } from '../../presentation/pages/user/LoginPage';
import { UserResponse } from '../types/APITypes';

export function createAsyncAction<
  RequestPayload,
  SuccessPayload,
  FailurePayload
>(
  requestAction: string,
  successAction: string,
  failureAction: string
): AsyncActionCreator<RequestPayload, SuccessPayload, FailurePayload> {
  return {
    request: createAction<RequestPayload>(requestAction),
    success: createAction<SuccessPayload>(successAction),
    failure: createAction<FailurePayload>(failureAction)
  };
}

export interface AsyncActionCreator<
  RequestPayload,
  SuccessPayload,
  FailurePayload
> {
  request: PayloadActionCreator<RequestPayload>;
  success: PayloadActionCreator<SuccessPayload>;
  failure: PayloadActionCreator<FailurePayload>;
}

export const loginUser = createAsyncAction<LoginInputs, UserResponse, Error>(
  'LOGIN_USER',
  'LOGIN_USER_SUCCESS',
  'LOGIN_USER_FAILURE'
);
