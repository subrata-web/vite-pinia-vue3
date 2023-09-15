<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-6">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">about</router-link>
        Count: {{ storeCounter.count }} <br />
        <q-btn color="primary" label="+" @click="storeCounter.increase" />
        {{ storeCounter.checkEvenOrOdd }} <br />
        <input v-model="storeCounter.count" type="number" />
      </div>
      <div class="col-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { counterStore } from '../stores/Counter';
const storeCounter = counterStore();
</script>
