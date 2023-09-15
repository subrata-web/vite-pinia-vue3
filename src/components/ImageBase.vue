<template>
  <div>Company: {{ name }}</div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('CX');
</script>

<style scoped></style>
