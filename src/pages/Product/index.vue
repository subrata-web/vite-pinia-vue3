<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(product, index) in products" :key="index">
          <Product :product="product"></Product>
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
