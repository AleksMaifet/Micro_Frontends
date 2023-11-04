import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const useStore = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
