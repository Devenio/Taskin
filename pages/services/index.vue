<template>
  <div class="w-full">
    <div
      class="mt-5 md:mt-8 flex items-center lg:justify-center overflow-scroll tabs py-3"
    >
      <div
        class="flex flex-col items-center justify-center w-[100px] md:w-[160px] mx-2 transition duration-200 transform hover:scale-105 cursor-pointer"
        v-for="(tab, index) in services"
        :key="index"
        @click="active_index = index"
      >
        <div
          class="bg-blue-th w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-opacity-50 flex items-center justify-center"
        >
          <div
            class="bg-blue-th w-[85px] h-[85px] md:w-[130px] md:h-[130px] rounded-full flex items-center justify-center"
          >
            <img :src="tab.image" alt="" class="w-1/2" />
          </div>
        </div>
        <p
          class="text-purple-th mt-3 text-center text-xs md:text-base cursor-pointer bg-opacity-50 md:font-bold p-1 rounded-lg"
          :class="active_index === index ? 'bg-pink-th' : 'bg-white'"
        >
          {{ tab.title }}
        </p>
      </div>
    </div>
    <div class="container mx-auto mt-5 md:mt-10 px-3 md:px-0">
      <div
        class="rounded-xl shadow-xl bg-white p-5 md:p-16 border-2 border-gray-200"
      >
        <h1 class="text-purple-th border-r-4 border-purple-th px-5 font-bold">
          {{ title }}
        </h1>
        <img src="/img/service-img.png" class="mx-auto px-5 mt-5 md:mt-0" />
        <p class="mt-8 opacity-75">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Service } from "@/reqs/index";

export default {
  data() {
    return {
      active_index: 0
    };
  },
  async asyncData() {
    try {
      const res = await Service.serviceList();
      return {
        services: res.data
      };
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    text() {
      return this.services[this.active_index].text
    },
    title() {
      return this.services[this.active_index].title
    }
  }
};
</script>

<style scoped>
.tabs::-webkit-scrollbar {
  width: 15px;
  display: none;
}
</style>
