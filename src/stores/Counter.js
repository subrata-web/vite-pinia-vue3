import { defineStore } from 'pinia';

export const counterStore = defineStore('counter', {
  state: () => ({
    count: 10,
  }),
  getters: {
    checkEvenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  },
  actions: {
    increase() {
      this.count++;
    },
  },
});
