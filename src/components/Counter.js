import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counterObject = useSelector((state) => state);
  console.log(counterObject);

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "increment" });
  };

  const decrementCounter = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterObject.counter}</div>
      <button onClick={incrementCounter}>incrementCounter</button>
      <button onClick={decrementCounter}>decrementCounter</button>
    </main>
  );
};

export default Counter;
