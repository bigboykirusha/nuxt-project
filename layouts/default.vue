<template>
   <Header />
   <div class="container">
      <NuxtPage />
   </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<style scoped lang="scss">
.container {
   max-width: 1173px;
   margin: 0 auto;
   padding: 0 20px;
   margin-bottom: 50px;
}
</style>