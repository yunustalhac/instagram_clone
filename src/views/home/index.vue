<template>
  <div
    class="tablet:grid tablet:grid-cols-[1fr,295px] tablet: gap-[30px] max-w-[605px] tablet:max-w-none ml-auto mr-auto"
  >
    <div class="timeline">
      <h1>home</h1>
      <avatar :size="120"/>
    </div>

    <div class="sidebar hidden tablet:block">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur debitis
      dignissimos hic nam nisi odio, odit placeat quaerat quam! Dolore expedita fugiat hic libero
      necessitatibus nesciunt quam reprehenderit voluptas.
    </div>
    <h1>Bismillah her hayrın başıdır</h1>
  </div>
</template>

<script setup>
import Avatar from "@/components/avatar.vue";

const name = 'home'
</script>

<style scoped></style>
