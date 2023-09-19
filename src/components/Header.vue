<template>
  <header class="border-b border-b-[rgb(var(--b6a))]">
    <container class="container grid items-center grid-cols-3 h-[60px] header">
      <router-link to="/" class="text-2xl font-bold">instagram</router-link>
      <form class="text-center">
        <input
          class="border-b border-b-[rgb(var(--b6a))] rounded bg-[rgb(var(--b3f))] h-[28px] w-[215px] pl-[20px] pr-[20px]"
          type="text"
          placeholder="Search"
        />
      </form>
      <div class="navigation flex justify-end items-center">
        <router-link to="/">
          <svg
            v-if="$route.name !== 'home'"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Ana Sayfa"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              fill="currentColor"
              d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Ana Sayfa"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              fill="currentColor"
              d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
            />
          </svg>
        </router-link>
        <router-link to="/direct">
          <svg
            v-if="$route.name !== 'direct'"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Direct"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              fill="currentColor"
              d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Direct"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              fill="currentColor"
              d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"
            />
          </svg>
        </router-link>
        <router-link to="/explore">
          <svg
            v-if="$route.name !== 'explore'"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Kişiler Bul"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              clip-rule="evenodd"
              fill="currentColor"
              d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
              fill-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Kişiler Bul"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              clip-rule="evenodd"
              fill="currentColor"
              d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z"
              fill-rule="evenodd"
            />
          </svg>
        </router-link>
        <router-link to="/profile">profile</router-link>
      </div>
    </container>
  </header>
</template>

<script setup>
import container from '@/components/Container.vue'

const name = 'home'
</script>

<style lang="scss" scoped>
.navigation {
  a {
    margin-left: 20px;
  }
}
</style>
