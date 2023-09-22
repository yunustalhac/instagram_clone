<template>
  <div class="app">
    <div class="sideBar fixed left-0 flex h-[200%] tablet:w-[15%] bg">
      <side-bar/>
    </div>
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
import SideBar from "@/components/sideBar.vue";
</script>

<style scoped>
body {
  padding-top: 60px;
}

* {
  user-select: none; /* Standard syntax */
}

</style>
