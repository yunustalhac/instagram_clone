<template>
  <figure class="avatar p-0.5 rounded-[999px] inline-flex">
    <img class="rounded-full border-2 border-white" :src='src' :alt="alt" :width="size" :height="size"/>
  </figure>
</template>

<script setup>
const name = 'avatar'

defineProps({
  src: {
    type: String,
    default: "https://i.pinimg.com/564x/22/e5/ef/22e5ef0932266e0633e06a50973196f6.jpg"
  },
  alt: {
    type: String
  },
  size: {
    type: Number,
  }
})
</script>

<style lang="scss" scoped>
.avatar {

    background: linear-gradient(219deg,
        rgba(184, 63, 140, 1) 0%,
        rgba(237, 158, 90, 1) 100%);
}
</style>