<template>
  <div class="pl-40 tablet:pl-0 post relative border-b">
    <!--header-->
    <header class="section header flex items-center h-[60px]">
      <div class="header-author flex items-center">
        <avatar :size="40"/>
        <div class="author ml-[16px]">
          <text-page tag="b">talhacoban</text-page>
          <text-page size="xsmall">bilecik/merkez</text-page>
        </div>
      </div>
      <div class="header-more ml-auto">

        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg"
               aria-label="Diğer seçenekler" height="22" viewBox="0 0 48 48" width="22">
            <circle fill="currentColor"
                    clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd"
                    r="4.5"/>
            <circle fill="currentColor"
                    clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd"
                    r="4.5"/>
            <circle fill="currentColor"
                    clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"/>
          </svg>

        </button>
      </div>
    </header>


    <!--media-->

    <div class="post-media">
      <img class="h-[50%] w-full" src="https://i.pinimg.com/originals/7e/12/39/7e123919543ae203896afc4fa481822e.jpg" alt="">
    </div>

    <!--actions -->

    <div class="section actions-button flex items-center h-[60px]">
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg"
             aria-label="Hareket Akışı" height="22" viewBox="0 0 48 48" width="22">
          <path
              fill="currentColor"
              d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"/>
        </svg>


      </button>
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg"
             aria-label="Yorum Yap" height="22" viewBox="0 0 48 48" width="22">
          <path clip-rule="evenodd"
                fill="currentColor"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fill-rule="evenodd"/>
        </svg>

      </button>
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg"
             aria-label="Direct"
             height="22" viewBox="0 0 48 48" width="22">
          <path
              fill="currentColor"
              d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"/>
        </svg>

      </button>
      <button class="actions-save ml-auto" type="button">
        <svg xmlns="http://www.w3.org/2000/svg"
             aria-label="Kaydet" height="22"
             viewBox="0 0 48 48" width="22">
          <path
              fill="currentColor"
              d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"/>
        </svg>


      </button>
    </div>
    <!--view count-->
    <div class="view-count section ">
      <text-page tag="b">1.345 beğenme</text-page>
    </div>
    <!--comment List-->

    <!--dateTime-->

    <!--comment from-->
  </div>
</template>

<script setup>
import Avatar from "@/components/avatar.vue";
import TextPage from "@/components/textPage.vue";

const name = "Post"
</script>

<style lang="scss" scoped>
.section {
  padding-left: 16px;
  padding-right: 16px;
}

.actions-button {

  button {
    margin-right: 16px;
  }
}
</style>