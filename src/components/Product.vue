<template>
  <div>
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
    >
      <img
        :src="product.image"
        :alt="product.image"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">$ {{ product.price }}</p>
    <button
      type="button"
      class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="addToCart(product)"
    >
      <svg
        class="w-3.5 h-3.5 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 21"
      >
        <path
          d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
        />
      </svg>
      Buy now
    </button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useCartStore } from '../stores/Cart';

const cartStore = useCartStore();
const props = defineProps({
  product: Object,
});
const { product } = toRefs(props);
const addToCart = (product) => {
  cartStore.addToCart(product);
};
</script>
