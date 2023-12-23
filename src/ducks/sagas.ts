import { put, takeEvery } from "redux-saga/effects";
import { operationLoading } from "../ducks/actions";
import { makeOperation } from "../api";

function* increment({ payload }: {type: string, payload: any}) {
  yield makeOperation(payload.dispatch, payload.curr, payload.value);
  yield put(operationLoading(false));
}

function* decrment({ payload }: {type: string, payload: any}) {
  yield makeOperation(payload.dispatch, payload.curr, payload.value);
  yield put(operationLoading(false));
}

function* incrementByValue({ payload }: {type: string, payload: any}) {
  yield makeOperation(payload.dispatch, payload.curr, payload.value);
  yield put(operationLoading(false));
}

function* decrementByValue({ payload }: {type: string, payload: any}) {
  yield makeOperation(payload.dispatch, payload.curr, payload.value);
  yield put(operationLoading(false));
}

export function* rootSaga() {
  yield takeEvery("INCREMENT_ASYNC", increment);
  yield takeEvery("DECREMENT_ASYNC", decrment);
  yield takeEvery("INCREMENT_BY_VALUE_ASYNC", incrementByValue);
  yield takeEvery("DECREMENT_BY_VALUE_ASYNC", decrementByValue);
}
