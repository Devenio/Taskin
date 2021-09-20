<template>
  <div class="w-full">
    <MainSlider
      :slides="[
        { image: '/img/slider-img2.jfif' },
        { image: '/img/slider-img.png' }
      ]"
    />
    <div class="container mx-auto">
      <div
        class="rounded-xl py-3 px-5 flex items-center justify-between mt-5 bg-gradient-to-r from-blue-th to-green-th text-white mx-3 md:mx-0"
      >
        <h1 class="md:text-xl">تسکین با تسکین</h1>
        <nuxt-link to="/" class="md:text-xl flex items-center">
          مشاهده همه
          <fa :icon="['fas', 'angle-left']" class="mr-2" />
        </nuxt-link>
      </div>
    </div>
    <ArchiveSlider
      :slides="[
        { image: '/img/slider-img2.jfif', text: 'متن تصویر اول' },
        { image: '/img/slider-img.png', text: 'متن تصویر دوم' }
      ]"
    />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
