import { makeAutoObservable } from 'mobx';

class CounterStore {
  static #singleton;
  count = 0;

  constructor() {
    if (CounterStore.#singleton) {
      return CounterStore.#singleton;
    }
    CounterStore.#singleton = this;

    makeAutoObservable(this);
  }

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };
}

export const useStore = () => {
  return {
    counter: new CounterStore(),
  };
};
