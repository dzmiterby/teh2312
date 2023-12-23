import { Dispatch } from "redux";
import { operationSuccess } from "../ducks/actions";

export const makeOperation = (
  dispatch: Dispatch,
  value: number,
  additional: number,
): Promise<number|void> => 
  new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(value + additional);
    }, 1000)
  })
  .then((result) => {
    dispatch(operationSuccess(result));
  });