import { defineStore } from 'pinia';
import { parse, stringify } from 'zipson';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    cartCount: (state) => state.items.length,
    getCartItems: (state) => state.items,
  },
  actions: {
    addToCart(item) {
      const findIndex = this.items.findIndex(
        (product) => product.id === item.id,
      );
      if (findIndex !== -1) {
        this.items[findIndex].qty += 1;
        toast.success('Your item has been updated', {
          position: 'top-right',
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: 'check',
          rtl: false,
        });
      } else {
        item.qty = 1;
        this.items.push(item);
        toast.success('Your item has been saved', {
          position: 'top-right',
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: 'fas fa-rocket',
          rtl: false,
        });
      }
    },
    incrementQty(item, val = 1) {
      const findIndex = this.items.findIndex(
        (product) => product.id === item.id,
      );
      if (findIndex !== -1) {
        this.items[findIndex].qty += val;
        toast.success('Your item has been updated', {
          position: 'top-right',
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: 'fas fa-rocket',
          rtl: false,
        });
      }
    },
    decrementQty(item, val = 1) {
      const findIndex = this.items.findIndex(
        (product) => product.id === item.id,
      );
      if (findIndex !== -1) {
        this.items[findIndex].qty -= val;
        if (this.items[findIndex].qty === 0) {
          this.items = this.items.filter((product) => product.id !== item.id);
        }
        toast.success('Your item has been updated', {
          position: 'top-right',
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: 'fas fa-rocket',
          rtl: false,
        });
      }
    },
    removeFromCart(item) {
      this.items = this.items.filter((product) => product.id !== item.id);
      toast.success('Your item has been removed', {
        position: 'top-right',
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: 'button',
        icon: 'fas fa-rocket',
        rtl: false,
      });
    },
  },
  persist: {
    serializer: {
      deserialize: parse,
      serialize: stringify,
    },
  },
});
