<template>
  <div class="w-full">
    <MainSlider
      :slides="intro"
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
      :slides="taskinWithYou"
    />
  </div>
</template>

<script>
import { Landing } from "@/reqs/index.js";
export default {
  async asyncData() {
    try {
      const res = await Landing.introduction();
      const res2 = await Landing.taskinWithYou();
      return {
        intro: res.data,
        taskinWithYou: res2.data
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style></style>
