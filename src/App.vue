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

<style lang="scss" scoped></style>
