<template>
  <div class="container mx-auto">
    <div class="w-full p-5 shadow-xl border-2 border-gray-100 mt-5 rounded-xl">
      <div class="w-full flex items-center justify-start">
        <img src="/img/heart.png" class="ml-3" />
        <h1
          class="text-lg md:text-xl font-bold flex items-center text-right text-purple-th"
        >
          {{ data.name }}
        </h1>
      </div>
      <div
        class="rounded-xl py-3 px-5 mt-5 bg-gradient-to-r from-blue-th to-green-th text-white mx-3 md:mx-0"
      >
        <h1 class="md:text-xl">{{ data.title }}</h1>
      </div>

      <div
        class="w-full mt-5 flex flex-col md:flex-row-reverse text-center md:text-right items-center md:items-start justify-between"
      >
        <img
          :src="data.image"
          class="object-cover w-[300px] md:max-w-[500px] md:w-auto md:max-h-[400px]"
        />
        <div class="max-w-[700px]">
          <h1 class="font-bold">
            سوابق علمی و اجرایی :
          </h1>
          <p class="opacity-75 mt-5">
            {{ data.text }}
          </p>
          <button
            class="border-2 border-green-th text-green-th rounded-xl px-5 py-3 mt-5 transition duration:200 hover:bg-green-th hover:text-white"
          >
            مشاهده رزومه {{ data.name }}
          </button>
          <div class="flex items-center mt-5">
            <div class="text-green-th ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <a href="tel:07132352530">
              07132352530
            </a>
          </div>
          <div class="flex items-center mt-3">
            <div class="text-green-th ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <a href="mailto:herasat@sums.ac.ir">
              herasat@sums.ac.ir
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Landing } from "@/reqs/index";

export default {
  async asyncData() {
    try {
      const res = await Landing.chairmen();
      return {
        data: res.data[0]
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
