<template>
  <component :is="layout">
    <router-view v-model:layout="layout" />
  </component>
</template>

<script setup>
import { ref } from 'vue';
const layout = ref('div');
console.log(layout);
</script>
