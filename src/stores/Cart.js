import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    cartCount: (state) => state.items.length,
  },
  actions: {
    addToCart(item) {
      this.items.push(item);
    },
  },
});
