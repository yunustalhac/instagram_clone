<template>
  <div class="home">
    <text-page>profile</text-page>
    <text-page tag="p"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores commodi
      consequuntur distinctio dolor doloremque eaque facere inventore iste itaque laudantium nostrum
      repellat, sed tempore voluptatem? Aperiam assumenda fuga magnam!</text-page
    >
    <h1>Bismillah</h1>
    <div class="flex gap-3 bg-amber-100 nav">
      <router-link to="/profile">POST</router-link>
      <router-link to="/profile/igtv">IGTV</router-link>
      <router-link to="/profile/save">SAVE</router-link>
      <router-link to="/profile/tag">TAG</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import textPage from '@/components/textPage.vue'
const name = 'profileIndex'
</script>

<style scoped></style>
