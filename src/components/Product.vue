<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="product?.image" :alt="product?.description" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product?.title }}</div>
      <p class="text-gray-700 text-base">
        {{ product?.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#{{ product?.category }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >$ {{ product?.price }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ product?.rating?.rate }}/{{ product?.rating?.count }}</span
      >
      <button
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        @click="addToCart(product)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue';
import { useCartStore } from '../stores/Cart';

const cartStore = useCartStore();
const props = defineProps({
  product: Object,
});
const { product } = toRefs(props);
const addToCart = (product) => {
  console.log(product);
  cartStore.addToCart(product);
};
</script>
