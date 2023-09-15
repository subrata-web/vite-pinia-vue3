<template>
  <div>Renderer time</div>
  {{ JSON.stringify(checkData) }}
  <input v-model="searchTitle" type="search" />
  {{ JSON.stringify(titleSearch) }}
</template>

<script setup>
import { useTodoStore } from '../../stores/Todo';
import { storeToRefs } from 'pinia';
import AnotherLayout from '../../layouts/AnotherLayout.vue';
const { searchTitle, titleSearch, checkData } = storeToRefs(useTodoStore());
const emit = defineEmits(['update:layout']);
emit('update:layout', AnotherLayout);
</script>
