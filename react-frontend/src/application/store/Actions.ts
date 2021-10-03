import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';

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
