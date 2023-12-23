import { useDispatch, useSelector } from "react-redux";
import { Value } from "./components/Value";
import { Button } from "./components/Button";
import {
  incrementAsync,
  decrementAsync,
  incrementByValueAsync,
  decrementByValueAsync,
  operationLoading,
  setInput,
} from "./ducks/actions";
import "./styles.css";
import { Spin } from 'antd';

export default function App() {
  const { input, value: curr, isLoading } = useSelector((state: {value: number, isLoading: boolean, input: number}) => state);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(operationLoading(true));
    dispatch(incrementAsync(dispatch, curr, 1));
  }
  const decrement = () => {
    dispatch(operationLoading(true));
    dispatch(decrementAsync(dispatch, curr, -1));
  }
  const incrementByValue = () => {
    dispatch(operationLoading(true));
    dispatch(incrementByValueAsync(dispatch, curr, input));
  }
  const decrementByValue = () => {
    dispatch(operationLoading(true));
    dispatch(decrementByValueAsync(dispatch, curr, -input));
  }
  const setInputValue = (value: any) => dispatch(setInput(+value));

  return (
    <div className="App">
      <Value />
      <div style={{ marginBottom: 16 }}>
        <Button text="Увеличить" onClick={increment} disabled={isLoading} />
        <Button text="Уменьшить" onClick={decrement} disabled={isLoading} />
      </div>
      <div>
        <input
          className="inp"
          type="number"
          placeholder="изменить на значение"
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
        <div>
          <Button
            text="Увеличить на значение"
            onClick={() => {
              incrementByValue();
            }}
            disabled={isLoading || !!!input}
          />
          <Button
            text="Уменьшить на значение"
            onClick={() => {
              decrementByValue();
            }}
            disabled={isLoading || !!!input}
          />
        </div>
        {isLoading && (
          <Spin size="large" style={{marginTop: '50px'}}>
            <div className="content" />
          </Spin>
        )}
      </div>
    </div>
  );
}
