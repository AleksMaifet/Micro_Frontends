import { useStore } from 'store/store';

export const Button = () => {
  const { count, increment, decrement } = useStore();

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button disabled={count === 0} onClick={decrement}>
        Decrement
      </button>
    </>
  );
};
