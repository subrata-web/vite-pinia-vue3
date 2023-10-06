<template>
  <div class="default__layout__container">
    <Navbar></Navbar>
    <main
      class="default__layout__main max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <slot></slot>
    </main>
    <footer
      class="default__layout__footer max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      &copy; Vue & Pinia
    </footer>
  </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
</script>
