<template>
  <div class="home">
    <h1>Bismillah</h1>
    <div class="flex gap-3 bg-amber-100 nav">
      <router-link to="/profile">POST</router-link>
      <router-link to="/profile/igtv">IGTV</router-link>
      <router-link to="/profile/save">SAVE</router-link>
      <router-link to="/profile/tag">TAG</router-link>
    </div>
  </div>
</template>

<script setup>
const name = 'profileIndex'
</script>

<style scoped></style>
