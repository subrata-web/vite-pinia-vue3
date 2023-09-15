<template>
  <div>
    <form class="login__form" @submit.prevent="loginProcess()">
      <input v-model="username" type="text" name="username" required />
      <br />
      <input v-model="password" type="password" name="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AnotherLayout from '../../layouts/AnotherLayout.vue';
import { useAthStore } from '../../stores/Auth';

const username = ref('kminchelle');
const password = ref('0lelplR');
const storeAuth = useAthStore();
const loginProcess = () => {
  const payload = JSON.stringify({
    username: username.value,
    password: password.value,
  });
  storeAuth.doLogin(payload);
};
const emit = defineEmits(['update:layout']);
emit('update:layout', AnotherLayout);
</script>
<style scoped></style>
