<template>
  <div class="flex ml-[15%]">
    <div class="tablet:grid tablet:grid-cols-[1fr,200px] tablet:gap-[30px]">

      <div class="timeline w-[75%]">

        <post/>
      </div>

      <div class="sidebar hidden tablet:block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur debitis
        dignissimos hic nam nisi odio, odit placeat quaerat quam! Dolore expedita fugiat hic libero
        necessitatibus nesciunt quam reprehenderit voluptas.
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from "@/components/avatar.vue";
import Post from "@/components/Post.vue";
import SideBar from "@/components/sideBar.vue";

const name = 'home'
</script>

<style scoped></style>
