<template>
  <div
    v-for="(item, index) in products"
    :key="index"
    class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
  >
    <div class="flex w-2/5">
      <!-- product -->
      <div class="w-20">
        <img class="h-24" :src="item?.image" :alt="item?.title" />
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm">{{ item?.title }}</span>
        <span class="text-red-500 text-xs">{{ item?.category }}</span>
        <a
          href="javascript:void(0)"
          class="font-semibold hover:text-red-500 text-gray-500 text-xs"
          @click="cartStore.removeFromCart(item)"
          >Remove</a
        >
      </div>
    </div>
    <div class="flex justify-center w-1/5">
      <svg
        class="fill-current text-gray-600 w-3"
        viewBox="0 0 448 512"
        @click="cartStore.decrementQty(item)"
      >
        <path
          d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        />
      </svg>

      <input
        class="mx-2 border text-center w-8"
        type="number"
        :value="item?.qty"
      />

      <svg
        class="fill-current text-gray-600 w-3"
        viewBox="0 0 448 512"
        @click="cartStore.incrementQty(item)"
      >
        <path
          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        />
      </svg>
    </div>
    <span class="text-center w-1/5 font-semibold text-sm"
      >$ {{ item?.price }}</span
    >
    <span class="text-center w-1/5 font-semibold text-sm"
      >$ {{ item?.price * item?.qty }}</span
    >
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../../stores/Cart';
const cartStore = useCartStore();
const products = computed(() => cartStore.getCartItems);
</script>
<style scoped></style>
