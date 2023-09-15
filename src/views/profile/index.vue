<template>
  <div class="home">
    <h1>Bismillah</h1>
    <div class="flex gap-3 bg-amber-100 nav">
      <router-link to="/profile">POST</router-link>
      <router-link to="/profile/igvt">IGTV</router-link>
      <router-link to="/profile/save">SAVE</router-link>
      <router-link to="/profile/tag">TAG</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup></script>

<style scoped></style>
