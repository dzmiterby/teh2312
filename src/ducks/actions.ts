import { Dispatch } from "redux";

export const incrementAsync = (dispatch: Dispatch, curr: number, value: number) => ({
  type: "INCREMENT_ASYNC",
  payload: { dispatch, curr, value },
});

export const incrementByValueAsync = (dispatch: Dispatch, curr: number, value: number) => ({
  type: "INCREMENT_BY_VALUE_ASYNC",
  payload: { dispatch, curr, value },
});

export const decrementAsync = (dispatch: Dispatch, curr: number, value: number) => ({
  type: "DECREMENT_ASYNC",
  payload: { dispatch, curr, value },
});

export const decrementByValueAsync = (dispatch: Dispatch, curr: number, value: number) => ({
  type: "DECREMENT_BY_VALUE_ASYNC",
  payload: { dispatch, curr, value },
});

export const operationLoading = (value: boolean) => ({
  type: "OPERATION_LOADING",
  payload: value,
});

export const operationSuccess = (value: number) => ({
  type: "OPERATION_SUCCESS",
  payload: value,
});

export const setInput = (value: number) => ({
  type: "SET_INPUT",
  payload: value,
});
