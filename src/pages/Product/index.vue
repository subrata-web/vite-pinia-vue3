<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="bg-white">
        <div
          class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        >
          <h2 class="sr-only">Products</h2>

          <div
            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <div
              v-for="(product, index) in products"
              :key="index"
              class="group"
            >
              <Product :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DefaultLayout from '../../layouts/DefaultLayout.vue';
import Product from '../../components/Product.vue';

const products = ref([]);
const loading = ref(false);

const fetchProducts = () => {
  loading.value = true;
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
      if (json.length > 0) {
        loading.value = false;
        products.value = json;
      }
    })
    .catch((error) => {
      loading.value = false;
      products.value = [];
      console.log(error);
    });
};

onMounted(() => {
  fetchProducts();
});

const emit = defineEmits(['update:layout']);
emit('update:layout', DefaultLayout);
</script>
