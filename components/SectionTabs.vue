<template>
  <div class="text-white lg:w-3/4">
    <!-- Mobile section tabs -->
    <div
      v-for="(item, index) in sectionItems"
      :key="index"
      class="border-b-2 border-white lg:hidden"
    >
      <div
        class="p-3 flex items-center justify-between cursor-pointer rounded-xl"
        :class="show === index ? 'bg-purple-th' : 'bg-pink-th'"
        @click="show === index ? (show = null) : (show = index)"
      >
        <span>{{ item.title }}</span>
        <fa
          :icon="show === index ? ['fas', 'angle-up'] : ['fas', 'angle-down']"
        />
      </div>
      <div
        v-show="show === index"
        class="shadow-lg rounded-xl bg-white my-3 p-3"
      >
        <h1 class="text-lg font-bold mb-5 text-purple-th">
          {{ item.title }}
        </h1>
        <p
          class="text-black"
          v-if="item.key === 'INTRO' || item.key === 'SERVICES'"
        >
          {{ item.data.text }}
        </p>
        <div v-if="item.key === 'LEADER'">
          <h1 class="text-base font-bold mb-5 text-purple-th">
            {{ item.data.name }}
          </h1>
          <img src="/img/test-img3.png" class="mb-5" />
          <p class="text-black">
            {{ item.data.description }}
          </p>
          <h1 class="text-green-th mt-3">رزومه {{ item.data.name }}</h1>
          <p class="text-black">روزمه و سوابق فعالیت ها</p>
          <div class="flex items-center mt-10 text-black">
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
          <div class="flex items-center mt-3 text-black">
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
        </div>
        <div v-if="item.key === 'MEMBERS'">
          <div class="w-full flex items-center flex-wrap">
            <!-- Members cards -->
            <MemberCard />
          </div>
          <div
            class="rounded-xl border-2 border-purple-th mt-5 p-5 flex flex-col items-start"
          >
            <div class="w-full flex flex-col justify-center items-center">
              <div
                class="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-gray-400"
              >
                <img
                  src="/img/test-img3.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <a href="#" class="mt-3 text-green-th font-bold">
                مشاهده رزومه
              </a>
            </div>
            <div class="text-black">
              <h1 class="text-base text-purple-th">
                علی توکلی
              </h1>
              <sub class="opacity-75">متولد 1370</sub>
              <p class="mt-3">
                مدرک تحصیلی :
                <span class="opacity-75">کارشناسی مهندسی مامپیوتر</span>
              </p>
              <p class="mt-2">
                مرتبه علمی :
                <span class="opacity-75">کارشناسی</span>
              </p>
              <p class="mt-2">
                پست الکترونیکی :
                <span class="opacity-75">sadasdasdasd@gmail.com</span>
              </p>
              <p class="mt-2">
                تلفن داخلی :
                <span class="opacity-75">021-54545454</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Desktop section tabs -->
    <div class="w-full hidden lg:inline-block">
      <div class="w-full flex items-center">
        <div
          class="flex-grow"
          :class="index === sectionItems.length - 1 ? '' : 'ml-2'"
          v-for="(item, index) in sectionItems"
          :key="index"
        >
          <div
            class="bg-pink-th px-3 py-2 rounded-t-xl cursor-pointer text-center transition-all duration-200 hover:bg-purple-th"
            :class="show === index ? 'bg-purple-th' : 'bg-pink-th'"
            @click="show = index"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div
        class="w-full border-t-4 border-purple-th shadow-lg rounded-b-xl p-5"
        v-if="activeItem"
      >
        <h1 class="text-lg font-bold mb-5 text-purple-th">
          {{ activeItem.title }}
        </h1>
        <p
          class="text-black"
          v-if="activeItem.key === 'INTRO' || activeItem.key === 'SERVICES'"
        >
          {{ activeItem.data.text }}
        </p>
        <div v-if="activeItem.key === 'LEADER'" class="flex justify-between">
          <div>
            <h1 class="text-base font-bold mb-5 text-purple-th">
              {{ activeItem.data.name }}
            </h1>
            <p class="text-black">
              {{ activeItem.data.description }}
            </p>
            <h1 class="text-green-th mt-3">رزومه {{ activeItem.data.name }}</h1>
            <p class="text-black">روزمه و سوابق فعالیت ها</p>
            <div class="flex items-center mt-10 text-black">
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
            <div class="flex items-center mt-3 text-black">
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
          </div>
          <img src="/img/test-img3.png" class="max-w-[50%]" />
        </div>
        <div v-if="activeItem.key === 'MEMBERS'">
          <div class="w-full flex items-center flex-wrap">
            <!-- Members cards -->
            <MemberCard />
          </div>
          <div
            class="rounded-xl border-2 border-purple-th mt-5 p-5 flex items-start"
          >
            <div class="flex flex-col items-center">
              <div
                class="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-gray-400"
              >
                <img
                  src="/img/test-img3.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <a href="#" class="mt-3 text-green-th font-bold">
                مشاهده رزومه
              </a>
            </div>
            <div class="mr-8 text-black">
              <h1 class="text-base font-bold text-purple-th">
                علی توکلی
              </h1>
              <sub class="opacity-75">متولد 1370</sub>
              <p class="font-bold mt-3">
                مدرک تحصیلی :
                <span class="opacity-75">کارشناسی مهندسی مامپیوتر</span>
              </p>
              <p class="font-bold mt-2">
                مرتبه علمی :
                <span class="opacity-75">کارشناسی</span>
              </p>
              <p class="font-bold mt-2">
                پست الکترونیکی :
                <span class="opacity-75">sadasdasdasd@gmail.com</span>
              </p>
              <p class="font-bold mt-2">
                تلفن داخلی :
                <span class="opacity-75">021-54545454</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionItems: Array
  },
  data() {
    return {
      show: null,
      activeItem: {},
      activeCard: null
    };
  },
  watch: {
    show: {
      handler() {
        this.activeItem = this.sectionItems[this.show];
      }
    }
  },
  mounted() {
    this.show = 0;
  }
};
</script>

<style lang="scss" scoped></style>
