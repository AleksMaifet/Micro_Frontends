import { useStore } from 'store/store';
import { observer } from 'mobx-react-lite';

export const Button = observer(() => {
  const { counter } = useStore();
  const { count, increment, decrement } = counter;

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button disabled={count === 0} onClick={decrement}>
        Decrement
      </button>
    </>
  );
});
