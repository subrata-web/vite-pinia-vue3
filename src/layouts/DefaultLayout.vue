<template>
  <div class="default__layout__container">
    <nav class="default__layout__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click.prevent="logout()">Logout</button>
    </nav>
    <main class="default__layout__main">
      <slot></slot>
    </main>
    <footer class="default__layout__footer">&copy; Vue & Pinia</footer>
  </div>
</template>
<script setup>
import { useAthStore } from '../stores/Auth';

const authStore = useAthStore();
const logout = () => authStore.logout();
</script>
