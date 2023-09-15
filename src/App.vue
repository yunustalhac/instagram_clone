<template>
  <div class="app">
    <div class="flex gap-3 bg-amber-200 nav">
      <router-link class="bg-amber-700 rounded" to="/">home</router-link>
      <router-link class="bg-amber-700 rounded" to="/profile">profile </router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
