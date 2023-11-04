import { useStore } from 'store/store';

export const Button = () => {
  const { increment, decrement } = useStore();

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
