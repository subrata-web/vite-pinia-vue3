<template>
  <div>This is home page</div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue';

const emit = defineEmits(['update:layout']);
emit('update:layout', DefaultLayout);
</script>
