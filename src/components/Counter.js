import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const counterVisible = useSelector(state => state.displayCounter);

  const toggleCounterHandler = () => {
      dispatch({ type: 'toggleVisibility' });
  };

    const incrementCounterHandler = (amount) => {
       dispatch({ type: 'increment', amount });
    };

    const decrementCounterHandler = () => {
        dispatch({ type: 'decrement' });
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

export default Counter;
