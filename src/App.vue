<template>
  <div class="app">
    <Header />
    <main class="pt-[40px]">
      <container>
        <router-view />
      </container>
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Container from '@/components/Container.vue'
</script>

<style scoped>
body {
  padding-top: 60px;
}
</style>
