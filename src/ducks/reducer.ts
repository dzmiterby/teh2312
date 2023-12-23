const initialState = {
  value: 0,
  isLoading: false,
  input: 0,
};

export const reducer = (state = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case "SET_INPUT":
      return {...state, input: action.payload};
    case "OPERATION_LOADING":
      return {...state, isLoading: action.payload};
    case "OPERATION_SUCCESS":
      return {...state, value: action.payload};
    default:
      return state;
  }
};
