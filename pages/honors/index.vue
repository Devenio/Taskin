<template>
  <div class="w-full">
    <div class="w-full flex items-center justify-center px-5 mt-8">
      <div
        class="flex flex-col items-center mx-3 md:mx-5 transform transition-all duration-300"
        v-for="(item, index) in honorItems"
        :key="index"
        @click="active = index"
        :class="active === index ? 'scale-110' : 'scale-100'"
      >
        <div
          class="md:w-[150px] md:h-[150px] w-[80px] h-[80px] rounded-full flex items-center justify-center cursor-pointer"
          :class="active === index ? 'shadow-blue' : 'shadow-xl'"
        >
          <img :src="item.img" class="w-1/2" />
        </div>
        <h1
          class="mt-3 font-bold text-sm md:text-lg"
          :class="active === index ? 'text-blue-th' : 'text-black'"
        >
          {{ item.text }}
        </h1>
      </div>
    </div>

    <div class="container mx-auto mt-10">
      <div
        class="w-full p-5 md:px-10 flex flex-col items-center text-center md:text-right md:flex-row-reverse justify-between shadow-xl border-2 border-gray-100 rounded-xl"
        v-for="(honor, index) in honors"
        :key="index"
      >
        <img :src="honor.image" class="h-[300px]" />
        <div class="md:min-h-[300px] max-w-[700px] flex flex-col justify-between mt-5 md:mt-0 pl-5">
          <h1 class="font-bold text-lg md:text-xl">
            {{ honor.title }}
          </h1>
          <p class="mt-3 md:mt-0">
            {{ honor.text }}
          </p>
          <a :href="honor.image" target="_blank" download class="font-bold text-lg text-blue-th mt-3 md:mt-0">
            مشاهده تصویر مجوز
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Landing } from "@/reqs/index";

export default {
  data() {
    return {
      active: 1,
      honorItems: [
        {
          img: "/img/honor1.png",
          text: "افتخارات"
        },
        {
          img: "/img/honor2.svg",
          text: "تقدیرنامه ها"
        },
        {
          img: "/img/honor3.png",
          text: "مجوزها"
        }
      ]
    };
  },
  async asyncData() {
    try {
      const res = await Landing.honor();
      return {
        honors: res.data
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>
