<template>
  <div>
    <div class="container mx-auto bg-sky-300">test</div>
  </div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue';

const emit = defineEmits(['update:layout']);
emit('update:layout', DefaultLayout);
</script>
