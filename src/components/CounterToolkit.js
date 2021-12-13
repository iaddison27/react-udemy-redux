import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from "../store/counter";

const CounterToolkit = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const counterVisible = useSelector(state => state.counter.displayCounter);

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggle());
  };

    const incrementCounterHandler = (amount) => {
        // values passed to the action get converted to { type: 'increment', payload: { amount: amount } }
       dispatch(counterActions.increment({ amount: amount }));
    };

    const decrementCounterHandler = () => {
        dispatch(counterActions.decrement());
    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {counterVisible && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={() => incrementCounterHandler(1)}>Increment</button>
            <button onClick={() => incrementCounterHandler(5)}>Increase by 5</button>
            <button onClick={decrementCounterHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default CounterToolkit;
